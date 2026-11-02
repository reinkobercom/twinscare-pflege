import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    // Kurz-URLs aus Werbemitteln und Verzeichnissen
    return [{ source: "/anfrage", destination: "/pflege-anfragen/", permanent: true }];
  },
};

export default nextConfig;
