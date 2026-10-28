import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.edwinkibiraisuzusales.co.ke";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Skip static assets, internal Next.js files, and API routes that don't need redirecting
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // images, icons, robots.txt, sitemap.xml, etc.
  ) {
    return NextResponse.next();
  }

  // 1. Domain Canonicalization:
  // If request arrives at Render's internal domain (*.onrender.com) or non-www apex (edwinkibiraisuzusales.co.ke),
  // permanently 301 redirect to the official production canonical domain.
  const isRenderDomain = host.includes("onrender.com");
  const isApexDomain = host === "edwinkibiraisuzusales.co.ke";
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");

  if (!isLocalhost && (isRenderDomain || isApexDomain)) {
    const destination = new URL(`${pathname}${search}`, CANONICAL_ORIGIN);
    return NextResponse.redirect(destination, 301);
  }

  const response = NextResponse.next();

  // 2. High-performance SEO & AI Crawler response headers
  // Gives Googlebot, Bingbot, GPTBot, and Perplexity permission to feature rich snippets and full-bleed image previews
  response.headers.set(
    "X-Robots-Tag",
    "all, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * 1. /_next/ (Next.js internals)
     * 2. /api/ (API routes)
     * 3. Static files (.ico, .jpg, .png, .webp, .svg, .xml, .txt)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

