import { NextRequest, NextResponse } from "next/server";
import { GOOGLE_QA_DATABASE } from "@/data/google-qa-database";
import { runFullSeoIndexPush } from "@/lib/seo-robot";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

/**
 * Automated Cron & Webhook for Google Q&A and AI Answer Engine Sync
 * Ingests questions searched on Google and pushes fresh FAQ schema to search crawlers.
 */
export async function GET(req: NextRequest) {
  try {
    const postsFile = path.join(process.cwd(), "src/data/posts.ts");
    let postsContent = fs.readFileSync(postsFile, "utf-8");
    let addedCount = 0;

    for (const item of GOOGLE_QA_DATABASE) {
      if (postsContent.includes(`slug: "${item.slug}"`)) {
        continue;
      }

      const newPost = `
  {
    id: "${item.id}",
    slug: "${item.slug}",
    title: ${JSON.stringify(item.title)},
    seoTitle: ${JSON.stringify(item.title)},
    excerpt: ${JSON.stringify(item.metaDescription)},
    content: ${JSON.stringify(item.articleHtml)},
    image: "${item.heroImage}",
    date: "${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}",
    category: "${item.category}",
    author: {
      name: "Edwin Kibira",
      role: "Isuzu Sales Specialist",
      avatar: "/logo.jpg",
    },
    pricingTable: ${JSON.stringify(item.pricingTable)},
    priceFactors: ${JSON.stringify(item.priceFactors)},
    financing: ${JSON.stringify(item.financing)},
    faqs: ${JSON.stringify(item.faqs)},
  },`;

      postsContent = postsContent.replace(
        "export const BLOG_POSTS: BlogPost[] = [",
        `export const BLOG_POSTS: BlogPost[] = [${newPost}`
      );
      addedCount++;
    }

    if (addedCount > 0) {
      fs.writeFileSync(postsFile, postsContent, "utf-8");
    }

    // Trigger full real-time SEO index push to Google and IndexNow
    const seoReport = await runFullSeoIndexPush().catch((e) => ({ error: e.message }));

    return NextResponse.json({
      success: true,
      message: `Google Q&A Cron executed successfully. Added ${addedCount} new guide(s).`,
      addedCount,
      totalQACategories: GOOGLE_QA_DATABASE.length,
      seoReport,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
