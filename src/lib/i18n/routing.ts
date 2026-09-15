import { DEFAULT_LOCALE, isLocale, LOCALES, type Locale } from "./config";

export const SERVICE_IDS = [
  "home-renovation",
  "bathroom-renovation",
  "kitchen-renovation",
  "engineering",
  "solar-panels",
  "property-preparation",
] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export const AREA_IDS = ["alicante", "torrevieja", "orihuela-costa"] as const;
export type AreaId = (typeof AREA_IDS)[number];

export const PROJECT_IDS = [
  "torrevieja-villa-solar",
  "alicante-apartment-renovation",
  "orihuela-kitchen-bath",
] as const;
export type ProjectId = (typeof PROJECT_IDS)[number];

export const GUIDE_IDS = [
  "solar-cost-costa-blanca-2026",
  "how-many-solar-panels",
  "renovation-permits-costa-blanca",
] as const;
export type GuideId = (typeof GUIDE_IDS)[number];

export type PageKind =
  | "home"
  | "services-index"
  | "service"
  | "areas-index"
  | "area"
  | "projects-index"
  | "project"
  | "guides-index"
  | "guide"
  | "calculator"
  | "about"
  | "process"
  | "contact"
  | "privacy"
  | "cookies"
  | "legal-notice"
  | "thank-you";

export type ResolvedPage =
  | { kind: "home"; locale: Locale }
  | { kind: "services-index"; locale: Locale }
  | { kind: "service"; locale: Locale; id: ServiceId }
  | { kind: "areas-index"; locale: Locale }
  | { kind: "area"; locale: Locale; id: AreaId }
  | { kind: "projects-index"; locale: Locale }
  | { kind: "project"; locale: Locale; id: ProjectId }
  | { kind: "guides-index"; locale: Locale }
  | { kind: "guide"; locale: Locale; id: GuideId }
  | { kind: "calculator"; locale: Locale }
  | { kind: "about"; locale: Locale }
  | { kind: "process"; locale: Locale }
  | { kind: "contact"; locale: Locale }
  | { kind: "privacy"; locale: Locale }
  | { kind: "cookies"; locale: Locale }
  | { kind: "legal-notice"; locale: Locale }
  | { kind: "thank-you"; locale: Locale };

const SERVICE_PUBLIC: Record<ServiceId, Record<Locale, string>> = {
  "home-renovation": {
    en: "home-renovation",
    es: "reformas-integrales",
    ru: "remont-pod-klyuch",
  },
  "bathroom-renovation": {
    en: "bathroom-renovation",
    es: "reforma-bano",
    ru: "remont-vannoy",
  },
  "kitchen-renovation": {
    en: "kitchen-renovation",
    es: "reforma-cocina",
    ru: "remont-kuhni",
  },
  engineering: {
    en: "engineering",
    es: "instalaciones",
    ru: "inzhenernye-sistemy",
  },
  "solar-panels": {
    en: "solar-panels",
    es: "placas-solares",
    ru: "solnechnye-paneli",
  },
  "property-preparation": {
    en: "property-preparation",
    es: "preparacion-inmuebles",
    ru: "podgotovka-nedvizhimosti",
  },
};

const PROJECT_PUBLIC: Record<ProjectId, Record<Locale, string>> = {
  "torrevieja-villa-solar": {
    en: "torrevieja-villa-solar",
    es: "torrevieja-villa-placas-solares",
    ru: "torrevieja-villa-solnechnye-paneli",
  },
  "alicante-apartment-renovation": {
    en: "alicante-apartment-renovation",
    es: "alicante-reforma-apartamento",
    ru: "alicante-remont-kvartiry",
  },
  "orihuela-kitchen-bath": {
    en: "orihuela-kitchen-bath",
    es: "orihuela-cocina-bano",
    ru: "orihuela-kuhnya-vannaya",
  },
};

