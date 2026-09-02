import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
  productionBrowserSourceMaps: false,

  // Performance: compress responses
  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons", "lucide-react"],
  },

  // Image Optimization with WebP/AVIF and caching
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // Aggressive caching headers
  async headers() {
    return [
      {
        source: "/vehicles/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
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
