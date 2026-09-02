import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Supported topic keywords for Kenya Isuzu market
const ISUZU_TOPICS = [
  { model: "NMR85", type: "bus", keywords: "25 seater school bus price Kenya" },
  { model: "NQR81", type: "bus", keywords: "33 seater PSV bus price Kenya" },
  { model: "NLR", type: "truck", keywords: "light truck price Kenya" },
  { model: "NMR", type: "truck", keywords: "cargo truck price Kenya" },
  { model: "FRR 90", type: "truck", keywords: "10 ton cargo truck price Kenya" },
  { model: "FVR 34", type: "truck", keywords: "14 ton tipper truck price Kenya" },
  { model: "FVZ 34", type: "truck", keywords: "heavy duty tipper price Kenya" },
  { model: "GXZ", type: "truck", keywords: "prime mover truck price Kenya" },
  { model: "D-Max TFS", type: "pickup", keywords: "double cab pickup price Kenya" },
  { model: "D-Max TFR", type: "pickup", keywords: "single cab pickup price Kenya" },
  { model: "mu-X", type: "suv", keywords: "7 seater diesel SUV price Kenya" },
];

const IMAGE_MAP: Record<string, string> = {
  "NMR85": "/vehicles/n-series/nmr85/1.jpeg",
  "NQR81": "/vehicles/n-series/nqr-xtra-real.png",
  "NLR": "/vehicles/n-series/nlr-canopy.jpg",
  "NMR": "/vehicles/n-series/nmr85/1.jpeg",
  "FRR 90": "/vehicles/grouped/batch1/1.jpeg",
  "FVR 34": "/vehicles/grouped/batch2/1.jpeg",
  "FVZ 34": "/vehicles/grouped/batch3/1.jpeg",
  "GXZ": "/vehicles/grouped/batch4/1.jpeg",
  "D-Max TFS": "/vehicles/tfs87-double-auto/img-1.jpeg",
  "D-Max TFR": "/vehicles/tfs87-single-1.jpg",
  "mu-X": "/vehicles/mu-x-3000cc-gallery/1.jpeg",
};

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 });
    }

    const body = await req.json();
    const topicKey = body.model as string;

    const topic = ISUZU_TOPICS.find(t => t.model === topicKey) || 
                  ISUZU_TOPICS[Math.floor(Math.random() * ISUZU_TOPICS.length)];

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are an SEO content expert specializing in the Kenyan commercial vehicle market for Edwin Kibira Isuzu Sales (authorized Isuzu dealer, Nairobi, Kenya). 

Generate a complete, Google-compliant SEO Buyer's Guide blog post for the Isuzu ${topic.model} (${topic.type}).

STRICT RULES (Google E-E-A-T compliance):
- All prices MUST be realistic 2026 Kenya market prices in KES
- Write from experience/expertise perspective
- Include factual Isuzu Kenya specs only
- Do NOT make up statistics or fabricate facts
- Target the high-intent search query: "${topic.model} ${topic.keywords}"
- Minimum 600 words in the content
- Use proper HTML (h2 for headings, p for paragraphs, ul/li for lists, strong for emphasis)

Return ONLY valid JSON in this exact structure:
{
  "slug": "isuzu-${topic.model.toLowerCase().replace(/\s+/g, '-')}-price-kenya-2026-buyers-guide",
  "title": "[SEO Title with price range and year]",
  "excerpt": "[2-3 sentence compelling meta description with price range]",
  "content": "[HTML string with h2 headings, paragraphs, strong tags - minimum 600 words]",
  "category": "Buyer Guides",
  "pricingTable": [
    { "model": "string", "priceRange": "KSh X.XM - X.XM", "deposit": "KSh XXX,XXX", "bestUses": "string" }
  ],
  "priceFactors": ["string array of 3-5 key price drivers"],
  "financing": {
    "depositPercent": "10% - 20%",
    "maxMonths": 60,
    "saccoAvailable": true/false,
    "description": "Detailed financing paragraph"
  },
  "faqs": [
    { "question": "string", "answer": "string" }
  ]
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "AI did not return valid JSON" }, { status: 500 });
    }

    const postData = JSON.parse(jsonMatch[0]);

    // Attach metadata
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" });

    const finalPost = {
      id: Date.now().toString(),
      slug: postData.slug,
      title: postData.title,
      excerpt: postData.excerpt,
      content: postData.content,
      image: IMAGE_MAP[topic.model] || "/vehicles/f-series-truck.webp",
      date: dateStr,
      category: "Buyer Guides",
      author: {
        name: "Edwin Kibira",
        role: "Isuzu Sales Specialist",
        avatar: "/logo.jpg"
      },
      pricingTable: postData.pricingTable || [],
      priceFactors: postData.priceFactors || [],
      financing: postData.financing || null,
      faqs: postData.faqs || [],
      topic: topic.model,
    };

    return NextResponse.json({ post: finalPost });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    topics: [
      "NMR85", "NQR81", "NLR", "NMR", "FRR 90", 
      "FVR 34", "FVZ 34", "GXZ", "D-Max TFS", "D-Max TFR", "mu-X"
    ]
  });
}
