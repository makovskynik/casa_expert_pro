import { ContentSections } from "@/components/content/ContentSections";
import { Faqs } from "@/components/content/Faqs";
import { PriceTable } from "@/components/content/PriceTable";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/ui/PageShell";
import { ui } from "@/content/ui";
import { getGuide } from "@/lib/content/registry";
import type { ResolvedPage } from "@/lib/i18n/routing";
import { buildFaqSchema, jsonLdGraph } from "@/lib/schema/builders";

export function GuidePage({ page }: { page: Extract<ResolvedPage, { kind: "guide" }> }) {
  const { locale } = page;
  const t = ui[locale];
  const copy = getGuide(locale, page.id);

  return (
    <>
      <JsonLd data={jsonLdGraph([buildFaqSchema(copy.faqs)])} />
      <PageShell>
        <h1>{copy.h1}</h1>
        <p className="measure">{copy.answer}</p>
        <ContentSections sections={copy.sections} />
        {copy.priceRows ? (
          <PriceTable
            rows={copy.priceRows}
            title={t.priceFactors}
            labels={{ item: t.tableItem, range: t.tableRange, note: t.tableNote }}
          />
        ) : null}
        <div>
          <h2>{t.sources}</h2>
          <ul className="prose">
            {copy.sources.map((src) => (
              <li key={src.href}>
                <a href={src.href} rel="noopener noreferrer">
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </PageShell>
      <Faqs items={copy.faqs} title={t.faq} />
    </>
  );
}
