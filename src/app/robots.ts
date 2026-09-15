import { SITE_URL } from "@/lib/content/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const production = process.env.VERCEL_ENV === "production";
  if (!production) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/thank-you", "/es/gracias", "/ru/spasibo", "/api/"] },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
