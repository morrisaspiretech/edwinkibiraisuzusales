import { NextRequest, NextResponse } from "next/server";
import { runFullSeoIndexPush, submitToIndexNow } from "@/lib/seo-robot";

export const dynamic = "force-dynamic";

/**
 * Authorized SEO Indexing Robot Endpoint
 * GET: Runs a full push of all site URLs to Google, Bing, and IndexNow
 * POST: Submits specific URLs provided in JSON body { urls: [...] }
 */
export async function GET(req: NextRequest) {
  try {
    const report = await runFullSeoIndexPush();
    return NextResponse.json({
      success: true,
      message: "Authorized SEO Robot executed successfully. All URLs pushed to search engine crawlers.",
      report,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const urls: string[] = Array.isArray(body?.urls) ? body.urls : [];

    if (urls.length === 0) {
      const report = await runFullSeoIndexPush();
      return NextResponse.json({ success: true, message: "Full site index pushed", report });
    }

    const indexNowResult = await submitToIndexNow(urls);
    return NextResponse.json({
      success: true,
      message: `Pushed ${urls.length} URL(s) to IndexNow`,
      indexNow: indexNowResult,
      urls,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
