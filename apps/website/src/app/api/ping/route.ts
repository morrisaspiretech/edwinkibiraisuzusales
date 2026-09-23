import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Keepalive endpoint — pinged every 5 minutes by UptimeRobot
// Prevents Render free tier from sleeping (which kills Google crawl ability)
export async function GET() {
  return NextResponse.json({
    status: "alive",
    site: "Edwin Kibirai Isuzu Sales",
    timestamp: new Date().toISOString(),
    message: "Authorized Isuzu Dealer Nairobi Kenya",
  });
}
