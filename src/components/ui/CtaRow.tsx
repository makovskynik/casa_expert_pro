import { ui } from "@/content/ui";
import { visitWhatsAppHref, whatsappHref } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/config";

export function CtaRow({
  locale,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tone = "default",
}: {
  locale: Locale;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tone?: "default" | "ink";
}) {
  const t = ui[locale];
  const primaryClass = tone === "ink" ? "btn btn-on-ink" : "btn btn-primary";
  const secondaryClass = tone === "ink" ? "btn btn-on-ink-secondary" : "btn btn-secondary";
  return (
    <div className="cta-row">
      <a className={primaryClass} href={primaryHref ?? visitWhatsAppHref(locale)}>
        {primaryLabel ?? t.visitCta}
      </a>
      <a className={secondaryClass} href={secondaryHref ?? whatsappHref()}>
        {secondaryLabel ?? t.whatsappUs}
      </a>
    </div>
  );
}
