"use client";

import { ui } from "@/content/ui";
import { whatsappHref } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/config";
import { getPath } from "@/lib/i18n/routing";
import Link from "next/link";
import { useState, type FormEvent } from "react";

const PHONE_RE = /^\+?[0-9()\s-]{8,20}$/;

export function LeadForm({
  locale,
  wa,
  onBackHref,
}: {
  locale: Locale;
  wa: string;
  onBackHref: string;
}) {
  const t = ui[locale];
  const [status, setStatus] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    if (name.length < 2 || !PHONE_RE.test(phone)) {
      setStatus(t.phoneInvalid);
      return;
    }
    const pref = String(form.get("pref") || "whatsapp");
    const note = String(form.get("message") || "").trim();
    const message = [
      decodeURIComponent(wa.split("text=")[1] ?? ""),
      `${t.name}: ${name}`,
      `${t.phone}: ${phone}`,
      `${t.contactPref}: ${pref === "phone" ? t.prefPhone : t.prefWhatsapp}`,
      note,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = whatsappHref(message);
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <h3 className="calc-lead-title">{t.submitLead}</h3>
      <div className="form-field">
        <label htmlFor="name">{t.name}</label>
        <input id="name" name="name" required autoComplete="name" minLength={2} />
      </div>
      <div className="form-field">
        <label htmlFor="phone">{t.phone}</label>
        <input
          id="phone"
          name="phone"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="+34 602 495 760"
          aria-describedby="phone-hint"
        />
        <span id="phone-hint" className="notice">
          {t.phoneHint}
        </span>
      </div>
      <fieldset className="choice-row">
        <legend className="meta">{t.contactPref}</legend>
        <label>
          <input type="radio" name="pref" value="whatsapp" defaultChecked />
          {t.prefWhatsapp}
        </label>
        <label>
          <input type="radio" name="pref" value="phone" />
          {t.prefPhone}
        </label>
      </fieldset>
      <div className="form-field">
        <label htmlFor="msg">{t.message}</label>
        <textarea id="msg" name="message" rows={3} />
      </div>
      <label className="notice">
        <input type="checkbox" name="consent" required value="1" /> {t.consent}{" "}
        <Link href={getPath({ kind: "privacy", locale })}>{t.privacyLink}</Link>.
      </label>
      <div className="calc-nav">
        <a className="btn btn-secondary" href={onBackHref}>
          {t.calcBack}
        </a>
        <button className="btn btn-primary" type="submit">
          {t.submitLead}
        </button>
      </div>
      {status ? <p className="notice">{status}</p> : null}
    </form>
  );
}
