/**
 * Edwin Isuzu — AI Blog Auto-Publisher
 * Calls Gemini API directly — no need for the dev server to be running.
 * Generates a new high-ranking SEO article daily targeting Kenya Google searches.
 * Runs once and exits — designed to be called by a cron job or GitHub Actions.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// Load dotenv only if available (local dev), in GitHub Actions env vars are injected
try { require("dotenv").config({ path: path.join(__dirname, "apps/website/.env.local") }); } catch {}

const LOG_FILE = path.join(__dirname, "auto-blog-daemon.log");
const POSTS_FILE = path.join(__dirname, "apps/website/src/data/posts.ts");

const GEMINI_MODEL = "gemini-2.0-flash";

// 40+ topics targeting real Kenyan Google search intent
// Based on: price queries, financing, comparisons, maintenance, business use, body types
const TOPICS = [
  // ── VEHICLE BUYER GUIDES (price/spec focused) ──
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

  // ── FINANCING GUIDES (high search volume) ──
  { slug: "isuzu-truck-financing-kenya",         model: "FRR 90",      type: "financing", label: "Truck Financing Guide Kenya",         searchIntent: "how to finance an Isuzu truck in Kenya banks 2026" },
  { slug: "isuzu-bus-financing-zero-deposit",    model: "NQR81",       type: "financing", label: "Zero Deposit Bus Financing Kenya",    searchIntent: "Isuzu bus zero deposit financing Kenya" },
  { slug: "isuzu-dmax-bank-loan-kenya",          model: "D-Max TFS",   type: "financing", label: "D-Max Bank Loan Guide",               searchIntent: "Isuzu D-Max bank loan Kenya 2026" },
  { slug: "isuzu-mux-sacco-financing-kenya",     model: "mu-X 3000cc", type: "financing", label: "mu-X SACCO Financing Guide",          searchIntent: "Isuzu mu-X SACCO loan Kenya" },
  { slug: "isuzu-truck-logbook-loan-kenya",      model: "FVR 34",      type: "financing", label: "Truck Logbook Loan Explained",         searchIntent: "Isuzu truck logbook loan Kenya 2026" },

  // ── COMPARISONS (ranking opportunity) ──
  { slug: "isuzu-dmax-vs-toyota-hilux-kenya",    model: "D-Max TFS",   type: "comparison",label: "D-Max vs Toyota Hilux Kenya",          searchIntent: "Isuzu D-Max vs Toyota Hilux Kenya 2026 price" },
  { slug: "isuzu-mux-vs-toyota-fortuner-kenya",  model: "mu-X 3000cc", type: "comparison",label: "mu-X vs Toyota Fortuner Kenya",        searchIntent: "Isuzu mu-X vs Toyota Fortuner Kenya price" },
  { slug: "isuzu-nqr-vs-toyota-coaster-kenya",   model: "NQR81",       type: "comparison",label: "Isuzu NQR vs Toyota Coaster Bus",      searchIntent: "Isuzu NQR vs Toyota Coaster Kenya price" },
  { slug: "isuzu-frr-vs-mitsubishi-fuso-kenya",  model: "FRR 90",      type: "comparison",label: "FRR 90 vs Mitsubishi Fuso Kenya",      searchIntent: "Isuzu FRR vs Mitsubishi Fuso price Kenya" },
  { slug: "isuzu-gxz-vs-man-prime-mover-kenya",  model: "GXZ",         type: "comparison",label: "GXZ vs MAN Prime Mover Kenya",         searchIntent: "Isuzu GXZ vs MAN truck Kenya price" },

  // ── MAINTENANCE & OWNERSHIP ──
  { slug: "isuzu-truck-maintenance-cost-kenya",  model: "FRR 90",      type: "maintenance",label: "Truck Maintenance Cost Guide Kenya",  searchIntent: "Isuzu truck maintenance cost Kenya 2026" },
  { slug: "isuzu-dmax-service-intervals-kenya",  model: "D-Max TFS",   type: "maintenance",label: "D-Max Service Schedule Kenya",        searchIntent: "Isuzu D-Max service schedule Kenya" },
  { slug: "isuzu-spare-parts-availability-kenya",model: "NQR81",       type: "maintenance",label: "Spare Parts Guide Kenya",             searchIntent: "Isuzu spare parts Kenya availability price" },
  { slug: "isuzu-fuel-consumption-kenya",        model: "FVR 34",      type: "maintenance",label: "Fuel Consumption Guide Kenya",        searchIntent: "Isuzu truck fuel consumption Kenya per km" },

  // ── BUSINESS USE CASES ──
  { slug: "isuzu-truck-for-construction-kenya",  model: "FVZ 34",      type: "business",  label: "Best Truck for Construction Kenya",   searchIntent: "best truck for construction business Kenya 2026" },
  { slug: "isuzu-for-school-transport-kenya",    model: "NMR85",       type: "business",  label: "Best Bus for School Transport Kenya", searchIntent: "best school bus Kenya 2026 price" },
  { slug: "isuzu-for-logistics-business-kenya",  model: "NLR",         type: "business",  label: "Cargo Truck for Logistics Business",  searchIntent: "best cargo truck for logistics Kenya 2026" },
  { slug: "isuzu-tipper-for-quarry-kenya",       model: "FVR 34",      type: "business",  label: "Tipper Truck for Quarry Business",    searchIntent: "Isuzu tipper truck quarry Kenya price" },
  { slug: "isuzu-dmax-for-safari-tour-kenya",    model: "D-Max TFS",   type: "business",  label: "D-Max for Safari & Tour Business",    searchIntent: "4x4 pickup for safari Kenya best price 2026" },
  { slug: "isuzu-psv-bus-business-kenya",        model: "NQR81",       type: "business",  label: "PSV Bus Business Guide Kenya",        searchIntent: "start PSV bus business Kenya Isuzu NQR 2026" },
  { slug: "isuzu-mux-company-car-kenya",         model: "mu-X 3000cc", type: "business",  label: "mu-X as Company/Staff Car Kenya",     searchIntent: "Isuzu mu-X company car Kenya 2026" },

  // ── BODY TYPES (highly specific, low competition) ──
  { slug: "isuzu-tipper-body-price-kenya",       model: "FVR 34",      type: "bodytype",  label: "Tipper Body Building Cost Kenya",     searchIntent: "Isuzu tipper body price Kenya 2026" },
  { slug: "isuzu-box-body-truck-kenya",          model: "FRR 90",      type: "bodytype",  label: "Box Body Truck Kenya",                searchIntent: "Isuzu box body truck price Kenya 2026" },
  { slug: "isuzu-flatbed-truck-kenya",           model: "NLR",         type: "bodytype",  label: "Flatbed/Open Body Truck Kenya",       searchIntent: "Isuzu flatbed truck Kenya price 2026" },
  { slug: "isuzu-refrigerator-truck-kenya",      model: "FRR 90",      type: "bodytype",  label: "Refrigerated Body Truck Kenya",       searchIntent: "Isuzu refrigerator truck Kenya price 2026" },

  // ── MARKET/BUYING TIPS ──
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
  fs.appendFileSync(LOG_FILE, line + "\n");
}

function getNextTopic() {
  let content = "";
  try { content = fs.readFileSync(POSTS_FILE, "utf-8"); } catch { /**/ }

  for (const topic of TOPICS) {
    if (!content.includes(topic.slug)) return topic;
  }
  // All covered — pick a random one to refresh
  return TOPICS[Math.floor(Math.random() * TOPICS.length)];
}

