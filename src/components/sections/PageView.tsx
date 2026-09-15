import { Calculator } from "@/components/calculator/Calculator";
import { JsonLd } from "@/components/seo/JsonLd";
import { media, serviceMedia } from "@/content/media";
import { areas } from "@/content/areas";
import { guides } from "@/content/guides";
import { projects } from "@/content/projects";
import { ui } from "@/content/ui";
import {
  getArea,
  getGuide,
  getProject,
  getService,
  getSimplePage,
} from "@/lib/content/registry";
import { company, whatsappHref } from "@/lib/content/site";
import type { FaqItem, PriceRow } from "@/lib/content/types";
import {
  AREA_IDS,
  GUIDE_IDS,
  PROJECT_IDS,
  SERVICE_IDS,
  getPath,
  type ServiceId,
  type ResolvedPage,
} from "@/lib/i18n/routing";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildServiceSchema,
  buildWebSiteSchema,
  jsonLdGraph,
} from "@/lib/schema/builders";
import Image from "next/image";
import Link from "next/link";

const FEATURED_SERVICES: ServiceId[] = ["home-renovation", "solar-panels"];
const EXTRA_SERVICES: ServiceId[] = [
  "bathroom-renovation",
  "kitchen-renovation",
  "engineering",
  "property-preparation",
];

