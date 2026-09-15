export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://casaexpertpro.com";

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
    "Gran Alacant",
    "Elche",
    "Santa Pola",
  ],
  languages: ["English", "Español", "Русский"],
  sameAs: [] as string[],
} as const;

export const CONTENT_UPDATED_AT = "2026-09-15";
export const CALCULATION_MODEL_VERSION =
  process.env.CALCULATION_MODEL_VERSION ?? "2026.09.2";

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
