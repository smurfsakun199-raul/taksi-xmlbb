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

module.exports = {
  allowedDevOrigins: ['192.168.1.7']
}

export default nextConfig;