import { Calculator } from "@/components/calculator/Calculator";
import { Faqs } from "@/components/content/Faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/ui/PageShell";
import { ui } from "@/content/ui";
import { getSimplePage } from "@/lib/content/registry";
import type { ResolvedPage } from "@/lib/i18n/routing";
import { buildFaqSchema, jsonLdGraph } from "@/lib/schema/builders";

export function CalculatorPage({
  page,
}: {
  page: Extract<ResolvedPage, { kind: "calculator" }>;
}) {
  const { locale } = page;
  const t = ui[locale];
  const copy = getSimplePage(page);

  return (
    <>
      <JsonLd data={jsonLdGraph([buildFaqSchema(copy.faqs ?? [])])} />
      <PageShell wide={false}>
        <h1>{copy.h1}</h1>
        <p className="lead">{copy.summary}</p>
        <Calculator locale={locale} />
      </PageShell>
      <Faqs items={copy.faqs ?? []} title={t.faq} />
    </>
  );
}
