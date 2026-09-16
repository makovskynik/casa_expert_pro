import { CostaBlancaMap } from "@/components/brand/CostaBlancaMap";
import { Faqs } from "@/components/content/Faqs";
import { ProcessStrip } from "@/components/content/ProcessStrip";
import { ServiceCard } from "@/components/content/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCta } from "@/components/ui/FinalCta";
import { media } from "@/content/media";
import { ui } from "@/content/ui";
import { getArea, getService, getSimplePage } from "@/lib/content/registry";
import { visitWhatsAppHref, whatsappHref } from "@/lib/content/site";
import {
  AREA_IDS,
  getPath,
  type ResolvedPage,
  type ServiceId,
} from "@/lib/i18n/routing";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  jsonLdGraph,
} from "@/lib/schema/builders";
import Image from "next/image";
import Link from "next/link";

const EXTRA_SERVICES: ServiceId[] = [
  "bathroom-renovation",
  "kitchen-renovation",
  "engineering",
  "property-preparation",
];

export function HomePage({ page }: { page: Extract<ResolvedPage, { kind: "home" }> }) {
  const { locale } = page;
  const t = ui[locale];
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
              <a className="btn btn-primary" href={visitWhatsAppHref(locale)}>
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
            <ServiceCard locale={locale} id="home-renovation" teaser={t.serviceTeaserReno} featured />
            <ServiceCard locale={locale} id="solar-panels" teaser={t.serviceTeaserSolar} featured />
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
          <ProcessStrip
            variant="home"
            steps={(process.steps ?? []).map((step) => ({
              title: step.title,
              meta: step.result ?? step.timing,
            }))}
          />
        </div>
      </section>
      <section className="section section-zones">
        <div className="container zones-block">
          <div className="zones-copy">
            <h2>{t.zones}</h2>
            <p className="zones-lead">
              {t.zonesLead}{" "}
              <a className="text-link" href={whatsappHref(`Casa Expert — ${t.zones}`)}>
                {t.zonesLeadCta}
              </a>
              .
            </p>
            <ul className="zones-hubs">
              {AREA_IDS.map((id) => (
                <li key={id}>
                  <Link href={getPath({ kind: "area", locale, id })}>
                    {getArea(locale, id).name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <figure className="zones-map">
            <CostaBlancaMap />
          </figure>
        </div>
      </section>
      <Faqs items={copy.faqs ?? []} title={t.faq} lead={t.faqLead} />
      <FinalCta
        locale={locale}
        title={t.finalCtaTitle}
        body={t.finalCtaBody}
        secondaryHref={getPath({ kind: "calculator", locale })}
        secondaryLabel={t.solarCta}
      />
    </>
  );
}
