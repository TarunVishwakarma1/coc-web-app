import type { NextConfig } from "next";

const devOrigin = process.env.LOCAL_DEV_ORIGIN || "0.0.0.0"

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins:["local-origin.dev", "*.local-origin.dev", devOrigin]
};

export default nextConfig;
