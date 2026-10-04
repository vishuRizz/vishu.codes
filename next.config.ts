import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://vishu.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
