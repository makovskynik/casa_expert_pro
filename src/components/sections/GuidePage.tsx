import { ContentSections } from "@/components/content/ContentSections";
import { Faqs } from "@/components/content/Faqs";
import { PriceTable } from "@/components/content/PriceTable";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCta } from "@/components/ui/FinalCta";
import { nav, ui } from "@/content/ui";
import { getGuide, getService } from "@/lib/content/registry";
import { getPath, type ResolvedPage } from "@/lib/i18n/routing";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  jsonLdGraph,
} from "@/lib/schema/builders";

export function GuidePage({ page }: { page: Extract<ResolvedPage, { kind: "guide" }> }) {
  const { locale } = page;
  const t = ui[locale];
  const n = nav[locale];
  const copy = getGuide(locale, page.id);

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          buildArticleSchema({
            headline: copy.seoTitle,
            description: copy.description,
            path: getPath(page),
            locale,
            dateModified: copy.updatedAt,
          }),
          buildBreadcrumbSchema([
            { name: n.home, path: getPath({ kind: "home", locale }) },
            { name: n.guides, path: getPath({ kind: "guides-index", locale }) },
            { name: copy.name, path: getPath(page) },
          ]),
          buildFaqSchema(copy.faqs),
        ])}
      />
      <article className="content-page">
        <div className="container content-page-inner">
          <Breadcrumbs
            items={[
              { href: getPath({ kind: "home", locale }), label: n.home },
              { href: getPath({ kind: "guides-index", locale }), label: n.guides },
              { href: getPath(page), label: copy.name },
            ]}
          />
          <header className="content-hero">
            <h1>{copy.h1}</h1>
            <p className="lead">{copy.summary}</p>
            <p className="measure">{copy.answer}</p>
          </header>
          <ContentSections sections={copy.sections} />
          {copy.priceRows ? (
            <PriceTable
              rows={copy.priceRows}
              title={t.priceFactors}
              labels={{ item: t.tableItem, range: t.tableRange, note: t.tableNote }}
            />
          ) : null}
          <section className="content-sources">
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
          </section>
          <RelatedLinks
            title={t.related}
            items={copy.relatedServiceIds.map((id) => {
              const service = getService(locale, id);
              return {
                href: getPath({ kind: "service", locale, id }),
                title: service.name,
                summary: service.summary,
              };
            })}
          />
        </div>
      </article>
      <Faqs items={copy.faqs} title={t.faq} lead={t.faqLead} />
      <FinalCta locale={locale} title={t.finalCtaTitle} body={t.finalCtaBody} />
    </>
  );
}
