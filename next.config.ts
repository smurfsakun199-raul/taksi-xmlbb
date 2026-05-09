import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    useLightningcss: true,
    optimisticClientCache: true,
    optimisticRouting: true,
  },
  cacheComponents: true,
  reactCompiler: true,
};

export default nextConfig;