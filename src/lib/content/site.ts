const DEFAULT_SITE_URL = "https://casaexpertpro.com";

function resolveSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") ?? "";
  if (!raw) return DEFAULT_SITE_URL;
  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = resolveSiteUrl();

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34602495760";

export const company = {
  publicName: "Casa Expert",
  legalName: "Casa Expert Pro",
  alternateNames: ["Casa Expert Pro", "CASA EXPERT", "CasaExpert"],
  geoDescriptor: "Costa Blanca",
  phone: "+34602495760",
  phoneDisplay: "+34 602 495 760",
  whatsapp: WHATSAPP_NUMBER,
  url: SITE_URL,
  serviceAreaBusiness: true,
  areaServed: [
    "Costa Blanca",
    "Alicante",
    "Torrevieja",
    "Orihuela Costa",
    "Benidorm",
    "Gran Alacant",
    "Elche",
    "Santa Pola",
  ],
  languages: ["English", "Español", "Русский"],
  sameAs: [] as string[],
} as const;

export const CONTENT_UPDATED_AT = "2026-09-16";
export const CALCULATION_MODEL_VERSION =
  process.env.CALCULATION_MODEL_VERSION ?? "2026.09.2";

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export type VisitIntent = "general" | "solar" | "solar-extras";

const VISIT_MESSAGES: Record<VisitIntent, Record<"en" | "es" | "ru", string>> = {
  general: {
    en: "Hello, I would like to request a site visit on the Costa Blanca.",
    es: "Hola, quiero pedir una visita técnica en Costa Blanca.",
    ru: "Здравствуйте, хочу заказать выезд на Коста-Бланке.",
  },
  solar: {
    en: "Hello, I would like a site visit for solar panels.",
    es: "Hola, quiero pedir una visita técnica para placas solares.",
    ru: "Здравствуйте, хочу заказать выезд по солнечным панелям.",
  },
  "solar-extras": {
    en: "Hello, I need an additional solar service (maintenance, cleaning, upgrade or other).",
    es: "Hola, necesito un servicio adicional para placas solares (mantenimiento, limpieza, ampliación u otro).",
    ru: "Здравствуйте, нужен дополнительный сервис по солнечным панелям (обслуживание, мойка, апгрейд или другое).",
  },
};

export function visitWhatsAppHref(
  locale: "en" | "es" | "ru",
  intent: VisitIntent = "general",
) {
  return whatsappHref(VISIT_MESSAGES[intent][locale]);
}
