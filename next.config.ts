import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  // CS and RAS became internal clubs; keep old links and QR codes working.
  async redirects() {
    return [
      { source: "/chapters/cs", destination: "/clubs/computer", permanent: true },
      { source: "/chapters/ras", destination: "/clubs/robotics", permanent: true },
    ];
  },
}

export default nextConfig;

initOpenNextCloudflareForDev();
