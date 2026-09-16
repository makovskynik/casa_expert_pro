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
        <div className="footer-brand">
          <Link href={getPath({ kind: "home", locale })} aria-label="Casa Expert">
            <Logo />
          </Link>
          <p className="footer-blurb">
            {copy.serviceArea}. {copy.languages}.
          </p>
          <div className="footer-contact">
            <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
            <a href={whatsappHref()}>{t.whatsapp}</a>
          </div>
        </div>
        <div className="footer-col">
          <strong>{t.services}</strong>
          <Link href={getPath({ kind: "service", locale, id: "solar-panels" })}>
            {locale === "es"
              ? "Placas solares"
              : locale === "ru"
                ? "Солнечные панели"
                : "Solar panels"}
          </Link>
          <Link href={getPath({ kind: "service", locale, id: "home-renovation" })}>
            {locale === "es" ? "Reforma integral" : locale === "ru" ? "Ремонт под ключ" : "Home renovation"}
          </Link>
          <Link href={getPath({ kind: "calculator", locale })}>{copy.solarCta}</Link>
          <Link href={getPath({ kind: "services-index", locale })}>{copy.footerAllServices}</Link>
        </div>
        <div className="footer-col">
          <strong>{t.areas}</strong>
          <Link href={getPath({ kind: "area", locale, id: "alicante" })}>Alicante</Link>
          <Link href={getPath({ kind: "area", locale, id: "torrevieja" })}>Torrevieja</Link>
          <Link href={getPath({ kind: "area", locale, id: "orihuela-costa" })}>Orihuela Costa</Link>
        </div>
        <div className="footer-col">
          <strong>{copy.footerLegal}</strong>
          <Link href={getPath({ kind: "privacy", locale })}>{copy.footerPrivacy}</Link>
          <Link href={getPath({ kind: "cookies", locale })}>{copy.footerCookies}</Link>
          <Link href={getPath({ kind: "legal-notice", locale })}>{copy.footerNotice}</Link>
          <Link href={getPath({ kind: "contact", locale })}>{t.contact}</Link>
          <Link href={getPath({ kind: "about", locale })}>{t.about}</Link>
          <a href="/llms.txt">{copy.footerLlms}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{copy.footerRights}</span>
        <span>{copy.ivaIncluded}</span>
      </div>
    </footer>
  );
}