function callGemini(apiKey, prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 4096 },
    });

    const options = {
      hostname: "generativelanguage.googleapis.com",
      path: `/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
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
        try {
          const parsed = JSON.parse(data);
          const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (!text) {
            reject(new Error(`Gemini returned no text. Status: ${res.statusCode}. Body: ${data.substring(0, 300)}`));
          } else {
            resolve(text);
          }
        } catch (e) {
          reject(new Error(`Failed to parse Gemini response: ${e.message}`));
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function generateAndPublish() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    log("❌ GEMINI_API_KEY not set in apps/website/.env.local — aborting.");
    return;
  }

  const topic = getNextTopic();
  log(`🧠 Generating article: [${topic.type.toUpperCase()}] ${topic.label} — targeting: "${topic.searchIntent}"`);

  const prompt = `You are a senior SEO content strategist and Kenya commercial vehicle expert with 15+ years experience.
Your goal is to write the #1 ranking Google article for the search query: "${topic.searchIntent}"

This article is for Edwin Kibira Isuzu — an authorized Isuzu dealer in Kenya.
The article must outrank isuzu.co.ke, lydiaisuzutrucks.com, and jiji.co.ke on Google Kenya.

ARTICLE TYPE: ${topic.type} — Isuzu ${topic.model} (${topic.label})

MANDATORY RULES:
- Target keyword: "${topic.searchIntent}" — use it in the title, first paragraph, and h2 headings naturally
- All prices MUST be realistic 2026 Kenya market prices in KES (check typical ranges: trucks KSh 3M–25M, pickups KSh 4M–8M, buses KSh 4M–12M)
- Minimum 900 words of genuinely helpful, expert content in the HTML body
- Structure: Introduction → Key Facts/Specs → Pricing → Financing Options → Comparison/Tips → FAQs → CTA
- Use ONLY h2, h3, p, strong, ul, li tags — NO markdown, NO code fences in content
- Include Kenya-specific context: local roads, spare parts availability in Nairobi, NTSA compliance, PSV licensing where relevant
- Add a strong CTA at the end: "Contact Edwin Kibira on WhatsApp for the best 2026 price"
- The slug must exactly be: "${topic.slug}"
- Write 5–7 FAQs covering what Kenyan buyers actually ask on Google

Return ONLY a valid JSON object (no markdown fences, no extra text):
{
  "slug": "${topic.slug}",
  "title": "SEO-optimized title containing the target keyword",
  "excerpt": "Compelling 2-sentence meta description containing the target keyword and a price range",
  "content": "<h2>...</h2><p>Full HTML article body (min 900 words)...</p>",
  "pricingTable": [
    { "model": "string", "priceRange": "KSh X.XM – X.XM", "deposit": "KSh XXX,XXX", "bestUses": "string" }
  ],
  "priceFactors": ["factor 1", "factor 2", "factor 3", "factor 4"],
  "financing": {
    "depositPercent": "10% – 20%",
    "maxMonths": 72,
    "saccoAvailable": true,
    "description": "Detailed financing paragraph specific to Kenya market including banks, SACCOs, and Isuzu EA financing"
  },
  "faqs": [
    { "question": "Exact question a Kenyan buyer would Google", "answer": "Direct, helpful answer" }
  ]
}`;

  let rawText;
  try {
    rawText = await callGemini(apiKey, prompt);
  } catch (err) {
    log(`❌ Gemini API error: ${err.message}`);
    return;
  }

  // Extract JSON — strip any stray markdown fences
  const jsonMatch = rawText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    log(`❌ AI returned no valid JSON. Raw: ${rawText.substring(0, 200)}`);
    return;
  }

  let postData;
  try {
    postData = JSON.parse(jsonMatch[0]);
  } catch (e) {
    log(`❌ JSON parse failed: ${e.message}. Raw: ${jsonMatch[0].substring(0, 200)}`);
    return;
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
    id: "${Date.now()}",
    slug: "${postData.slug}",
    title: ${JSON.stringify(postData.title)},
    seoTitle: ${JSON.stringify(postData.title)},
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

  let postsContent;
  try {
    postsContent = fs.readFileSync(POSTS_FILE, "utf-8");
  } catch (e) {
    log(`❌ Cannot read posts.ts: ${e.message}`);
    return;
  }

  const MARKER = "export const BLOG_POSTS: BlogPost[] = [";
  if (!postsContent.includes(MARKER)) {
    log(`❌ Could not find BLOG_POSTS marker in posts.ts`);
    return;
  }

  postsContent = postsContent.replace(MARKER, `${MARKER}${newEntry}`);

  try {
    fs.writeFileSync(POSTS_FILE, postsContent, "utf-8");
  } catch (e) {
    log(`❌ Cannot write posts.ts: ${e.message}`);
    return;
  }

  log(`✅ Published: "${postData.title}"`);
  log(`   → /blog/${postData.slug}`);
}

async function run() {
  log("🤖 Edwin Isuzu AI Blog Script started (direct Gemini API).");
  log("📅 Generating a new buyer guide...");

  // Publish one immediately on start and exit
  await generateAndPublish();
  
  log("✅ Script finished successfully.");
}

run();
