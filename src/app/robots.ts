import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/site";

const DISALLOW_PATHS = ["/thank-you", "/es/gracias", "/ru/spasibo", "/api/"];

/** AI search / assistant crawlers to allow explicitly (2026 GEO). */
const AI_SEARCH_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "Amazonbot",
  "FacebookBot",
  "CCBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  const production = process.env.VERCEL_ENV === "production";
  if (!production) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      ...AI_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW_PATHS,
      })),
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
