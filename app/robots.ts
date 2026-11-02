import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// KI-Crawler sind bewusst erlaubt (GEO): TwinsCare soll in ChatGPT, Perplexity, Claude und Google AI Overviews zitiert werden.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/danke/", "/lp/"] },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot-Extended"], allow: "/" },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
