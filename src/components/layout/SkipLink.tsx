import { nav } from "@/content/ui";
import type { Locale } from "@/lib/i18n/config";

export function SkipLink({ locale }: { locale: Locale }) {
  return (
    <a className="skip-link" href="#content">
      {nav[locale].skip}
    </a>
  );
}
