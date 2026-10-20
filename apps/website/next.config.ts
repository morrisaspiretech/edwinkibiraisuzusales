import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
  productionBrowserSourceMaps: false,

  // Performance: compress responses
  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react"],
  },

  // Image Optimization disabled to prevent timeouts on Render free tier
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // 301 Permanent Redirects for legacy/external URLs to their correct active pages
  async redirects() {
    return [
      { source: "/vehicles/fvz34n-tipper-chassis", destination: "/vehicles/f-series-fvz34n/", permanent: true },
      { source: "/vehicles/fvz34n-tipper-chassis/", destination: "/vehicles/f-series-fvz34n/", permanent: true },
      { source: "/vehicles/fvz34t-cargo-truck-chassis", destination: "/vehicles/f-series-fvz34t/", permanent: true },
      { source: "/vehicles/fvz34t-cargo-truck-chassis/", destination: "/vehicles/f-series-fvz34t/", permanent: true },
      { source: "/vehicles/frr90", destination: "/vehicles/f-series-frr90n/", permanent: true },
      { source: "/vehicles/frr90/", destination: "/vehicles/f-series-frr90n/", permanent: true },
      { source: "/vehicles/fvr90l", destination: "/vehicles/f-series-fvr90l/", permanent: true },
      { source: "/vehicles/fvr90l/", destination: "/vehicles/f-series-fvr90l/", permanent: true },
      { source: "/vehicles/fvr90p", destination: "/vehicles/f-series-fvr90p/", permanent: true },
      { source: "/vehicles/fvr90p/", destination: "/vehicles/f-series-fvr90p/", permanent: true },
      { source: "/vehicles/nqr81k", destination: "/vehicles/n-series-nqr81/", permanent: true },
      { source: "/vehicles/nqr81k/", destination: "/vehicles/n-series-nqr81/", permanent: true },
      { source: "/vehicles/nqr-xtra", destination: "/vehicles/n-series-nqr-xtra/", permanent: true },
      { source: "/vehicles/nqr-xtra/", destination: "/vehicles/n-series-nqr-xtra/", permanent: true },
      { source: "/vehicles/nmr85h", destination: "/vehicles/n-series-nmr85/", permanent: true },
      { source: "/vehicles/nmr85h/", destination: "/vehicles/n-series-nmr85/", permanent: true },
      { source: "/vehicles/nlr77e", destination: "/vehicles/n-series-nlr/", permanent: true },
      { source: "/vehicles/nlr77e/", destination: "/vehicles/n-series-nlr/", permanent: true },
      { source: "/vehicles/nps81h", destination: "/vehicles/n-series-nps/", permanent: true },
      { source: "/vehicles/nps81h/", destination: "/vehicles/n-series-nps/", permanent: true },
      { source: "/vehicles/d-max-double-cab", destination: "/vehicles/double-cabin/", permanent: true },
      { source: "/vehicles/d-max-double-cab/", destination: "/vehicles/double-cabin/", permanent: true },
      { source: "/vehicles/d-max-single-cab", destination: "/vehicles/tfr87-4x2/", permanent: true },
      { source: "/vehicles/d-max-single-cab/", destination: "/vehicles/tfr87-4x2/", permanent: true },
      { source: "/vehicles/fvr34s-bus", destination: "/vehicles/bus-fvr34-67-4x2/", permanent: true },
      { source: "/vehicles/fvr34s-bus/", destination: "/vehicles/bus-fvr34-67-4x2/", permanent: true },
      { source: "/vehicles/frr90-bus", destination: "/vehicles/bus-frr90n-51/", permanent: true },
      { source: "/vehicles/frr90-bus/", destination: "/vehicles/bus-frr90n-51/", permanent: true },
      { source: "/vehicles/nmr85-bus", destination: "/vehicles/bus-nmr-26/", permanent: true },
      { source: "/vehicles/nmr85-bus/", destination: "/vehicles/bus-nmr-26/", permanent: true },
      { source: "/vehicles/nqr81-bus", destination: "/vehicles/bus-nqr-29/", permanent: true },
      { source: "/vehicles/nqr81-bus/", destination: "/vehicles/bus-nqr-29/", permanent: true },
      { source: "/vehicles/ud-quester", destination: "/vehicles/movers/", permanent: true },
      { source: "/vehicles/ud-quester/", destination: "/vehicles/movers/", permanent: true },
      { source: "/vehicles/maxit", destination: "/vehicles/movers/", permanent: true },
      { source: "/vehicles/maxit/", destination: "/vehicles/movers/", permanent: true },
      { source: "/vehicles/kipchoge-limited-edition", destination: "/vehicles/double-cabin/", permanent: true },
      { source: "/vehicles/kipchoge-limited-edition/", destination: "/vehicles/double-cabin/", permanent: true },
      { source: "/vehicles/fts34k", destination: "/vehicles/f-series-fvz34n/", permanent: true },
      { source: "/vehicles/fts34k/", destination: "/vehicles/f-series-fvz34n/", permanent: true },
      { source: "/vehicles/fts34l", destination: "/vehicles/f-series-fvz34t/", permanent: true },
      { source: "/vehicles/fts34l/", destination: "/vehicles/f-series-fvz34t/", permanent: true },
      { source: "/vehicles/fvr34p", destination: "/vehicles/f-series-fvr90p/", permanent: true },
      { source: "/vehicles/fvr34p/", destination: "/vehicles/f-series-fvr90p/", permanent: true },
      { source: "/vehicles/light-trucks-n-series", destination: "/trucks/", permanent: true },
      { source: "/vehicles/light-trucks-n-series/", destination: "/trucks/", permanent: true },
      { source: "/vehicles/heavy-trucks-f-series", destination: "/trucks/", permanent: true },
      { source: "/vehicles/heavy-trucks-f-series/", destination: "/trucks/", permanent: true },
      { source: "/vehicles/single-cabin", destination: "/vehicles/tfr87-4x2/", permanent: true },
      { source: "/vehicles/single-cabin/", destination: "/vehicles/tfr87-4x2/", permanent: true },
      { source: "/inventory", destination: "/vehicles/", permanent: true },
      { source: "/inventory/", destination: "/vehicles/", permanent: true },
      { source: "/bikes", destination: "/vehicles/", permanent: true },
      { source: "/bikes/", destination: "/vehicles/", permanent: true },
    ];
  },

  // Security and Aggressive Caching headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/vehicles/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path(.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|otf))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      { source: "/isuzu_tmplt/:path*", destination: "https://www.isuzu.co.ke/isuzu_tmplt/:path*" },
      { source: "/isuzu_plg/:path*",   destination: "https://www.isuzu.co.ke/isuzu_plg/:path*" },
      { source: "/isuzu_inc/:path*",   destination: "https://www.isuzu.co.ke/isuzu_inc/:path*" },
      { source: "/isuzu_uplds/:path*", destination: "https://www.isuzu.co.ke/isuzu_uplds/:path*" },
      { source: "/mod/:path*",         destination: "https://www.isuzu.co.ke/mod/:path*" },
      { source: "/cms/:path*",         destination: "https://www.isuzu.co.ke/cms/:path*" },
      { source: "/isuzu-json/:path*",  destination: "https://www.isuzu.co.ke/isuzu-json/:path*" },
    ];
  },
};

export default nextConfig;
