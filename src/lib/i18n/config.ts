export const LOCALES = ["en", "es", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  ru: "RU",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ru: "Русский",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  es: "es",
  ru: "ru",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return LOCALES.includes(value as Locale);
}
