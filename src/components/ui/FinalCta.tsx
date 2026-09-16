import { CtaRow } from "@/components/ui/CtaRow";
import type { Locale } from "@/lib/i18n/config";

export function FinalCta({
  locale,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  locale: Locale;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section section-ink section-final-cta">
      <div className="container final-cta-block">
        <h2>{title}</h2>
        <p className="lead">{body}</p>
        <CtaRow
          locale={locale}
          tone="ink"
          primaryHref={primaryHref}
          primaryLabel={primaryLabel}
          secondaryHref={secondaryHref}
          secondaryLabel={secondaryLabel}
        />
      </div>
    </section>
  );
}
