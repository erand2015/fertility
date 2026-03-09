import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Kjo krijon folderin 'out'
  images: {
    unoptimized: true, // Duhet për fotot e Unsplash
  },
  reactCompiler: true,
};

export default nextConfig;
