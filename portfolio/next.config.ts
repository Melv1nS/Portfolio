import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['brand.utexas.edu', 'www.uni-corvinus.hu'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
