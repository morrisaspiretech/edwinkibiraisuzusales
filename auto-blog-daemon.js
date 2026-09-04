/**
 * Edwin Isuzu — AI Blog Auto-Publisher Daemon
 * Calls Gemini API directly — no need for the dev server to be running.
 * Generates and prepends a new SEO buyer guide to posts.ts every 3 days.
 * Start with: node auto-blog-daemon.js
 */

const https = require("https");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// Load env from the website's .env.local
dotenv.config({ path: path.join(__dirname, "apps/website/.env.local") });

const INTERVAL_DAYS = 3;
const INTERVAL_MS = INTERVAL_DAYS * 24 * 60 * 60 * 1000;
const LOG_FILE = path.join(__dirname, "auto-blog-daemon.log");
const POSTS_FILE = path.join(__dirname, "apps/website/src/data/posts.ts");

const GEMINI_MODEL = "gemini-3.6-flash";

const TOPICS = [
  { model: "NMR85",      type: "bus",    label: "25 Seater School Bus" },
  { model: "NQR81",      type: "bus",    label: "33 Seater PSV Bus" },
  { model: "NLR",        type: "truck",  label: "Light Duty Cargo Truck" },
  { model: "FRR 90",     type: "truck",  label: "10 Ton Cargo Truck" },
  { model: "FVR 34",     type: "truck",  label: "14 Ton Tipper Truck" },
  { model: "FVZ 34",     type: "truck",  label: "Heavy Duty Tipper" },
  { model: "GXZ",        type: "truck",  label: "Prime Mover / Tractor Head" },
  { model: "D-Max TFS",  type: "pickup", label: "Double Cab 4x4 Pickup" },
  { model: "D-Max TFR",  type: "pickup", label: "Single Cab Pickup" },
  { model: "mu-X 3000cc",type: "suv",    label: "7 Seater Diesel SUV" },
  { model: "FRR 90 Bus", type: "bus",    label: "51 Seater City Bus" },
  { model: "FVR 34 Bus", type: "bus",    label: "67 Seater Coach Bus" },
];

const IMAGE_MAP = {
  "NMR85":       "/vehicles/n-series/nmr85/1.jpeg",
  "NQR81":       "/vehicles/n-series/nqr-xtra-real.png",
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
    const slug = `isuzu-${topic.model.toLowerCase().replace(/\s+/g, "-")}-price-kenya`;
    if (!content.includes(slug)) return topic;
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
  log(`🧠 Generating article for: Isuzu ${topic.model} (${topic.label})...`);

  const prompt = `You are a senior SEO content strategist specialising in the Kenya commercial vehicle market.
Write a full Google E-E-A-T compliant Buyer's Guide for the Isuzu ${topic.model} (${topic.label}) targeting Kenyan buyers.

RULES:
- All prices MUST be realistic 2026 Kenya market prices in KES
- Write from genuine expertise — cite real Isuzu Kenya specs
- Target search intent: "Isuzu ${topic.model} price in Kenya 2026"
- Minimum 700 words of real, helpful content in the HTML body
- Use h2 headings, p tags, strong tags, ul/li lists only
- Do NOT include markdown — ONLY valid HTML for the content field
- The slug must be in kebab-case

Return ONLY a valid JSON object (no markdown, no code fences):
{
  "slug": "isuzu-${topic.model.toLowerCase().replace(/\s+/g, "-")}-price-kenya-2026-buyers-guide",
  "title": "Isuzu ${topic.model} Price in Kenya 2026: Complete Buyer's Guide",
  "excerpt": "Compelling 2-sentence meta description mentioning price range and year",
  "content": "<p>Full HTML article body (min 700 words)...</p>",
  "pricingTable": [
    { "model": "string", "priceRange": "KSh X.XM – X.XM", "deposit": "KSh XXX,XXX", "bestUses": "string" }
  ],
  "priceFactors": ["factor 1", "factor 2", "factor 3"],
  "financing": {
    "depositPercent": "10% – 20%",
    "maxMonths": 60,
    "saccoAvailable": true,
    "description": "Detailed financing paragraph for Kenya market"
  },
  "faqs": [
    { "question": "string", "answer": "string" }
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
  log("🤖 Edwin Isuzu AI Blog Daemon started (direct Gemini API — no server required).");
  log(`📅 Will publish a new buyer guide every ${INTERVAL_DAYS} days automatically.`);

  // Publish one immediately on start
  await generateAndPublish();

  // Then repeat every N days
  setInterval(async () => {
    await generateAndPublish();
  }, INTERVAL_MS);
}

run();
