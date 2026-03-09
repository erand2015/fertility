import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Mund ta mbash reactCompiler nëse versioni i Next.js e mbështet, 
  // por për siguri në deploy e lëmë kështu:
  reactCompiler: true,
};

export default nextConfig;