const GUIDE_PUBLIC: Record<GuideId, Record<Locale, string>> = {
  "solar-cost-costa-blanca-2026": {
    en: "solar-panel-cost-costa-blanca-2026",
    es: "precio-placas-solares-costa-blanca-2026",
    ru: "stoimost-solnechnyh-paneley-kosta-blanka-2026",
  },
  "how-many-solar-panels": {
    en: "how-many-solar-panels-for-a-villa",
    es: "cuantas-placas-solares-necesito",
    ru: "skolko-solnechnyh-paneley-nuzhno",
  },
  "renovation-permits-costa-blanca": {
    en: "renovation-permits-costa-blanca",
    es: "licencias-reforma-costa-blanca",
    ru: "razresheniya-na-remont-kosta-blanka",
  },
};

const ROOTS = {
  services: { en: "/services", es: "/es/servicios", ru: "/ru/uslugi" },
  areas: { en: "/areas", es: "/es/zonas", ru: "/ru/goroda" },
  projects: { en: "/projects", es: "/es/proyectos", ru: "/ru/proekty" },
  guides: { en: "/guides", es: "/es/guias", ru: "/ru/stati" },
} as const;

function join(base: string, slug: string): string {
  return `${base}/${slug}`;
}

export function stripSlash(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function withSlash(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function getPath(page: ResolvedPage): string {
  const { locale, kind } = page;
  switch (kind) {
    case "home":
      return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
    case "services-index":
      return ROOTS.services[locale];
    case "service":
      return join(ROOTS.services[locale], SERVICE_PUBLIC[page.id][locale]);
    case "areas-index":
      return ROOTS.areas[locale];
    case "area":
      return join(ROOTS.areas[locale], page.id);
    case "projects-index":
      return ROOTS.projects[locale];
    case "project":
      return join(ROOTS.projects[locale], PROJECT_PUBLIC[page.id][locale]);
    case "guides-index":
      return ROOTS.guides[locale];
    case "guide":
      return join(ROOTS.guides[locale], GUIDE_PUBLIC[page.id][locale]);
    case "calculator":
      return locale === "en"
        ? "/solar-calculator"
        : locale === "es"
          ? "/es/calculadora-placas-solares"
          : "/ru/kalkulyator-solnechnyh-paneley";
    case "about":
      return locale === "en"
        ? "/about"
        : locale === "es"
          ? "/es/empresa"
          : "/ru/o-kompanii";
    case "process":
      return locale === "en"
        ? "/process"
        : locale === "es"
          ? "/es/proceso"
          : "/ru/protsess";
    case "contact":
      return locale === "en"
        ? "/contact"
        : locale === "es"
          ? "/es/contacto"
          : "/ru/kontakty";
    case "privacy":
      return locale === "en"
        ? "/legal/privacy"
        : locale === "es"
          ? "/es/legal/privacidad"
          : "/ru/legal/konfidentsialnost";
    case "cookies":
      return locale === "en"
        ? "/legal/cookies"
        : locale === "es"
          ? "/es/legal/cookies"
          : "/ru/legal/cookies";
    case "legal-notice":
      return locale === "en"
        ? "/legal/legal-notice"
        : locale === "es"
          ? "/es/aviso-legal"
          : "/ru/pravovaya-informatsiya";
    case "thank-you":
      return locale === "en"
        ? "/thank-you"
        : locale === "es"
          ? "/es/gracias"
          : "/ru/spasibo";
  }
}

export function getInternalPath(page: ResolvedPage): string {
  const { locale, kind } = page;
  switch (kind) {
    case "home":
      return `/${locale}`;
    case "services-index":
      return `/${locale}/services`;
    case "service":
      return `/${locale}/services/${page.id}`;
    case "areas-index":
      return `/${locale}/areas`;
    case "area":
      return `/${locale}/areas/${page.id}`;
    case "projects-index":
      return `/${locale}/projects`;
    case "project":
      return `/${locale}/projects/${page.id}`;
    case "guides-index":
      return `/${locale}/guides`;
    case "guide":
      return `/${locale}/guides/${page.id}`;
    case "calculator":
      return `/${locale}/solar-calculator`;
    case "about":
      return `/${locale}/about`;
    case "process":
      return `/${locale}/process`;
    case "contact":
      return `/${locale}/contact`;
    case "privacy":
      return `/${locale}/legal/privacy`;
    case "cookies":
      return `/${locale}/legal/cookies`;
    case "legal-notice":
      return `/${locale}/legal/legal-notice`;
    case "thank-you":
      return `/${locale}/thank-you`;
  }
}

export function invert<T extends string>(
  table: Record<T, Record<Locale, string>>,
  locale: Locale,
  slug: string,
): T | null {
  for (const id of Object.keys(table) as T[]) {
    if (table[id][locale] === slug) return id;
  }
  return null;
}

export function resolveInternal(
  locale: Locale,
  slug: string[] | undefined,
): ResolvedPage | null {
  const parts = slug ?? [];
  if (parts.length === 0) return { kind: "home", locale };
  const [a, b, c] = parts;
  if (parts.length === 1) {
    if (a === "services") return { kind: "services-index", locale };
    if (a === "areas") return { kind: "areas-index", locale };
    if (a === "projects") return { kind: "projects-index", locale };
    if (a === "guides") return { kind: "guides-index", locale };
    if (a === "solar-calculator") return { kind: "calculator", locale };
    if (a === "about") return { kind: "about", locale };
    if (a === "process") return { kind: "process", locale };
    if (a === "contact") return { kind: "contact", locale };
    if (a === "thank-you") return { kind: "thank-you", locale };
    return null;
  }
  if (a === "services" && parts.length === 2 && SERVICE_IDS.includes(b as ServiceId)) {
    return { kind: "service", locale, id: b as ServiceId };
  }
  if (a === "areas" && parts.length === 2 && AREA_IDS.includes(b as AreaId)) {
    return { kind: "area", locale, id: b as AreaId };
  }
  if (a === "projects" && parts.length === 2 && PROJECT_IDS.includes(b as ProjectId)) {
    return { kind: "project", locale, id: b as ProjectId };
  }
  if (a === "guides" && parts.length === 2 && GUIDE_IDS.includes(b as GuideId)) {
    return { kind: "guide", locale, id: b as GuideId };
  }
  if (a === "legal" && parts.length === 2) {
    if (b === "privacy") return { kind: "privacy", locale };
    if (b === "cookies") return { kind: "cookies", locale };
    if (b === "legal-notice") return { kind: "legal-notice", locale };
  }
  if (c) return null;
  return null;
}

function lookupByPublicSlug<T extends string>(
  table: Record<T, Record<Locale, string>>,
  locale: Locale,
  slug: string,
): T | null {
  return invert(table, locale, slug);
}

export function resolveAnyPath(pathname: string): ResolvedPage | null {
  const publicMatch = resolvePublicPath(pathname);
  if (publicMatch) return publicMatch;
  const parts = stripSlash(pathname).split("/").filter(Boolean);
  if (isLocale(parts[0])) {
    return resolveInternal(parts[0], parts.slice(1));
  }
  return null;
}

export function resolvePublicPath(pathname: string): ResolvedPage | null {
  const path = stripSlash(pathname);
  if (path === "/") return { kind: "home", locale: "en" };
  const segments = path.split("/").filter(Boolean);
  const locale: Locale = segments[0] === "es" || segments[0] === "ru" ? segments[0] : "en";
  const rest = locale === "en" ? segments : segments.slice(1);
  if (rest.length === 0) return { kind: "home", locale };

  const [a, b] = rest;
  if (rest.length === 1) {
    if (a === "services" || a === "servicios" || a === "uslugi") {
      return { kind: "services-index", locale };
    }
    if (a === "areas" || a === "zonas" || a === "goroda") {
      return { kind: "areas-index", locale };
    }
    if (a === "projects" || a === "proyectos" || a === "proekty") {
      return { kind: "projects-index", locale };
    }
    if (a === "guides" || a === "guias" || a === "stati") {
      return { kind: "guides-index", locale };
    }
    if (
      a === "solar-calculator" ||
      a === "calculadora-placas-solares" ||
      a === "kalkulyator-solnechnyh-paneley"
    ) {
      return { kind: "calculator", locale };
    }
    if (a === "about" || a === "empresa" || a === "o-kompanii") {
      return { kind: "about", locale };
    }
    if (a === "process" || a === "proceso" || a === "protsess") {
      return { kind: "process", locale };
    }
    if (a === "contact" || a === "contacto" || a === "kontakty") {
      return { kind: "contact", locale };
    }
    if (a === "aviso-legal" || a === "pravovaya-informatsiya") {
      return { kind: "legal-notice", locale };
    }
    if (a === "thank-you" || a === "gracias" || a === "spasibo") {
      return { kind: "thank-you", locale };
    }
    return null;
  }

  if (rest.length === 2) {
    if (a === "services" || a === "servicios" || a === "uslugi") {
      const id = lookupByPublicSlug(SERVICE_PUBLIC, locale, b);
      if (id) return { kind: "service", locale, id };
    }
    if (a === "areas" || a === "zonas" || a === "goroda") {
      if (AREA_IDS.includes(b as AreaId)) {
        return { kind: "area", locale, id: b as AreaId };
      }
    }
    if (a === "projects" || a === "proyectos" || a === "proekty") {
      const id = lookupByPublicSlug(PROJECT_PUBLIC, locale, b);
      if (id) return { kind: "project", locale, id };
    }
    if (a === "guides" || a === "guias" || a === "stati") {
      const id = lookupByPublicSlug(GUIDE_PUBLIC, locale, b);
      if (id) return { kind: "guide", locale, id };
    }
    if (a === "legal") {
      if (b === "privacy" || b === "privacidad" || b === "konfidentsialnost") {
        return { kind: "privacy", locale };
      }
      if (b === "cookies") return { kind: "cookies", locale };
      if (b === "legal-notice") return { kind: "legal-notice", locale };
    }
  }
  return null;
}

export function getAlternatePages(page: ResolvedPage): Record<Locale, ResolvedPage> {
  const next = {} as Record<Locale, ResolvedPage>;
  for (const locale of LOCALES) {
    if ("id" in page) {
      next[locale] = { ...page, locale } as ResolvedPage;
    } else {
      next[locale] = { kind: page.kind, locale } as ResolvedPage;
    }
  }
  return next;
}

export function allResolvedPages(): ResolvedPage[] {
  const pages: ResolvedPage[] = [];
  for (const locale of LOCALES) {
    pages.push({ kind: "home", locale });
    pages.push({ kind: "services-index", locale });
    for (const id of SERVICE_IDS) pages.push({ kind: "service", locale, id });
    pages.push({ kind: "areas-index", locale });
    for (const id of AREA_IDS) pages.push({ kind: "area", locale, id });
    pages.push({ kind: "projects-index", locale });
    for (const id of PROJECT_IDS) pages.push({ kind: "project", locale, id });
    pages.push({ kind: "guides-index", locale });
    for (const id of GUIDE_IDS) pages.push({ kind: "guide", locale, id });
    pages.push({ kind: "calculator", locale });
    pages.push({ kind: "about", locale });
    pages.push({ kind: "process", locale });
    pages.push({ kind: "contact", locale });
    pages.push({ kind: "privacy", locale });
    pages.push({ kind: "cookies", locale });
    pages.push({ kind: "legal-notice", locale });
    pages.push({ kind: "thank-you", locale });
  }
  return pages;
}

export function isIndexable(page: ResolvedPage): boolean {
  return page.kind !== "thank-you";
}

export function publicToInternalLookup() {
  const map = new Map<string, { locale: Locale; internal: string }>();
  for (const page of allResolvedPages()) {
    map.set(stripSlash(getPath(page)), {
      locale: page.locale,
      internal: getInternalPath(page),
    });
  }
  return map;
}

export function internalToPublicLookup() {
  const map = new Map<string, string>();
  for (const page of allResolvedPages()) {
    map.set(stripSlash(getInternalPath(page)), withSlash(getPath(page)));
  }
  return map;
}
