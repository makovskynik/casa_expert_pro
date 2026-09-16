import { Faqs } from "@/components/content/Faqs";
import { ServiceCard } from "@/components/content/ServiceCard";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaRow } from "@/components/ui/CtaRow";
import { FinalCta } from "@/components/ui/FinalCta";
import { nav, ui } from "@/content/ui";
import { getArea, getProject } from "@/lib/content/registry";
import { visitWhatsAppHref } from "@/lib/content/site";
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
  const n = nav[locale];
  const copy = getArea(locale, page.id);
  const solarFirst = copy.relatedServiceIds.includes("solar-panels") &&
    copy.relatedServiceIds[0] === "solar-panels";

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
      <article className="area-page">
        <div className="container area-page-inner">
          <Breadcrumbs
            items={[
              { href: getPath({ kind: "home", locale }), label: n.home },
              { href: getPath({ kind: "areas-index", locale }), label: n.areas },
              { href: getPath(page), label: copy.name },
            ]}
          />

          <header className="area-hero">
            <h1>{copy.h1}</h1>
            <p className="lead">{copy.summary}</p>
            <p className="measure">{copy.answer}</p>
            <p className="notice">{copy.travelNote}</p>
            <CtaRow
              locale={locale}
              primaryHref={
                solarFirst ? getPath({ kind: "calculator", locale }) : visitWhatsAppHref(locale)
              }
              primaryLabel={solarFirst ? t.solarCta : t.visitCta}
              secondaryHref={
                solarFirst ? visitWhatsAppHref(locale) : getPath({ kind: "calculator", locale })
              }
              secondaryLabel={solarFirst ? t.whatsappUs : t.solarCta}
            />
          </header>

          <section className="area-services" aria-labelledby="area-services-title">
            <h2 id="area-services-title">{t.areaServicesTitle}</h2>
            <p className="area-services-lead">{t.areaServicesLead}</p>
            <div className="grid-3 area-service-grid">
              {copy.relatedServiceIds.map((id) => (
                <ServiceCard key={id} locale={locale} id={id} featured />
              ))}
            </div>
          </section>

          <section className="area-notes" aria-labelledby="area-notes-title">
            <h2 id="area-notes-title">{t.areaLocalTitle}</h2>
            <ul>
              {copy.localNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <RelatedLinks
            title={t.relatedProjects}
            lead={t.relatedProjectsLead}
            items={copy.relatedProjectIds.map((id) => {
              const project = getProject(locale, id);
              return {
                href: getPath({ kind: "project", locale, id }),
                title: project.name,
                summary: project.summary,
              };
            })}
          />
        </div>
      </article>
      <Faqs items={copy.faqs} title={t.faq} lead={t.faqLead} />
      <FinalCta
        locale={locale}
        title={t.finalCtaTitle}
        body={t.finalCtaBody}
        primaryHref={
          solarFirst ? getPath({ kind: "calculator", locale }) : visitWhatsAppHref(locale)
        }
        primaryLabel={solarFirst ? t.solarCta : t.visitCta}
        secondaryHref={
          solarFirst ? visitWhatsAppHref(locale) : getPath({ kind: "calculator", locale })
        }
        secondaryLabel={solarFirst ? t.visitCta : t.solarCta}
      />
    </>
  );
}
