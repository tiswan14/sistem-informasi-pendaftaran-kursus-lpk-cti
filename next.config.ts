import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lblrcuwfaaqduaps.public.blob.vercel-storage.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  } as any, // ✅ bypass type error hanya di properti ini
};

export default nextConfig;
