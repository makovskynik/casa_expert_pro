import { SITE_URL } from "@/lib/content/site";
import { allResolvedPages, getPath, isIndexable, withSlash } from "@/lib/i18n/routing";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return [];
  }
  return allResolvedPages()
    .filter(isIndexable)
    .map((page) => {
      const isHome = page.kind === "home";
      const isHigh =
        page.kind === "calculator" ||
        page.kind === "service" ||
        page.kind === "services-index";
      return {
        url: `${SITE_URL}${withSlash(getPath(page))}`,
        lastModified: new Date("2026-09-15"),
        changeFrequency: isHome ? ("weekly" as const) : ("monthly" as const),
        priority: isHome ? 1 : isHigh ? 0.85 : 0.6,
      };
    });
}
