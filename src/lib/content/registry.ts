import { areas } from "@/content/areas";
import { guides } from "@/content/guides";
import { pages } from "@/content/pages";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import type { Locale } from "@/lib/i18n/config";
import type { ResolvedPage } from "@/lib/i18n/routing";
import type {
  AreaCopy,
  GuideCopy,
  ProjectCopy,
  ServiceCopy,
  SimplePageCopy,
} from "@/lib/content/types";

export function getService(locale: Locale, id: keyof typeof services): ServiceCopy {
  return services[id][locale];
}

export function getArea(locale: Locale, id: keyof typeof areas): AreaCopy {
  return areas[id][locale];
}

export function getProject(locale: Locale, id: keyof typeof projects): ProjectCopy {
  return projects[id][locale];
}

export function getGuide(locale: Locale, id: keyof typeof guides): GuideCopy {
  return guides[id][locale];
}

export function getSimplePage(page: ResolvedPage): SimplePageCopy {
  switch (page.kind) {
    case "home":
      return pages.home[page.locale];
    case "about":
      return pages.about[page.locale];
    case "process":
      return pages.process[page.locale];
    case "contact":
      return pages.contact[page.locale];
    case "privacy":
      return pages.privacy[page.locale];
    case "cookies":
      return pages.cookies[page.locale];
    case "legal-notice":
      return pages["legal-notice"][page.locale];
    case "thank-you":
      return pages["thank-you"][page.locale];
    case "calculator":
      return pages.calculator[page.locale];
    case "services-index":
      return pages["services-index"][page.locale];
    case "areas-index":
      return pages["areas-index"][page.locale];
    case "projects-index":
      return pages["projects-index"][page.locale];
    case "guides-index":
      return pages["guides-index"][page.locale];
    default:
      throw new Error(`No simple page for ${page.kind}`);
  }
}

export function seoFields(page: ResolvedPage): {
  seoTitle: string;
  description: string;
  h1: string;
} {
  switch (page.kind) {
    case "service":
      return getService(page.locale, page.id);
    case "area":
      return getArea(page.locale, page.id);
    case "project":
      return getProject(page.locale, page.id);
    case "guide":
      return getGuide(page.locale, page.id);
    default:
      return getSimplePage(page);
  }
}
