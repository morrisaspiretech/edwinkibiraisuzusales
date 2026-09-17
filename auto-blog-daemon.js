/**
 * Edwin Isuzu – AI Blog Auto-Publisher
 * Calls Gemini API with structured JSON output and automatic retries.
 * Generates high-ranking, in-depth SEO articles targeting Kenyan Google searches.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// Load dotenv
try { require("dotenv").config({ path: path.join(__dirname, "apps/website/.env.local") }); } catch {}
try { require("dotenv").config({ path: path.join(__dirname, ".env") }); } catch {}

const LOG_FILE = path.join(__dirname, "auto-blog-daemon.log");
const POSTS_FILE = path.join(__dirname, "apps/website/src/data/posts.ts");

// Available valid Gemini models in priority order
const GEMINI_MODELS = ["gemini-2.5-flash", "gemini-3.7-flash", "gemini-3.6-flash", "gemini-3.5-flash", "gemini-2.5-pro"];

const TOPICS = [
  // VEHICLE BUYER GUIDES
  { slug: "isuzu-nqr-price-kenya",          model: "NQR81",         type: "bus",       label: "33-Seater PSV/School Bus",           searchIntent: "Isuzu NQR price in Kenya 2026" },
  { slug: "isuzu-nmr85-price-kenya",        model: "NMR85",         type: "bus",       label: "25-Seater School Bus",               searchIntent: "Isuzu NMR85 price in Kenya 2026" },
  { slug: "isuzu-nlr-price-kenya",          model: "NLR",           type: "truck",     label: "Light Duty Cargo Truck",             searchIntent: "Isuzu NLR price in Kenya 2026" },
  { slug: "isuzu-frr90-price-kenya",        model: "FRR 90",        type: "truck",     label: "10 Ton Cargo/Tipper Truck",          searchIntent: "Isuzu FRR 90 price in Kenya 2026" },
  { slug: "isuzu-fvr34-price-kenya",        model: "FVR 34",        type: "truck",     label: "14 Ton Heavy Truck",                 searchIntent: "Isuzu FVR 34 price in Kenya 2026" },
  { slug: "isuzu-fvz34-price-kenya",        model: "FVZ 34",        type: "truck",     label: "Heavy Duty Tipper Truck",            searchIntent: "Isuzu FVZ 34 price in Kenya 2026" },
  { slug: "isuzu-gxz-prime-mover-kenya",   model: "GXZ",           type: "truck",     label: "Prime Mover / Tractor Head",         searchIntent: "Isuzu GXZ prime mover price Kenya 2026" },
  { slug: "isuzu-dmax-double-cab-kenya",   model: "D-Max TFS",     type: "pickup",    label: "D-Max Double Cab 4x4 Pickup",        searchIntent: "Isuzu D-Max double cab price Kenya 2026" },
  { slug: "isuzu-dmax-single-cab-kenya",   model: "D-Max TFR",     type: "pickup",    label: "D-Max Single Cab Pickup",            searchIntent: "Isuzu D-Max single cab price Kenya 2026" },
  { slug: "isuzu-mux-price-kenya",         model: "mu-X 3000cc",   type: "suv",       label: "mu-X 7-Seater Diesel SUV",           searchIntent: "Isuzu mu-X price in Kenya 2026" },
  { slug: "isuzu-frr90-51-seater-kenya",   model: "FRR 90 Bus",    type: "bus",       label: "51-Seater City Bus",                 searchIntent: "Isuzu FRR 90 51 seater bus price Kenya" },
  { slug: "isuzu-fvr34-67-seater-kenya",   model: "FVR 34 Bus",    type: "bus",       label: "67-Seater Coach Bus",                searchIntent: "Isuzu FVR 34 67 seater bus price Kenya" },
  { slug: "isuzu-nqr-xtra-price-kenya",    model: "NQR XTRA",      type: "bus",       label: "NQR XTRA Heavy Bus",                 searchIntent: "Isuzu NQR XTRA price Kenya 2026" },

  // FINANCING GUIDES
  { slug: "isuzu-truck-financing-kenya",         model: "FRR 90",      type: "financing", label: "Truck Financing Guide Kenya",         searchIntent: "how to finance an Isuzu truck in Kenya banks 2026" },
  { slug: "isuzu-bus-financing-zero-deposit",    model: "NQR81",       type: "financing", label: "Zero Deposit Bus Financing Kenya",    searchIntent: "Isuzu bus zero deposit financing Kenya" },
  { slug: "isuzu-dmax-bank-loan-kenya",          model: "D-Max TFS",   type: "financing", label: "D-Max Bank Loan Guide",               searchIntent: "Isuzu D-Max bank loan Kenya 2026" },
  { slug: "isuzu-mux-sacco-financing-kenya",     model: "mu-X 3000cc", type: "financing", label: "mu-X SACCO Financing Guide",          searchIntent: "Isuzu mu-X SACCO loan Kenya" },
  { slug: "isuzu-truck-logbook-loan-kenya",      model: "FVR 34",      type: "financing", label: "Truck Logbook Loan Explained",         searchIntent: "Isuzu truck logbook loan Kenya 2026" },

  // COMPARISONS
  { slug: "isuzu-dmax-vs-toyota-hilux-kenya",    model: "D-Max TFS",   type: "comparison",label: "D-Max vs Toyota Hilux Kenya",          searchIntent: "Isuzu D-Max vs Toyota Hilux Kenya 2026 price" },
  { slug: "isuzu-mux-vs-toyota-fortuner-kenya",  model: "mu-X 3000cc", type: "comparison",label: "mu-X vs Toyota Fortuner Kenya",        searchIntent: "Isuzu mu-X vs Toyota Fortuner Kenya price" },
  { slug: "isuzu-nqr-vs-toyota-coaster-kenya",   model: "NQR81",       type: "comparison",label: "Isuzu NQR vs Toyota Coaster Bus",      searchIntent: "Isuzu NQR vs Toyota Coaster Kenya price" },
  { slug: "isuzu-frr-vs-mitsubishi-fuso-kenya",  model: "FRR 90",      type: "comparison",label: "FRR 90 vs Mitsubishi Fuso Kenya",      searchIntent: "Isuzu FRR vs Mitsubishi Fuso price Kenya" },
  { slug: "isuzu-gxz-vs-man-prime-mover-kenya",  model: "GXZ",         type: "comparison",label: "GXZ vs MAN Prime Mover Kenya",         searchIntent: "Isuzu GXZ vs MAN truck Kenya price" },

  // MAINTENANCE & OWNERSHIP
  { slug: "isuzu-truck-maintenance-cost-kenya",  model: "FRR 90",      type: "maintenance",label: "Truck Maintenance Cost Guide Kenya",  searchIntent: "Isuzu truck maintenance cost Kenya 2026" },
  { slug: "isuzu-dmax-service-intervals-kenya",  model: "D-Max TFS",   type: "maintenance",label: "D-Max Service Schedule Kenya",        searchIntent: "Isuzu D-Max service schedule Kenya" },
  { slug: "isuzu-spare-parts-availability-kenya",model: "NQR81",       type: "maintenance",label: "Spare Parts Guide Kenya",             searchIntent: "Isuzu spare parts Kenya availability price" },
  { slug: "isuzu-fuel-consumption-kenya",        model: "FVR 34",      type: "maintenance",label: "Fuel Consumption Guide Kenya",        searchIntent: "Isuzu truck fuel consumption Kenya per km" },

  // BUSINESS USE CASES
  { slug: "isuzu-truck-for-construction-kenya",  model: "FVZ 34",      type: "business",  label: "Best Truck for Construction Kenya",   searchIntent: "best truck for construction business Kenya 2026" },
  { slug: "isuzu-for-school-transport-kenya",    model: "NMR85",       type: "business",  label: "Best Bus for School Transport Kenya", searchIntent: "best school bus Kenya 2026 price" },
  { slug: "isuzu-for-logistics-business-kenya",  model: "NLR",         type: "business",  label: "Cargo Truck for Logistics Business",  searchIntent: "best cargo truck for logistics Kenya 2026" },
  { slug: "isuzu-tipper-for-quarry-kenya",       model: "FVR 34",      type: "business",  label: "Tipper Truck for Quarry Business",    searchIntent: "Isuzu tipper truck quarry Kenya price" },
  { slug: "isuzu-dmax-for-safari-tour-kenya",    model: "D-Max TFS",   type: "business",  label: "D-Max for Safari & Tour Business",    searchIntent: "4x4 pickup for safari Kenya best price 2026" },
  { slug: "isuzu-psv-bus-business-kenya",        model: "NQR81",       type: "business",  label: "PSV Bus Business Guide Kenya",        searchIntent: "start PSV bus business Kenya Isuzu NQR 2026" },
  { slug: "isuzu-mux-company-car-kenya",         model: "mu-X 3000cc", type: "business",  label: "mu-X as Company/Staff Car Kenya",     searchIntent: "Isuzu mu-X company car Kenya 2026" },

  // BODY TYPES
  { slug: "isuzu-tipper-body-price-kenya",       model: "FVR 34",      type: "bodytype",  label: "Tipper Body Building Cost Kenya",     searchIntent: "Isuzu tipper body price Kenya 2026" },
  { slug: "isuzu-box-body-truck-kenya",          model: "FRR 90",      type: "bodytype",  label: "Box Body Truck Kenya",                searchIntent: "Isuzu box body truck price Kenya 2026" },
  { slug: "isuzu-flatbed-truck-kenya",           model: "NLR",         type: "bodytype",  label: "Flatbed/Open Body Truck Kenya",       searchIntent: "Isuzu flatbed truck Kenya price 2026" },
  { slug: "isuzu-refrigerator-truck-kenya",      model: "FRR 90",      type: "bodytype",  label: "Refrigerated Body Truck Kenya",       searchIntent: "Isuzu refrigerator truck Kenya price 2026" },

  // MARKET/BUYING TIPS
  { slug: "new-vs-used-isuzu-truck-kenya",       model: "NQR81",       type: "buying",    label: "New vs Used Isuzu Truck Guide",       searchIntent: "new vs used Isuzu truck Kenya which is better" },
  { slug: "isuzu-authorized-dealer-kenya",       model: "D-Max TFS",   type: "buying",    label: "How to Find Authorized Isuzu Dealer", searchIntent: "authorized Isuzu dealer Kenya 2026 list" },
  { slug: "isuzu-kenya-pricelist-2026",          model: "FRR 90",      type: "buying",    label: "Complete Isuzu Kenya Pricelist 2026", searchIntent: "Isuzu Kenya pricelist 2026 all models" },
  { slug: "isuzu-chassis-vs-body-fitted-kenya",  model: "NQR81",       type: "buying",    label: "Chassis vs Body-Fitted Price Diff",   searchIntent: "Isuzu chassis vs body fitted price difference Kenya" },
  { slug: "isuzu-insurance-cost-kenya",          model: "D-Max TFS",   type: "buying",    label: "Isuzu Insurance Cost Kenya Guide",    searchIntent: "Isuzu truck insurance cost Kenya 2026" },
];

const IMAGE_MAP = {
  "NMR85":       "/vehicles/n-series/nmr85/1.jpeg",
  "NQR81":       "/vehicles/n-series/nqr-xtra-real.png",
  "NQR XTRA":   "/vehicles/n-series/nqr-xtra-real.png",
  "NLR":         "/vehicles/n-series/nlr-chassis.png",
  "FRR 90":      "/vehicles/grouped/batch1/1.jpeg",
  "FVR 34":      "/vehicles/f-series/fvr90l/1.jpeg",
  "FVZ 34":      "/vehicles/f-series/fvz34n/1.jpeg",
  "GXZ":         "/vehicles/gxz-mover.webp",
  "D-Max TFS":   "/vehicles/tfs87-double-auto/img-1.jpeg",
  "D-Max TFR":   "/vehicles/tfs87-single-1.jpg",
  "mu-X 3000cc": "/vehicles/mu-x-3000cc-gallery/1.jpeg",
  "FRR 90 Bus":  "/vehicles/buses/frr90n-51/1.jpg",
  "FVR 34 Bus":  "/vehicles/buses/fvr34-4x2/9.jpg",
};

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try {
    fs.appendFileSync(LOG_FILE, line + "\n");
  } catch {}
}

function getNextTopics(count = 1) {
  let content = "";
  try { content = fs.readFileSync(POSTS_FILE, "utf-8"); } catch {}

  const unwritten = TOPICS.filter(t => !content.includes(t.slug));
  if (unwritten.length > 0) {
    return unwritten.slice(0, count);
  }
  const shuffled = [...TOPICS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function callGeminiWithRetry(apiKey, prompt, modelIndex = 0, attempt = 1) {
  const model = GEMINI_MODELS[modelIndex] || GEMINI_MODELS[0];
  
  try {
    return await new Promise((resolve, reject) => {
      const body = JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.7,
          maxOutputTokens: 16384,
        },
      });

      const options = {
        hostname: "generativelanguage.googleapis.com",
        path: `/v1beta/models/${model}:generateContent?key=${apiKey}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      };

      const req = https.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode === 200) {
            try {
              const parsed = JSON.parse(data);
              const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (!text) {
                reject(new Error("No text content returned in candidates"));
              } else {
                resolve(text);
              }
            } catch (e) {
              reject(new Error(`Failed to parse response envelope: ${e.message}`));
            }
          } else {
            reject(new Error(`API responded with HTTP ${res.statusCode}: ${data.substring(0, 300)}`));
          }
        });
      });

      req.on("error", reject);
      req.write(body);
      req.end();
    });
  } catch (err) {
    log(`⚠️ Attempt ${attempt} failed with ${model}: ${err.message}`);
    
    // If rate limit / busy (503 / 429), wait and retry same or next model
    if (attempt <= 3) {
      const delay = attempt * 3000;
      log(`⏳ Waiting ${delay / 1000}s before retrying...`);
      await sleep(delay);
      const nextModelIdx = (modelIndex + 1) % GEMINI_MODELS.length;
      return callGeminiWithRetry(apiKey, prompt, nextModelIdx, attempt + 1);
    }
    throw err;
  }
}

async function generateSingleArticle(apiKey, topic) {
  log(`🚀 Generating article: [${topic.type.toUpperCase()}] ${topic.label} – Search query: "${topic.searchIntent}"`);

  const prompt = `You are an elite automotive SEO strategist and Kenya commercial vehicle specialist.
Your goal is to write the #1 ranking Google Kenya article for the search query: "${topic.searchIntent}"

This article is for Edwin Kibira Isuzu – an authorized Isuzu Kenya sales specialist.
The article must be highly informative, practical, and optimized for Kenyan business owners and transport operators.

ARTICLE DETAILS:
- Topic: Isuzu ${topic.model} (${topic.label})
- Type: ${topic.type}
- Target Keyword: "${topic.searchIntent}"
- Slug: "${topic.slug}"

MANDATORY RULES:
1. TARGET KEYWORDS: Include "${topic.searchIntent}" and variations naturally in Title, H2 headings, introductory paragraph, and throughout the text.
2. 2026 REALISTIC KENYAN PRICES: Provide accurate Kenyan Shillings (KES) estimates (commercial trucks/buses KSh 3.5M - 22M, D-Max pickups KSh 4.2M - 7.5M, mu-X SUVs KSh 8.5M - 9.8M).
3. VALUABLE CONTENT: Detailed HTML content (800 - 1200 words) using <h2>, <h3>, <p>, <strong>, <ul>, <li> tags ONLY. Do NOT include markdown fences, code blocks, or raw JSON inside the content string.
4. LOCAL KENYA CONTEXT: Mention Nairobi dealership availability, Mombasa road freight, unpaved murram road capability, NTSA licensing/PSV compliance, Asset Finance partners (Co-op Bank, Equity, NCBA, KCB, SACCOs), and genuine spare parts availability.
5. STRONG CALL TO ACTION: Include clear recommendations to contact Edwin Kibira (authorized Isuzu sales consultant) for official quotation, viewing, and fast financing approvals.
6. FAQS: Provide 5 to 7 detailed questions and answers covering top search questions Kenyan buyers ask on Google.

Return ONLY a valid JSON object matching this schema:
{
  "slug": "${topic.slug}",
  "title": "SEO-optimized, high-CTR article title with primary keyword and 2026",
  "seoTitle": "Complete SEO Title (under 65 chars)",
  "excerpt": "Engaging 2-sentence meta description with keyword and price range (under 160 chars)",
  "content": "<h2>...</h2><p>Full HTML body with clear headings, specs, benefits, practical advice...</p>",
  "pricingTable": [
    { "model": "Model/Variant name", "priceRange": "KSh X.XM - X.XM", "deposit": "KSh XXX,XXX", "bestUses": "Key ideal usage" }
  ],
  "priceFactors": ["Factor 1", "Factor 2", "Factor 3", "Factor 4"],
  "financing": {
    "depositPercent": "10% - 20%",
    "maxMonths": 72,
    "saccoAvailable": true,
    "description": "Thorough breakdown of bank and SACCO asset finance options in Kenya"
  },
  "faqs": [
    { "question": "Question Kenyan buyers ask Google", "answer": "Detailed helpful answer" }
  ]
}`;

  const rawJson = await callGeminiWithRetry(apiKey, prompt);
  
  // Extract JSON object
  let postData;
  try {
    postData = JSON.parse(rawJson);
  } catch (e) {
    const jsonMatch = rawJson.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      postData = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error(`Invalid JSON returned: ${e.message}`);
    }
  }

  const dateStr = new Date().toLocaleDateString("en-KE", {
    year: "numeric", month: "long", day: "numeric",
  });

  const safeContent = (postData.content || "").replace(/`/g, "\\`").replace(/\${/g, "\\${");
  const pricingJson = JSON.stringify(postData.pricingTable || [], null, 6).replace(/"([a-zA-Z]+)":/g, "$1:");
  const factorsJson = JSON.stringify(postData.priceFactors || []);
  const financingJson = JSON.stringify(postData.financing || null, null, 6);
  const faqsJson = JSON.stringify(postData.faqs || [], null, 6).replace(/"([a-zA-Z]+)":/g, "$1:");

  const newEntry = `
  {
    id: "${Date.now()}-${Math.random().toString(36).substr(2, 4)}",
    slug: "${postData.slug}",
    title: ${JSON.stringify(postData.title)},
    seoTitle: ${JSON.stringify(postData.seoTitle || postData.title)},
    excerpt: ${JSON.stringify(postData.excerpt)},
    content: \`${safeContent}\`,
    image: "${IMAGE_MAP[topic.model] || "/vehicles/f-series-truck.webp"}",
    date: "${dateStr}",
    category: "Buyer Guides",
    author: {
      name: "Edwin Kibira",
      role: "Isuzu Sales Specialist",
      avatar: "/logo.jpg",
    },
    pricingTable: ${pricingJson},
    priceFactors: ${factorsJson},
    financing: ${financingJson},
    faqs: ${faqsJson},
  },`;

  let postsContent = fs.readFileSync(POSTS_FILE, "utf-8");
  const MARKER = "export const BLOG_POSTS: BlogPost[] = [";
  if (!postsContent.includes(MARKER)) {
    throw new Error("Could not find BLOG_POSTS marker in posts.ts");
  }

  postsContent = postsContent.replace(MARKER, `${MARKER}${newEntry}`);
  fs.writeFileSync(POSTS_FILE, postsContent, "utf-8");

  log(`✅ Successfully published: "${postData.title}" (/blog/${postData.slug})`);
  return postData;
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    log("❌ GEMINI_API_KEY is not configured.");
    process.exit(1);
  }

  const args = process.argv.slice(2);
  let count = 1;
  const countArg = args.find(a => a.startsWith("--count="));
  const isAll = args.includes("--all");

  if (isAll) {
    count = TOPICS.length;
  } else if (countArg) {
    count = parseInt(countArg.split("=")[1], 10) || 1;
  }

  const topicsToGenerate = getNextTopics(count);
  log(`📋 Found ${topicsToGenerate.length} topic(s) to generate.`);

  let successCount = 0;
  for (const topic of topicsToGenerate) {
    try {
      await generateSingleArticle(apiKey, topic);
      successCount++;
      if (topicsToGenerate.length > 1) {
        await sleep(3000);
      }
    } catch (err) {
      log(`❌ Failed generating "${topic.slug}": ${err.message}`);
    }
  }

  log(`🎉 Completed! Successfully published ${successCount}/${topicsToGenerate.length} articles.`);
}

main().catch(err => {
  log(`💥 Fatal error: ${err.message}`);
  process.exit(1);
});
