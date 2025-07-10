import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lblrcuwfaaqduaps.public.blob.vercel-storage.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
