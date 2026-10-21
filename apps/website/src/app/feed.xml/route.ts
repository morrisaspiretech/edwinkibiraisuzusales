import { NextResponse } from "next/server";
import { VEHICLES_DATA } from "@/data/vehicles";
import { BLOG_POSTS } from "@/data/posts";

export const dynamic = "force-static";
export const revalidate = 86400; // Cache 24 hours

const BASE_URL = "https://www.edwinkibiraisuzusales.co.ke";

export async function GET() {
  const allVehicles = Object.values(VEHICLES_DATA);
  const posts = BLOG_POSTS || [];

  const vehicleItems = allVehicles.map((v) => {
    const pubDate = new Date().toUTCString();
    const priceText = v.price?.unitPrice ? ` — Price: ${v.price.unitPrice}` : "";
    return `
    <item>
      <title><![CDATA[${v.title}${priceText}]]></title>
      <link>${BASE_URL}/vehicles/${v.id}/</link>
      <guid>${BASE_URL}/vehicles/${v.id}/</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${v.description} Specs: ${v.quickSpecs.engine}, ${v.quickSpecs.transmission}. Brand new Isuzu available in Kenya with up to 100% bank financing.]]></description>
      <category><![CDATA[${v.category}]]></category>
    </item>`;
  });

  const postItems = posts.map((p) => {
    const pubDate = p.date ? new Date(p.date).toUTCString() : new Date().toUTCString();
    return `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${BASE_URL}/blog/${p.slug}/</link>
      <guid>${BASE_URL}/blog/${p.slug}/</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${p.excerpt || p.title}]]></description>
      <category><![CDATA[Isuzu Guides]]></category>
    </item>`;
  });

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Edwin Kibira Isuzu Sales Kenya — Latest Vehicles &amp; Buyer Guides</title>
    <link>${BASE_URL}/</link>
    <description>Authorized Isuzu dealer in Nairobi, Kenya. Brand new Isuzu Trucks (FRR, NLR, NQR, FVR, FVZ), Pickups (D-Max 4x4), and MU-X SUVs with official warranty and asset financing.</description>
    <language>en-ke</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${vehicleItems.join("")}
    ${postItems.join("")}
  </channel>
</rss>`;

  return new NextResponse(rssXml.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      "CDN-Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      "Cloudflare-CDN-Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
