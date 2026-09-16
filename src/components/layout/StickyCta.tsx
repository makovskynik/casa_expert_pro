"use client";

import { nav, ui } from "@/content/ui";
import { company, visitWhatsAppHref } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/config";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CALC_PATH =
  /(?:^|\/)(solar-calculator|calculadora-placas-solares|kalkulyator-solnechnyh-paneley)\/?$/;

export function StickyCta({ locale }: { locale: Locale }) {
  const t = nav[locale];
  const copy = ui[locale];
  const pathname = usePathname() || "";
  const hide = CALC_PATH.test(pathname);
  const [state, setState] = useState({ path: "", visible: false });
  const visible = state.path === pathname && state.visible;
  const visit = visitWhatsAppHref(locale);

  useEffect(() => {
    if (hide) return;

    const hero = document.querySelector("[data-hero-cta]");
    if (!hero) {
      const timer = window.setTimeout(() => {
        setState({ path: pathname, visible: true });
      }, 0);
      return () => window.clearTimeout(timer);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setState({ path: pathname, visible: !entry.isIntersecting });
      },
      { threshold: 0.2 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [hide, pathname]);

  if (hide) return null;

  return (
    <div className={`sticky-cta${visible ? " is-visible" : ""}`}>
      <a className="btn btn-secondary" href={`tel:${company.phone}`}>
        {t.call}
      </a>
      <a className="btn btn-primary" href={visit}>
        {copy.stickyVisitCta}
      </a>
    </div>
  );
}
