import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
  productionBrowserSourceMaps: false,

  // ── Performance: compress responses
  compress: true,

  // ── Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],   // serve modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],
    minimumCacheTTL: 31536000,               // cache images for 1 year
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
  },

  // ── HTTP Headers: cache static assets aggressively
  async headers() {
    return [
      {
        source: '/vehicles/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      // Proxy ALL Isuzu asset paths to the live site so CSS/JS/fonts load correctly
      {
        source: '/isuzu_tmplt/:path*',
        destination: 'https://www.isuzu.co.ke/isuzu_tmplt/:path*',
      },
      {
        source: '/isuzu_plg/:path*',
        destination: 'https://www.isuzu.co.ke/isuzu_plg/:path*',
      },
      {
        source: '/isuzu_inc/:path*',
        destination: 'https://www.isuzu.co.ke/isuzu_inc/:path*',
      },
      {
        source: '/isuzu_uplds/:path*',
        destination: 'https://www.isuzu.co.ke/isuzu_uplds/:path*',
      },
      {
        source: '/mod/:path*',
        destination: 'https://www.isuzu.co.ke/mod/:path*',
      },
      {
        source: '/cms/:path*',
        destination: 'https://www.isuzu.co.ke/cms/:path*',
      },
      {
        source: '/isuzu-json/:path*',
        destination: 'https://www.isuzu.co.ke/isuzu-json/:path*',
      },
    ]
  },
};

export default nextConfig;
