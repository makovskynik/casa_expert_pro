import { Faqs } from "@/components/content/Faqs";
import { ServiceCard } from "@/components/content/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaRow } from "@/components/ui/CtaRow";
import { PageShell } from "@/components/ui/PageShell";
import { ui } from "@/content/ui";
import { getArea } from "@/lib/content/registry";
import { getPath, type ResolvedPage } from "@/lib/i18n/routing";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  jsonLdGraph,
} from "@/lib/schema/builders";

export function AreaPage({ page }: { page: Extract<ResolvedPage, { kind: "area" }> }) {
  const { locale } = page;
  const t = ui[locale];
  const copy = getArea(locale, page.id);

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          buildLocalBusinessSchema({ areaName: copy.name, path: getPath(page) }),
          buildServiceSchema({
            name: `${copy.name} — Casa Expert`,
            description: copy.description,
            path: getPath(page),
            locale,
          }),
          buildFaqSchema(copy.faqs),
        ])}
      />
      <PageShell>
        <Breadcrumbs
          items={[
            { href: getPath({ kind: "home", locale }), label: "Casa Expert" },
            { href: getPath({ kind: "areas-index", locale }), label: t.zones },
            { href: getPath(page), label: copy.name },
          ]}
        />
        <h1>{copy.h1}</h1>
        <p className="lead">{copy.summary}</p>
        <p className="measure">{copy.answer}</p>
        <p>{copy.travelNote}</p>
        <h2>{t.seeServices}</h2>
        <div className="grid-3">
          {copy.relatedServiceIds.map((id) => (
            <ServiceCard key={id} locale={locale} id={id} />
          ))}
        </div>
        <ul className="prose">
          {copy.localNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <CtaRow
          locale={locale}
          primaryHref={getPath({ kind: "calculator", locale })}
          primaryLabel={t.solarCta}
        />
      </PageShell>
      <Faqs items={copy.faqs} title={t.faq} />
    </>
  );
}
