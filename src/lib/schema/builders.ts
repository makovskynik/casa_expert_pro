import { company, SITE_URL } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/config";
import { getAlternatePages, getPath, type ResolvedPage, withSlash } from "@/lib/i18n/routing";
import type { FaqItem } from "@/lib/content/types";

function abs(path: string): string {
  return `${SITE_URL}${withSlash(path)}`;
}

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: company.legalName,
    alternateName: [...company.alternateNames, company.publicName],
    url: SITE_URL,
    telephone: company.phone,
    logo: `${SITE_URL}/brand/logo.svg`,
  };
}

export function buildLocalBusinessSchema(opts?: { areaName?: string; path?: string }) {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": opts?.areaName ? `${SITE_URL}/#business-${opts.areaName}` : `${SITE_URL}/#business`,
    name: company.publicName,
    legalName: company.legalName,
    url: opts?.path ? abs(opts.path) : SITE_URL,
    telephone: company.phone,
    image: `${SITE_URL}/brand/logo.svg`,
    areaServed: opts?.areaName
      ? { "@type": "AdministrativeArea", name: opts.areaName }
      : company.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    availableLanguage: company.languages,
    parentOrganization: { "@id": `${SITE_URL}/#org` },
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.publicName,
    inLanguage: ["en", "es", "ru"],
    publisher: { "@id": `${SITE_URL}/#org` },
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function buildServiceSchema(input: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
}) {
  return {
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: abs(input.path),
    inLanguage: input.locale,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: company.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
  };
}

export function buildArticleSchema(input: {
  headline: string;
  description: string;
  path: string;
  dateModified: string;
  locale: Locale;
}) {
  return {
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    dateModified: input.dateModified,
    datePublished: input.dateModified,
    inLanguage: input.locale,
    mainEntityOfPage: abs(input.path),
    author: { "@id": `${SITE_URL}/#org` },
    publisher: { "@id": `${SITE_URL}/#org` },
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function jsonLdGraph(nodes: Array<Record<string, unknown> | null | undefined>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}

export function hreflangMap(page: ResolvedPage): Record<string, string> {
  const alts = getAlternatePages(page);
  return {
    en: abs(getPath(alts.en)),
    es: abs(getPath(alts.es)),
    ru: abs(getPath(alts.ru)),
    "x-default": abs(getPath(alts.en)),
  };
}
