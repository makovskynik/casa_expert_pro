import { Faqs } from "@/components/content/Faqs";
import { PriceTable } from "@/components/content/PriceTable";
import { ProcessStrip } from "@/components/content/ProcessStrip";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaRow } from "@/components/ui/CtaRow";
import { FinalCta } from "@/components/ui/FinalCta";
import { serviceMedia } from "@/content/media";
import { nav, ui } from "@/content/ui";
import { getArea, getGuide, getService } from "@/lib/content/registry";
import { visitWhatsAppHref } from "@/lib/content/site";
import { getPath, type ResolvedPage } from "@/lib/i18n/routing";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildServiceSchema,
  jsonLdGraph,
} from "@/lib/schema/builders";
import Image from "next/image";
import Link from "next/link";

export function ServicePage({
  page,
}: {
  page: Extract<ResolvedPage, { kind: "service" }>;
}) {
  const { locale } = page;
  const t = ui[locale];
  const n = nav[locale];
  const copy = getService(locale, page.id);
  const img = serviceMedia[page.id];
  const isSolar = page.id === "solar-panels";
  const highlight = copy.highlight ?? copy.priceRows[0];
  const factorRows = copy.highlight
    ? copy.priceRows
    : copy.priceRows.length > 1
      ? copy.priceRows.slice(1)
      : [];

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          buildOrganizationSchema(),
          buildLocalBusinessSchema(),
          buildServiceSchema({
            name: copy.name,
            description: copy.description,
            path: getPath(page),
            locale,
          }),
          buildBreadcrumbSchema([
            { name: n.home, path: getPath({ kind: "home", locale }) },
            { name: n.services, path: getPath({ kind: "services-index", locale }) },
            { name: copy.name, path: getPath(page) },
          ]),
          buildFaqSchema(copy.faqs),
        ])}
      />
      <article className="service-page">
        <div className="container service-page-inner">
          <Breadcrumbs
            items={[
              { href: getPath({ kind: "home", locale }), label: "Casa Expert" },
              { href: getPath({ kind: "services-index", locale }), label: n.services },
              { href: getPath(page), label: copy.name },
            ]}
          />
          <header className="service-hero">
            <div className="service-hero-copy">
              <h1>{copy.h1}</h1>
              <p className="lead">{copy.summary}</p>
              <ul className="service-proof">
                <li>{t.proofLangs}</li>
                <li>{t.proofQuote}</li>
                <li>{t.oneContact}</li>
              </ul>
              <CtaRow
                locale={locale}
                primaryHref={isSolar ? getPath({ kind: "calculator", locale }) : undefined}
                primaryLabel={isSolar ? t.solarCta : t.visitCta}
                secondaryHref={isSolar ? visitWhatsAppHref(locale, "solar") : undefined}
                secondaryLabel={isSolar ? t.visitCta : undefined}
              />
            </div>
            <figure className="service-hero-photo">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 960px) 100vw, 48vw" priority />
              <figcaption>{t.mediaNote}</figcaption>
            </figure>
          </header>

          <section className="service-answer" aria-labelledby="service-answer-title">
            <div className="service-answer-copy">
              <h2 id="service-answer-title">{t.typicalRange}</h2>
              <p className="measure">{copy.answer}</p>
              <p className="notice">
                {t.ivaIncluded} {t.surveyNeeded}
              </p>
            </div>
            {highlight ? (
              <aside className="service-range" aria-label={t.typicalRange}>
                <p className="eyebrow">{highlight.item}</p>
                <p className="service-range-value">{highlight.value}</p>
                {highlight.note ? <p className="muted">{highlight.note}</p> : null}
                {isSolar ? (
                  <Link className="btn btn-primary" href={getPath({ kind: "calculator", locale })}>
                    {t.solarCta}
                  </Link>
                ) : null}
              </aside>
            ) : null}
          </section>

          <section className="service-scope" aria-labelledby="service-scope-title">
            <h2 id="service-scope-title" className="visually-hidden">
              {t.includes}
            </h2>
            <div className="service-scope-grid">
              <div>
                <h3>{t.includes}</h3>
                <ul>
                  {copy.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>{t.excludes}</h3>
                <ul>
                  {copy.excludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <PriceTable
            rows={factorRows}
            title={t.priceFactors}
            labels={{ item: t.tableItem, range: t.tableRange, note: t.tableNote }}
          />

          {copy.extras?.length ? (
            <section className="service-extras" id="extras" aria-labelledby="service-extras-title">
              <h2 id="service-extras-title">{t.serviceExtrasTitle}</h2>
              <p className="service-extras-lead">{t.serviceExtrasLead}</p>
              <ul className="service-extras-list">
                {copy.extras.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
              <a className="btn btn-secondary" href={visitWhatsAppHref(locale, "solar-extras")}>
                {t.visitCta}
              </a>
            </section>
          ) : null}

          <section className="service-process" aria-labelledby="service-process-title">
            <h2 id="service-process-title">{t.howServiceRuns}</h2>
            <ProcessStrip variant="service" steps={copy.process} />
          </section>

          <RelatedLinks
            title={t.serviceAreasTitle}
            lead={t.serviceAreasLead}
            items={copy.relatedAreaIds.map((id) => ({
              href: getPath({ kind: "area", locale, id }),
              title: getArea(locale, id).name,
            }))}
          />

          <RelatedLinks
            title={t.relatedGuides}
            numbered
            items={copy.relatedGuideIds.map((id) => {
              const guide = getGuide(locale, id);
              return {
                href: getPath({ kind: "guide", locale, id }),
                title: guide.name,
                summary: guide.summary,
              };
            })}
          />
        </div>
      </article>
      <Faqs items={copy.faqs} title={t.faq} lead={t.faqLead} />
      <FinalCta
        locale={locale}
        title={isSolar ? t.solarFinalCtaTitle : t.finalCtaTitle}
        body={isSolar ? t.solarFinalCtaBody : t.finalCtaBody}
        primaryHref={isSolar ? getPath({ kind: "calculator", locale }) : undefined}
        primaryLabel={isSolar ? t.solarCta : undefined}
        secondaryHref={isSolar ? visitWhatsAppHref(locale, "solar") : undefined}
        secondaryLabel={isSolar ? t.visitCta : undefined}
      />
    </>
  );
}
