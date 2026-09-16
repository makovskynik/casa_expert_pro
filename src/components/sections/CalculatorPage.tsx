import { Calculator } from "@/components/calculator/Calculator";
import { Faqs } from "@/components/content/Faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ui } from "@/content/ui";
import { getSimplePage } from "@/lib/content/registry";
import type { ResolvedPage } from "@/lib/i18n/routing";
import { buildFaqSchema, jsonLdGraph } from "@/lib/schema/builders";

export function CalculatorPage({
  page,
  searchParams = {},
}: {
  page: Extract<ResolvedPage, { kind: "calculator" }>;
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const { locale } = page;
  const t = ui[locale];
  const copy = getSimplePage(page);

  return (
    <>
      <JsonLd data={jsonLdGraph([buildFaqSchema(copy.faqs ?? [])])} />
      <article className="section page-shell page-shell-calc">
        <div className="container calc-page">
          <header className="calc-page-intro">
            <h1>{copy.h1}</h1>
            <p className="lead">{copy.summary}</p>
          </header>
          <Calculator locale={locale} searchParams={searchParams} />
        </div>
      </article>
      <Faqs items={copy.faqs ?? []} title={t.faq} />
    </>
  );
}
