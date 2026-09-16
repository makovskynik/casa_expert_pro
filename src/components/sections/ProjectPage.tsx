import { RelatedLinks } from "@/components/content/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaRow } from "@/components/ui/CtaRow";
import { FinalCta } from "@/components/ui/FinalCta";
import { media } from "@/content/media";
import { nav, ui } from "@/content/ui";
import { getArea, getProject, getService } from "@/lib/content/registry";
import { getPath, type ResolvedPage } from "@/lib/i18n/routing";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  jsonLdGraph,
} from "@/lib/schema/builders";
import Image from "next/image";

export function ProjectPage({
  page,
}: {
  page: Extract<ResolvedPage, { kind: "project" }>;
}) {
  const { locale } = page;
  const t = ui[locale];
  const n = nav[locale];
  const copy = getProject(locale, page.id);
  const area = getArea(locale, copy.areaId);
  const img = copy.coverClass === "solar" ? media.solar : media.renovation;
  const problemTitle = locale === "ru" ? "Задача" : locale === "es" ? "Problema" : "Problem";
  const constraintsTitle =
    locale === "ru" ? "Ограничения" : locale === "es" ? "Restricciones" : "Constraints";
  const scopeTitle = locale === "ru" ? "Состав" : locale === "es" ? "Alcance" : "Scope";

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: n.home, path: getPath({ kind: "home", locale }) },
            { name: n.projects, path: getPath({ kind: "projects-index", locale }) },
            { name: copy.name, path: getPath(page) },
          ]),
        ])}
      />
      <article className="content-page">
        <div className="container content-page-inner">
          <Breadcrumbs
            items={[
              { href: getPath({ kind: "home", locale }), label: n.home },
              { href: getPath({ kind: "projects-index", locale }), label: n.projects },
              { href: getPath(page), label: copy.name },
            ]}
          />
          <header className="content-hero">
            <p className="eyebrow">{t.illustrative}</p>
            <h1>{copy.h1}</h1>
            <p className="lead">{copy.summary}</p>
            <p className="measure">{copy.answer}</p>
            <CtaRow locale={locale} primaryLabel={t.projectCta} />
          </header>
          <figure className="content-photo">
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 960px) 100vw, 80vw" />
            <figcaption>{t.mediaNote}</figcaption>
          </figure>
          <div className="grid-2 content-split">
            <div className="stack">
              <h2>{problemTitle}</h2>
              <p>{copy.problem}</p>
              <h2>{constraintsTitle}</h2>
              <ul className="prose">
                {copy.constraints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="stack">
              <h2>{scopeTitle}</h2>
              <ul className="prose">
                {copy.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>{copy.costRange}</strong>
              </p>
              <p className="muted">{copy.duration}</p>
              <p>{copy.outcome}</p>
            </div>
          </div>
          <RelatedLinks
            title={t.related}
            items={[
              {
                href: getPath({ kind: "area", locale, id: copy.areaId }),
                title: area.name,
                summary: area.summary,
              },
              ...copy.serviceIds.map((id) => {
                const service = getService(locale, id);
                return {
                  href: getPath({ kind: "service", locale, id }),
                  title: service.name,
                  summary: service.summary,
                };
              }),
            ]}
          />
        </div>
      </article>
      <FinalCta locale={locale} title={t.finalCtaTitle} body={t.finalCtaBody} />
    </>
  );
}
