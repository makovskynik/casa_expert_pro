import type { Locale } from "@/lib/i18n/config";
import type {
  AreaId,
  GuideId,
  PageKind,
  ProjectId,
  ServiceId,
} from "@/lib/i18n/routing";

export type ImageRef = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type FaqItem = { q: string; a: string };

export type PriceRow = { item: string; value: string; note?: string };

export type ContentBlock = {
  heading?: string;
  body: string[];
};

export type LocalizedCopy = {
  locale: Locale;
  seoTitle: string;
  description: string;
  h1: string;
  summary: string;
  answer: string;
  updatedAt: string;
};

export type NavCopy = {
  skip: string;
  services: string;
  projects: string;
  process: string;
  areas: string;
  guides: string;
  calculator: string;
  about: string;
  contact: string;
  call: string;
  whatsapp: string;
  primaryCta: string;
  menu: string;
  close: string;
};

export type ServiceCopy = LocalizedCopy & {
  id: ServiceId;
  name: string;
  includes: string[];
  excludes: string[];
  process: string[];
  priceRows: PriceRow[];
  faqs: FaqItem[];
  relatedAreaIds: AreaId[];
  relatedProjectIds: ProjectId[];
  relatedGuideIds: GuideId[];
};

export type AreaCopy = LocalizedCopy & {
  id: AreaId;
  name: string;
  travelNote: string;
  localNotes: string[];
  faqs: FaqItem[];
  relatedServiceIds: ServiceId[];
  relatedProjectIds: ProjectId[];
};

export type ProjectCopy = LocalizedCopy & {
  id: ProjectId;
  name: string;
  city: string;
  year: string;
  serviceIds: ServiceId[];
  areaId: AreaId;
  problem: string;
  constraints: string[];
  scope: string[];
  materials: string[];
  duration: string;
  costRange: string;
  outcome: string;
  photoNote: string;
  coverClass: "solar" | "reno";
};

export type GuideCopy = LocalizedCopy & {
  id: GuideId;
  name: string;
  sections: ContentBlock[];
  priceRows?: PriceRow[];
  faqs: FaqItem[];
  sources: { label: string; href: string }[];
  relatedServiceIds: ServiceId[];
};

export type SimplePageCopy = LocalizedCopy & {
  kind: Extract<PageKind, "about" | "process" | "contact" | "privacy" | "cookies" | "legal-notice" | "thank-you" | "calculator" | "home" | "services-index" | "areas-index" | "projects-index" | "guides-index">;
  sections?: ContentBlock[];
  faqs?: FaqItem[];
  steps?: { title: string; body: string; result?: string; timing?: string }[];
};
