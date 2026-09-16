import { Faqs } from "@/components/content/Faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCta } from "@/components/ui/FinalCta";
import { serviceMedia } from "@/content/media";
import { ui } from "@/content/ui";
import { getService, getSimplePage } from "@/lib/content/registry";
import { getPath, type ResolvedPage, type ServiceId } from "@/lib/i18n/routing";
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

export function ServicesIndexPage({
  page,
}: {
  page: Extract<ResolvedPage, { kind: "services-index" }>;
}) {
  const { locale } = page;
  const t = ui[locale];
  const copy = getSimplePage(page);
  const reno = getService(locale, "home-renovation");
  const solar = getService(locale, "solar-panels");
  const renoImg = serviceMedia["home-renovation"];
  const solarImg = serviceMedia["solar-panels"];
  const solarHref = getPath({ kind: "service", locale, id: "solar-panels" });
  const extrasHref = `${solarHref}#extras`;
  const faqs = copy.faqs ?? [];

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          buildOrganizationSchema(),
          buildLocalBusinessSchema(),
          buildWebSiteSchema(),
          buildFaqSchema(faqs),
        ])}
      />
      <article className="sx">
        <header className="sx-intro">
          <div className="container">
            <div className="sx-intro-inner">
              <p className="eyebrow">{copy.h1}</p>
              <h1>{t.seeServices}</h1>
              <p className="lead">{copy.summary}</p>
              {copy.answer ? <p className="sx-answer measure">{copy.answer}</p> : null}
            </div>
          </div>
        </header>

        <section className="sx-chooser" aria-label={t.seeServices}>
          <Link
            className="sx-path"
            href={getPath({ kind: "service", locale, id: "home-renovation" })}
          >
            <figure className="sx-path-media">
              <Image
                src={renoImg.src}
                alt={renoImg.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, (max-width: 1280px) 50vw, 640px"
              />
            </figure>
            <div className="sx-path-copy">
              <span className="sx-path-index" aria-hidden="true">
                01
              </span>
              <h2>{reno.name}</h2>
              <p>{t.serviceTeaserReno}</p>
              <div className="sx-path-foot">
                {reno.highlight ? (
                  <p className="sx-path-price">
                    <span>{reno.highlight.value}</span>
                    <small>{reno.highlight.item}</small>
                  </p>
                ) : (
                  <span />
                )}
                <span className="sx-path-cta">{t.viewService}</span>
              </div>
            </div>
          </Link>

          <Link className="sx-path" href={solarHref}>
            <figure className="sx-path-media">
              <Image
                src={solarImg.src}
                alt={solarImg.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, (max-width: 1280px) 50vw, 640px"
              />
            </figure>
            <div className="sx-path-copy">
              <span className="sx-path-index" aria-hidden="true">
                02
              </span>
              <h2>{solar.name}</h2>
              <p>{t.serviceTeaserSolar}</p>
              <div className="sx-path-foot">
                {solar.highlight ? (
                  <p className="sx-path-price">
                    <span>{solar.highlight.value}</span>
                    <small>{solar.highlight.item}</small>
                  </p>
                ) : (
                  <span />
                )}
                <span className="sx-path-cta">{t.viewService}</span>
              </div>
            </div>
          </Link>
        </section>

        {solar.extras?.length ? (
          <section className="sx-care" aria-labelledby="sx-care-title">
            <div className="container sx-care-inner">
              <header className="sx-care-head">
                <h2 id="sx-care-title">{t.serviceExtrasTitle}</h2>
                <p>{t.serviceExtrasLead}</p>
              </header>
              <ol className="sx-care-list">
                {solar.extras.map((item, i) => (
                  <li key={item.title}>
                    <Link href={extrasHref}>
                      <span className="sx-care-num" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <strong>{item.title}</strong>
                      <span>{item.body}</span>
                    </Link>
                  </li>
                ))}
              </ol>
              <Link className="sx-care-link" href={extrasHref}>
                {t.viewService} — {solar.name}
              </Link>
            </div>
          </section>
        ) : null}

        <section className="sx-more" aria-labelledby="sx-more-title">
          <div className="container sx-more-inner">
            <p className="eyebrow" id="sx-more-title">
              {t.moreServices}
            </p>
            <ul className="sx-more-list">
              {EXTRA_SERVICES.map((id) => {
                const item = getService(locale, id);
                const img = serviceMedia[id];
                return (
                  <li key={id}>
                    <Link href={getPath({ kind: "service", locale, id })}>
                      <figure className="sx-more-media">
                        <Image src={img.src} alt="" fill sizes="(max-width: 900px) 40vw, 18vw" />
                      </figure>
                      <span className="sx-more-copy">
                        <strong>{item.name}</strong>
                        <small>{item.summary}</small>
                      </span>
                      <span className="sx-more-cta" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </article>
      {faqs.length ? <Faqs items={faqs} title={t.faq} lead={t.faqLead} /> : null}
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
