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
};

export default nextConfig;
