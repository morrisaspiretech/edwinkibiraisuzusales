import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

// All Isuzu topics to rotate through automatically
const TOPICS = [
  { model: "NMR85", type: "bus", label: "25 Seater School Bus" },
  { model: "NQR81", type: "bus", label: "33 Seater PSV Bus" },
  { model: "NLR", type: "truck", label: "Light Duty Cargo Truck" },
  { model: "FRR 90", type: "truck", label: "10 Ton Cargo Truck" },
  { model: "FVR 34", type: "truck", label: "14 Ton Tipper Truck" },
  { model: "FVZ 34", type: "truck", label: "Heavy Duty Tipper" },
  { model: "GXZ", type: "truck", label: "Prime Mover / Tractor Head" },
  { model: "D-Max TFS", type: "pickup", label: "Double Cab 4x4 Pickup" },
  { model: "D-Max TFR", type: "pickup", label: "Single Cab Pickup" },
  { model: "mu-X 3000cc", type: "suv", label: "7 Seater Diesel SUV" },
];

const IMAGE_MAP: Record<string, string> = {
  "NMR85": "/vehicles/n-series/nmr85/1.jpeg",
  "NQR81": "/vehicles/n-series/nqr-xtra-real.png",
  "NLR": "/vehicles/n-series/nlr-canopy.jpg",
  "FRR 90": "/vehicles/grouped/batch1/1.jpeg",
  "FVR 34": "/vehicles/grouped/batch2/1.jpeg",
  "FVZ 34": "/vehicles/grouped/batch3/1.jpeg",
  "GXZ": "/vehicles/grouped/batch4/1.jpeg",
  "D-Max TFS": "/vehicles/tfs87-double-auto/img-1.jpeg",
  "D-Max TFR": "/vehicles/tfs87-single-1.jpg",
  "mu-X 3000cc": "/vehicles/mu-x-3000cc-gallery/1.jpeg",
};

function getNextTopic(postsFile: string): typeof TOPICS[0] {
  // Read existing slugs to avoid duplicate topics
  let content = "";
  try { content = fs.readFileSync(postsFile, "utf-8"); } catch { /* new file */ }

  for (const topic of TOPICS) {
    const slug = `isuzu-${topic.model.toLowerCase().replace(/\s+/g, "-")}-price-kenya`;
    if (!content.includes(slug)) return topic;
  }
  // All topics covered — start repeating with updated year
  return TOPICS[Math.floor(Math.random() * TOPICS.length)];
}

export async function GET(req: NextRequest) {
  // Protect the endpoint — only allow calls with the secret
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "GEMINI_API_KEY not set" }, { status: 500 });
  }

  const postsFile = path.join(process.cwd(), "src/data/posts.ts");
  const topic = getNextTopic(postsFile);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

    const prompt = `You are a senior SEO content strategist specializing in the Kenya commercial vehicle market. 
Write a full Google E-E-A-T compliant Buyer's Guide for the Isuzu ${topic.model} (${topic.label}) targeting Kenyan buyers.

RULES:
- All prices MUST be realistic 2026 Kenya market prices in KES
- Write from genuine expertise perspective, citing real Isuzu Kenya specs
- Target search intent: "Isuzu ${topic.model} price in Kenya 2026"
- Minimum 700 words of real, helpful content in the HTML body
- Use h2 headings, p tags, strong tags, ul/li lists properly
- Do NOT include markdown, ONLY HTML for the content field

Return ONLY a valid JSON object:
{
  "slug": "isuzu-${topic.model.toLowerCase().replace(/\s+/g, "-")}-price-kenya-2026-buyers-guide",
  "title": "Isuzu ${topic.model} ${topic.label} Price in Kenya: 2026 Complete Buyer's Guide",
  "excerpt": "Compelling 2-sentence meta description with price range and year",
  "content": "Full HTML article body (min 700 words)",
  "pricingTable": [
    { "model": "string", "priceRange": "KSh X.XM – X.XM", "deposit": "KSh XXX,XXX", "bestUses": "string" }
  ],
  "priceFactors": ["3-5 key price factor strings"],
  "financing": {
    "depositPercent": "10% – 20%",
    "maxMonths": 60,
    "saccoAvailable": true,
    "description": "Detailed financing paragraph for Kenya market"
  },
  "faqs": [
    { "question": "string", "answer": "detailed answer string" }
  ]
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("AI returned no valid JSON");

    const postData = JSON.parse(jsonMatch[0]);

    const dateStr = new Date().toLocaleDateString("en-KE", {
      year: "numeric", month: "long", day: "numeric"
    });

    // Build the TypeScript entry string
    const pricingJson = JSON.stringify(postData.pricingTable || [], null, 6)
      .replace(/"([a-zA-Z]+)":/g, "$1:");
    const factorsJson = JSON.stringify(postData.priceFactors || []);
    const financingJson = JSON.stringify(postData.financing || null, null, 6);
    const faqsJson = JSON.stringify(postData.faqs || [], null, 6)
      .replace(/"([a-zA-Z]+)":/g, "$1:");
    const safeContent = (postData.content || "").replace(/`/g, "\\`").replace(/\${/g, "\\${");

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

    let postsContent = fs.readFileSync(postsFile, "utf-8");
    postsContent = postsContent.replace(
      "export const BLOG_POSTS: BlogPost[] = [",
      `export const BLOG_POSTS: BlogPost[] = [${newEntry}`
    );
    fs.writeFileSync(postsFile, postsContent, "utf-8");

    return NextResponse.json({
      success: true,
      slug: postData.slug,
      title: postData.title,
      publishedAt: dateStr,
    });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
