"use client";

import { Logo } from "@/components/brand/Logo";
import { nav } from "@/content/ui";
import { services } from "@/content/services";
import type { Locale } from "@/lib/i18n/config";
import { getAlternatePages, getPath, resolveAnyPath, SERVICE_IDS } from "@/lib/i18n/routing";
import { company, whatsappHref } from "@/lib/content/site";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header({ locale }: { locale: Locale }) {
  const t = nav[locale];
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const current = resolveAnyPath(pathname) ?? { kind: "home" as const, locale };
  const alts = getAlternatePages(current);
  const calc = getPath({ kind: "calculator", locale });
  const servicesHref = getPath({ kind: "services-index", locale });

  const links = [
    { href: getPath({ kind: "process", locale }), label: t.process },
    { href: getPath({ kind: "areas-index", locale }), label: t.areas },
  ];

  useEffect(() => {
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      setHidden(false);
      return;
    }

    const readY = () =>
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let last = readY();

    const onScroll = () => {
      const y = readY();
      const delta = y - last;
      last = y;
      if (y < 24) {
        setHidden(false);
        return;
      }
      if (delta > 8) setHidden(true);
      else if (delta < -8) setHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, true);
    };
  }, [open]);

  return (
    <header className={`site-header${hidden ? " is-hidden" : ""}`}>
      <div className="container header-inner">
        <Link href={getPath({ kind: "home", locale })} aria-label="Casa Expert">
          <Logo />
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          <div className="nav-item">
            <Link href={servicesHref}>{t.services}</Link>
            <div className="nav-dropdown" role="list">
              {SERVICE_IDS.map((id) => (
                <Link key={id} href={getPath({ kind: "service", locale, id })} role="listitem">
                  {services[id][locale].name}
                </Link>
              ))}
            </div>
          </div>
          {links.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-end">
          <div className="lang-switch desktop-only" aria-label="Language">
            {(["en", "es", "ru"] as const).map((code) => (
              <Link
                key={code}
                href={getPath(alts[code])}
                hrefLang={code}
                aria-current={code === locale ? "page" : undefined}
              >
                {code.toUpperCase()}
              </Link>
            ))}
          </div>
          <a className="phone-link desktop-only" href={`tel:${company.phone}`}>
            {company.phoneDisplay}
          </a>
          <Link className="btn btn-secondary btn-compact desktop-only" href={calc}>
            {t.calculator}
          </Link>
          <a className="icon-btn mobile-only" href={`tel:${company.phone}`} aria-label={t.call}>
            <Phone size={18} />
          </a>
          <a className="icon-btn mobile-only" href={whatsappHref()} aria-label={t.whatsapp}>
            <MessageCircle size={18} />
          </a>
          <button
            type="button"
            className="menu-toggle btn"
            aria-expanded={open}
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div className={`container mobile-nav${open ? " open" : ""}`}>
        <p className="meta">{t.services}</p>
        {SERVICE_IDS.map((id) => (
          <Link
            key={id}
            href={getPath({ kind: "service", locale, id })}
            onClick={() => setOpen(false)}
          >
            {services[id][locale].name}
          </Link>
        ))}
        {links.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href={getPath({ kind: "guides-index", locale })} onClick={() => setOpen(false)}>
          {t.guides}
        </Link>
        <Link href={calc} onClick={() => setOpen(false)}>
          {t.calculator}
        </Link>
        <Link href={getPath({ kind: "contact", locale })} onClick={() => setOpen(false)}>
          {t.contact}
        </Link>
        <div className="lang-switch" aria-label="Language">
          {(["en", "es", "ru"] as const).map((code) => (
            <Link
              key={code}
              href={getPath(alts[code])}
              hrefLang={code}
              aria-current={code === locale ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {code.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
