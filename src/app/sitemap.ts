import { company, SITE_URL } from "@/lib/content/site";
import { allResolvedPages, getPath, isIndexable, withSlash } from "@/lib/i18n/routing";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return [];
  }
  return allResolvedPages()
    .filter(isIndexable)
    .map((page) => ({
      url: `${SITE_URL}${withSlash(getPath(page))}`,
      lastModified: company ? new Date("2026-09-15") : new Date(),
      changeFrequency: page.kind === "home" ? "weekly" : "monthly",
      priority: page.kind === "home" || page.kind === "calculator" || page.kind === "service" ? 0.8 : 0.6,
    }));
}