function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={item.href}>
          {i > 0 ? " / " : null}
          {i === items.length - 1 ? (
            <span>{item.label}</span>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

function Faqs({ items, title }: { items: FaqItem[]; title: string }) {
  if (!items.length) return null;
  return (
    <section className="section" id="faq">
      <div className="container screen">
        <h2>{title}</h2>
        <div className="faq">
          {items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceTable({ rows, title }: { rows: PriceRow[]; title: string }) {
  if (!rows.length) return null;
  return (
    <div>
      <h2>{title}</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Range</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.item}>
                <td>{row.item}</td>
                <td>{row.value}</td>
                <td>{row.note ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ServiceCard({
  locale,
  id,
  teaser,
  featured = false,
}: {
  locale: ResolvedPage["locale"];
  id: ServiceId;
  viewLabel?: string;
  teaser?: string;
  featured?: boolean;
}) {
  const item = getService(locale, id);
  const img = serviceMedia[id];
  return (
    <Link
      className={`service-card${featured ? " service-card-featured" : ""}`}
      href={getPath({ kind: "service", locale, id })}
    >
      <div className="cover-photo">
        <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 40vw, 33vw" />
      </div>
      <div className="service-card-copy">
        <h3>{item.name}</h3>
        {teaser ? <p className="muted">{teaser}</p> : null}
      </div>
    </Link>
  );
}

function CtaRow({
  locale,
  primaryHref,
  primaryLabel,
}: {
  locale: ResolvedPage["locale"];
  primaryHref?: string;
  primaryLabel?: string;
}) {
  const t = ui[locale];
  const visit = whatsappHref(
    locale === "es"
      ? "Hola, quiero pedir una visita técnica en Costa Blanca."
      : locale === "ru"
        ? "Здравствуйте, хочу заказать выезд на Коста-Бланке."
        : "Hello, I would like to request a site visit on the Costa Blanca.",
  );
  return (
    <div className="cta-row">
      <a className="btn btn-primary" href={primaryHref ?? visit}>
        {primaryLabel ?? t.visitCta}
      </a>
      <a className="btn btn-secondary" href={whatsappHref()}>
        {t.whatsappUs}
      </a>
    </div>
  );
}

export function PageView({ page }: { page: ResolvedPage }) {
  const { locale } = page;
  const t = ui[locale];

  if (page.kind === "home") {
    const copy = getSimplePage(page);
    const process = getSimplePage({ kind: "process", locale });
    return (
      <>
        <JsonLd
          data={jsonLdGraph([
            buildOrganizationSchema(),
            buildLocalBusinessSchema(),
            buildWebSiteSchema(),
            buildFaqSchema(copy.faqs ?? []),
          ])}
        />
        <section className="hero-screen">
          <div className="hero-stage">
            <div className="hero-copy">
              <h1>{copy.h1}</h1>
              <p className="lead">{copy.summary}</p>
              <div className="cta-row" data-hero-cta>
                <a
                  className="btn btn-primary"
                  href={whatsappHref(
                    locale === "es"
                      ? "Hola, quiero pedir una visita técnica en Costa Blanca."
                      : locale === "ru"
                        ? "Здравствуйте, хочу заказать выезд на Коста-Бланке."
                        : "Hello, I would like to request a site visit on the Costa Blanca.",
                  )}
                >
                  {t.visitCta}
                </a>
                <Link className="btn btn-ghost" href={getPath({ kind: "calculator", locale })}>
                  {t.solarCta}
                </Link>
              </div>
            </div>
            <figure className="hero-photo">
              <Image
                src={media.hero.src}
                alt={media.hero.alt}
                fill
                priority
                sizes="(max-width: 960px) 100vw, 48vw"
              />
              <ul className="hero-meta">
                <li>{t.proofArea}</li>
                <li>{t.proofLangs}</li>
              </ul>
              <figcaption className="hero-caption">
                <strong>{t.proofVisit}</strong>
                <span>{t.heroCaption}</span>
              </figcaption>
            </figure>
            <ul className="container proof-bar">
              <li>{t.proofArea}</li>
              <li>{t.proofLangs}</li>
              <li>{t.proofQuote}</li>
              <li>{t.oneContact}</li>
            </ul>
          </div>
        </section>
        <section className="section section-services">
          <div className="container services-paths">
            <h2>{t.seeServices}</h2>
            <div className="services-featured">
              <ServiceCard
                locale={locale}
                id="home-renovation"
                teaser={t.serviceTeaserReno}
                featured
              />
              <ServiceCard
                locale={locale}
                id="solar-panels"
                teaser={t.serviceTeaserSolar}
                featured
              />
            </div>
          </div>
          <div className="container services-more">
            <p className="eyebrow">{t.moreServices}</p>
            <ul className="services-extra-links">
              {EXTRA_SERVICES.map((id) => (
                <li key={id}>
                  <Link href={getPath({ kind: "service", locale, id })}>
                    {getService(locale, id).name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="calc-band" aria-labelledby="calc-band-title">
          <figure className="calc-band-stage">
            <Image
              src={media.calc.src}
              alt={media.calc.alt}
              fill
              sizes="100vw"
              className="calc-band-image"
            />
            <figcaption className="container calc-band-copy">
              <h2 id="calc-band-title">{t.calcTitle}</h2>
              <p className="lead">{t.calcLead}</p>
              <Link className="btn btn-on-ink" href={getPath({ kind: "calculator", locale })}>
                {t.solarCta}
              </Link>
            </figcaption>
          </figure>
        </section>
        <section className="section section-process">
          <div className="container process-block">
            <h2>{t.processTitle}</h2>
            <ol className="process-strip process-strip-home">
              {(process.steps ?? []).map((step, i) => (
                <li key={step.title}>
                  <span className="process-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="process-copy">
                    <h3>{step.title}</h3>
                    <p className="process-meta">{step.result ?? step.timing}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link className="text-link" href={getPath({ kind: "process", locale })}>
              {t.processMore}
            </Link>
          </div>
        </section>
        <section className="section">
          <div className="container stack-lg screen">
            <h2>{t.zones}</h2>
            <div className="grid-3">
              {AREA_IDS.map((id) => {
                const area = getArea(locale, id);
                return (
                  <Link key={id} className="card area-card" href={getPath({ kind: "area", locale, id })}>
                    <h3>{area.name}</h3>
                    <p className="muted clamp-3">{area.summary}</p>
                    <span className="text-link">{area.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container screen">
            <p className="lead">{t.contactLine}</p>
          </div>
        </section>
        <Faqs items={copy.faqs ?? []} title={t.faq} />
        <section className="section section-ink">
          <div className="container stack screen">
            <h2>{t.finalCtaTitle}</h2>
            <p className="lead">{t.finalCtaBody}</p>
            <CtaRow locale={locale} />
          </div>
        </section>
      </>
    );
  }

  if (page.kind === "service") {
    const copy = getService(locale, page.id);
    const img = serviceMedia[page.id];
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
              { name: "Home", path: getPath({ kind: "home", locale }) },
              { name: ui[locale].seeServices, path: getPath({ kind: "services-index", locale }) },
              { name: copy.name, path: getPath(page) },
            ]),
            buildFaqSchema(copy.faqs),
          ])}
        />
        <article className="section" style={{ paddingTop: "2.5rem" }}>
          <div className="container stack-lg screen">
            <Breadcrumbs
              items={[
                { href: getPath({ kind: "home", locale }), label: "Casa Expert" },
                { href: getPath({ kind: "services-index", locale }), label: t.seeServices },
                { href: getPath(page), label: copy.name },
              ]}
            />
            <figure className="page-photo">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 960px) 100vw, 80vw" />
            </figure>
            <h1>{copy.h1}</h1>
            <p className="lead">{copy.summary}</p>
            <p className="measure">{copy.answer}</p>
            <div className="grid-2">
              <div>
                <h2>{t.includes}</h2>
                <ul className="prose">
                  {copy.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>{t.excludes}</h2>
                <ul className="prose">
                  {copy.excludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <PriceTable rows={copy.priceRows} title={t.priceFactors} />
            <ol className="prose">
              {copy.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="notice">
              {t.ivaIncluded} {t.surveyNeeded}
            </p>
            <CtaRow
              locale={locale}
              primaryHref={
                page.id === "solar-panels" ? getPath({ kind: "calculator", locale }) : undefined
              }
              primaryLabel={page.id === "solar-panels" ? t.solarCta : t.visitCta}
            />
          </div>
        </article>
        <Faqs items={copy.faqs} title={t.faq} />
        <Related
          locale={locale}
          services={[]}
          areas={copy.relatedAreaIds}
          projects={[]}
          title={t.related}
        />
      </>
    );
  }

  if (page.kind === "area") {
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
        <article className="section" style={{ paddingTop: "2.5rem" }}>
          <div className="container stack-lg screen">
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
                <ServiceCard key={id} locale={locale} id={id} viewLabel={t.viewService} />
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
          </div>
        </article>
        <Faqs items={copy.faqs} title={t.faq} />
      </>
    );
  }

  if (page.kind === "project") {
    const copy = getProject(locale, page.id);
    const img = copy.coverClass === "solar" ? media.solar : media.renovation;
    return (
      <article className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="container stack-lg screen">
          <p className="eyebrow">{t.illustrative}</p>
          <figure className="page-photo">
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 960px) 100vw, 80vw" />
          </figure>
          <h1>{copy.h1}</h1>
          <p className="lead">{copy.summary}</p>
          <p className="measure">{copy.answer}</p>
          <p className="notice">{t.mediaNote}</p>
          <div className="grid-2">
            <div className="stack">
              <h2>{locale === "ru" ? "Задача" : locale === "es" ? "Problema" : "Problem"}</h2>
              <p>{copy.problem}</p>
              <h2>{locale === "ru" ? "Ограничения" : locale === "es" ? "Restricciones" : "Constraints"}</h2>
              <ul className="prose">
                {copy.constraints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="stack">
              <h2>{locale === "ru" ? "Состав" : locale === "es" ? "Alcance" : "Scope"}</h2>
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
          <CtaRow locale={locale} />
        </div>
      </article>
    );
  }

  if (page.kind === "guide") {
    const copy = getGuide(locale, page.id);
    return (
      <>
        <JsonLd data={jsonLdGraph([buildFaqSchema(copy.faqs)])} />
        <article className="section" style={{ paddingTop: "2.5rem" }}>
          <div className="container stack-lg screen">
            <h1>{copy.h1}</h1>
            <p className="measure">{copy.answer}</p>
            {copy.sections.map((section) => (
              <section key={section.heading} className="prose">
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
            {copy.priceRows ? <PriceTable rows={copy.priceRows} title={t.priceFactors} /> : null}
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
          </div>
        </article>
        <Faqs items={copy.faqs} title={t.faq} />
      </>
    );
  }

  if (page.kind === "calculator") {
    const copy = getSimplePage(page);
    return (
      <>
        <JsonLd data={jsonLdGraph([buildFaqSchema(copy.faqs ?? [])])} />
        <article className="section" style={{ paddingTop: "2.5rem" }}>
          <div className="container stack-lg">
            <h1>{copy.h1}</h1>
            <p className="lead">{copy.summary}</p>
            <Calculator locale={locale} />
          </div>
        </article>
        <Faqs items={copy.faqs ?? []} title={t.faq} />
      </>
    );
  }

  if (
    page.kind === "services-index" ||
    page.kind === "areas-index" ||
    page.kind === "projects-index" ||
    page.kind === "guides-index"
  ) {
    const copy = getSimplePage(page);
    return (
      <article className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="container stack-lg screen">
          <h1>{copy.h1}</h1>
          <p className="lead">{copy.summary}</p>
          <p className="measure">{copy.answer}</p>
          {page.kind === "services-index" ? (
            <>
              <div className="grid-2">
                {FEATURED_SERVICES.map((id) => (
                  <ServiceCard key={id} locale={locale} id={id} viewLabel={t.viewService} />
                ))}
              </div>
              <p className="eyebrow" style={{ marginBottom: 0 }}>
                {t.moreServices}
              </p>
              <div className="grid-4">
                {EXTRA_SERVICES.map((id) => (
                  <ServiceCard key={id} locale={locale} id={id} viewLabel={t.viewService} />
                ))}
              </div>
            </>
          ) : (
            <div className="grid-3">
              {(page.kind === "areas-index"
                ? AREA_IDS.map((id) => ({
                    href: getPath({ kind: "area", locale, id }),
                    title: areas[id][locale].name,
                    text: areas[id][locale].summary,
                  }))
                : page.kind === "projects-index"
                  ? PROJECT_IDS.map((id) => ({
                      href: getPath({ kind: "project", locale, id }),
                      title: projects[id][locale].name,
                      text: projects[id][locale].summary,
                    }))
                  : GUIDE_IDS.map((id) => ({
                      href: getPath({ kind: "guide", locale, id }),
                      title: guides[id][locale].name,
                      text: guides[id][locale].summary,
                    }))
              ).map((card) => (
                <Link key={card.href} className="card service-card" href={card.href}>
                  <h3>{card.title}</h3>
                  <p className="muted clamp-3">{card.text}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  const copy = getSimplePage(page);
  return (
    <article className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container stack-lg screen">
        <h1>{copy.h1}</h1>
        <p className="lead">{copy.summary}</p>
        <p className="measure">{copy.answer}</p>
        {copy.steps ? (
          <ol className="process-strip">
            {copy.steps.map((step, i) => (
              <li key={step.title}>
                <span className="process-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="process-copy">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  {step.result || step.timing ? (
                    <p className="process-meta">
                      {step.result}
                      {step.result && step.timing ? " · " : null}
                      {step.timing}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        ) : null}
        {copy.sections?.map((section) => (
          <section key={section.heading} className="prose">
            {section.heading ? <h2>{section.heading}</h2> : null}
            {section.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
        {page.kind === "contact" ? (
          <CtaRow locale={locale} primaryHref={`tel:${company.phone}`} primaryLabel={company.phoneDisplay} />
        ) : null}
      </div>
    </article>
  );
}

function Related({
  locale,
  services: serviceIds,
  areas: areaIds,
  projects: projectIds,
  title,
}: {
  locale: ResolvedPage["locale"];
  services: string[];
  areas: string[];
  projects: string[];
  title: string;
}) {
  if (!serviceIds.length && !areaIds.length && !projectIds.length) return null;
  return (
    <section className="section">
      <div className="container stack screen">
        <h2>{title}</h2>
        <div className="grid-3">
          {serviceIds.map((id) => (
            <Link
              key={id}
              className="card"
              href={getPath({ kind: "service", locale, id: id as (typeof SERVICE_IDS)[number] })}
            >
              {getService(locale, id as (typeof SERVICE_IDS)[number]).name}
            </Link>
          ))}
          {areaIds.map((id) => (
            <Link
              key={id}
              className="card"
              href={getPath({ kind: "area", locale, id: id as (typeof AREA_IDS)[number] })}
            >
              {getArea(locale, id as (typeof AREA_IDS)[number]).name}
            </Link>
          ))}
          {projectIds.map((id) => (
            <Link
              key={id}
              className="card"
              href={getPath({ kind: "project", locale, id: id as (typeof PROJECT_IDS)[number] })}
            >
              {getProject(locale, id as (typeof PROJECT_IDS)[number]).name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
