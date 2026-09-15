import { Logo } from "@/components/brand/Logo";
import { nav, ui } from "@/content/ui";
import { company, whatsappHref } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/config";
import { getPath } from "@/lib/i18n/routing";
import Link from "next/link";

export function Footer({ locale }: { locale: Locale }) {
  const t = nav[locale];
  const copy = ui[locale];
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="muted" style={{ marginTop: "1rem", maxWidth: "22rem" }}>
            {company.legalName}. {copy.serviceArea}. {copy.languages}.
          </p>
          <p style={{ marginTop: "1rem" }}>
            <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
          </p>
          <p>
            <a href={whatsappHref()}>{t.whatsapp} {company.phoneDisplay}</a>
          </p>
        </div>
        <div className="stack">
          <strong>{t.services}</strong>
          <Link href={getPath({ kind: "service", locale, id: "solar-panels" })}>
            {locale === "es"
              ? "Placas solares"
              : locale === "ru"
                ? "Солнечные панели"
                : "Solar panel installation"}
          </Link>
          <Link href={getPath({ kind: "service", locale, id: "home-renovation" })}>
            {locale === "es" ? "Reforma integral" : locale === "ru" ? "Ремонт под ключ" : "Full home renovation"}
          </Link>
          <Link href={getPath({ kind: "services-index", locale })}>{copy.seeServices}</Link>
          <Link href={getPath({ kind: "calculator", locale })}>{t.calculator}</Link>
        </div>
        <div className="stack">
          <strong>{t.areas}</strong>
          <Link href={getPath({ kind: "area", locale, id: "alicante" })}>Alicante</Link>
          <Link href={getPath({ kind: "area", locale, id: "torrevieja" })}>Torrevieja</Link>
          <Link href={getPath({ kind: "area", locale, id: "orihuela-costa" })}>Orihuela Costa</Link>
        </div>
        <div className="stack">
          <strong>{copy.footerLegal}</strong>
          <Link href={getPath({ kind: "privacy", locale })}>{copy.footerPrivacy}</Link>
          <Link href={getPath({ kind: "cookies", locale })}>{copy.footerCookies}</Link>
          <Link href={getPath({ kind: "legal-notice", locale })}>{copy.footerNotice}</Link>
          <Link href={getPath({ kind: "contact", locale })}>{t.contact}</Link>
          <Link href={getPath({ kind: "about", locale })}>{t.about}</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{copy.footerRights}</span>
        <span>{copy.ivaIncluded}</span>
      </div>
    </footer>
  );
}
