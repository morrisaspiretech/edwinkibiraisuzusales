import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'qohvznatevzqqvfzwkss.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'oqfnxojgqyhpbwcpluhk.supabase.co',
      }
    ],
  },
};

export default nextConfig;
