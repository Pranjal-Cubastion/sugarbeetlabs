import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // quality values used across the app (Next 16 requires these to be declared)
    qualities: [75, 90],
  },
};

export default nextConfig;
