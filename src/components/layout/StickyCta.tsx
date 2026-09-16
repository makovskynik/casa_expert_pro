"use client";

import { nav, ui } from "@/content/ui";
import { company, visitWhatsAppHref } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/config";
import { useEffect, useState } from "react";

export function StickyCta({ locale }: { locale: Locale }) {
  const t = nav[locale];
  const copy = ui[locale];
  const [visible, setVisible] = useState(false);
  const visit = visitWhatsAppHref(locale);

  useEffect(() => {
    const hero = document.querySelector("[data-hero-cta]");
    if (!hero) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0.2,
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`sticky-cta${visible ? " is-visible" : ""}`}>
      <a className="btn btn-secondary" href={`tel:${company.phone}`}>
        {t.call}
      </a>
      <a className="btn btn-primary" href={visit}>
        {copy.visitCta}
      </a>
    </div>
  );
}
