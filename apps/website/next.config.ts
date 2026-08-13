import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: { ignoreBuildErrors: true },
  productionBrowserSourceMaps: false,
  images: {
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
  async rewrites() {
    return [
      // Serve homepage from downloaded HTML
      {
        source: '/',
        destination: '/index.html',
      },
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
