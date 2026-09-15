import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/config";
import {
  getPath,
  isIndexable,
  type ResolvedPage,
  withSlash,
} from "@/lib/i18n/routing";
import { hreflangMap } from "@/lib/schema/builders";

const isProd = process.env.VERCEL_ENV === "production";

export function buildMetadata(input: {
  page: ResolvedPage;
  title: string;
  description: string;
  locale: Locale;
}): Metadata {
  const path = withSlash(getPath(input.page));
  const canonical = `${SITE_URL}${path}`;
  const languages = hreflangMap(input.page);
  const index = isProd && isIndexable(input.page);

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: "Casa Expert",
      locale: input.locale === "en" ? "en_GB" : input.locale === "es" ? "es_ES" : "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}
