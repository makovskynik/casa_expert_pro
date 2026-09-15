"use client";

import { months, towns, ui } from "@/content/ui";
import { calculate } from "@/lib/calculator/model";
import type { CalculatorInput } from "@/lib/calculator/types";
import { CALCULATION_MODEL } from "@/lib/calculator/assumptions";
import { whatsappHref } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/config";
import { getPath } from "@/lib/i18n/routing";
import { track } from "@vercel/analytics";
import Link from "next/link";
import { useMemo, useState } from "react";

const municipalities = [
  "alicante",
  "torrevieja",
  "orihuela-costa",
  "benidorm",
  "gran-alacant",
  "other-costa-blanca",
] as const;

const PHONE_RE = /^\+?[0-9()\s-]{8,20}$/;

function localeTag(locale: Locale) {
  return locale === "ru" ? "ru-RU" : locale === "es" ? "es-ES" : "en-GB";
}

function money(n: number, locale: Locale) {
  return new Intl.NumberFormat(localeTag(locale), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

function number(n: number, locale: Locale, digits = 0) {
  return new Intl.NumberFormat(localeTag(locale), {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(n);
}

function pct(n: number, locale: Locale) {
  return new Intl.NumberFormat(localeTag(locale), {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(n);
}

export function Calculator({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const [mode, setMode] = useState<"kwh" | "bill">("kwh");
  const [roofUnknown, setRoofUnknown] = useState(false);
  const [input, setInput] = useState<CalculatorInput>({
    municipality: "torrevieja",
    annualKwh: 5000,
    importTariff: 0.18,
    exportTariff: 0.06,
    propertyType: "house",
    loadProfile: "mixed",
    roofM2: 40,
    orientation: "south",
    tilt: "optimal",
    shading: "none",
    batteryKwh: 0,
    batteryUnsure: false,
    ev: false,
    heatPump: false,
    pool: false,
  });
  const [bill, setBill] = useState(90);
  const [errors, setErrors] = useState<string[]>([]);
  const [started, setStarted] = useState(false);

  const result = useMemo(
    () =>
      calculate({
        ...input,
        annualKwh: mode === "kwh" ? input.annualKwh : undefined,
        monthlyBillEur: mode === "bill" ? bill : undefined,
        roofM2: roofUnknown ? undefined : input.roofM2,
      }),
    [input, mode, bill, roofUnknown],
  );

  function markStart() {
    if (!started) {
      setStarted(true);
      track("solar_calc_start", { locale, area: input.municipality });
    }
  }

  function validateBasics() {
    const next: string[] = [];
    if (mode === "kwh") {
      const kwh = input.annualKwh ?? 0;
      if (kwh < 500 || kwh > 40000) next.push(t.required);
    } else if (bill < 20 || bill > 800) {
      next.push(t.required);
    }
    if (!roofUnknown && (input.roofM2 ?? 0) < 4) next.push(t.required);
    setErrors(next);
    return next.length === 0;
  }

  const townLabel = towns[input.municipality][locale];
  const waText = [
    `Casa Expert ${t.calcTitle} ${result.estimateId}`,
    townLabel,
    `${result.recommendedKwp} kWp · ${result.panelCount} × ${result.panelWatts} W`,
    `${number(result.annualGeneration, locale)} kWh/year`,
    `${money(result.priceLow, locale)}–${money(result.priceHigh, locale)} IVA`,
    mode === "kwh" ? `${input.annualKwh} kWh` : `€${bill}/month`,
    roofUnknown ? t.unknown : `${input.roofM2} m²`,
    locale,
  ].join("\n");

  const wa = whatsappHref(waText);
  const maxBar = Math.max(...result.monthlyGeneration, 1);
  const batteryValue = input.batteryUnsure ? "unsure" : String(input.batteryKwh);

  return (
    <div className="calc-layout">
      <form
        className="card form-grid"
        onChange={markStart}
        onSubmit={(e) => {
          e.preventDefault();
          validateBasics();
        }}
      >
        <p className="muted measure">{t.calcLead}</p>
        <div className="form-field">
          <label htmlFor="muni">{t.municipality}</label>
          <select
            id="muni"
            value={input.municipality}
            onChange={(e) =>
              setInput((s) => ({ ...s, municipality: e.target.value as CalculatorInput["municipality"] }))
            }
          >
            {municipalities.map((id) => (
              <option key={id} value={id}>
                {towns[id][locale]}
              </option>
            ))}
          </select>
        </div>
        <fieldset className="choice-row">
          <legend className="meta">{t.consumption}</legend>
          <label>
            <input
              type="radio"
              name="mode"
              checked={mode === "kwh"}
              onChange={() => setMode("kwh")}
            />
            {t.knowKwh}
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              checked={mode === "bill"}
              onChange={() => setMode("bill")}
            />
            {t.knowBill}
          </label>
        </fieldset>
        {mode === "kwh" ? (
          <div className="form-field">
            <label htmlFor="kwh">{t.consumption}</label>
            <input
              id="kwh"
              type="number"
              min={500}
              max={40000}
              step={100}
              value={input.annualKwh ?? ""}
              onChange={(e) => setInput((s) => ({ ...s, annualKwh: Number(e.target.value) || undefined }))}
              required
            />
          </div>
        ) : (
          <div className="form-field">
            <label htmlFor="bill">{t.bill}</label>
            <input
              id="bill"
              type="number"
              min={20}
              max={800}
              step={1}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              required
            />
          </div>
        )}
        <div className="form-field">
          <label htmlFor="roof">{t.roof}</label>
          <input
            id="roof"
            type="number"
            min={4}
            max={400}
            value={roofUnknown ? "" : input.roofM2 ?? ""}
            disabled={roofUnknown}
            onChange={(e) => setInput((s) => ({ ...s, roofM2: Number(e.target.value) || undefined }))}
          />
          <label className="notice">
            <input
              type="checkbox"
              checked={roofUnknown}
              onChange={(e) => setRoofUnknown(e.target.checked)}
            />{" "}
            {t.unknown}
          </label>
        </div>
        <details className="advanced">
          <summary>{t.advanced}</summary>
          <div className="form-grid" style={{ marginTop: "1rem" }}>
            <div className="form-field">
              <label htmlFor="prop">{t.property}</label>
              <select
                id="prop"
                value={input.propertyType}
                onChange={(e) =>
                  setInput((s) => ({ ...s, propertyType: e.target.value as CalculatorInput["propertyType"] }))
                }
              >
                <option value="house">{t.house}</option>
                <option value="apartment">{t.apartment}</option>
                <option value="commercial">{t.commercial}</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="profile">{t.profile}</label>
              <select
                id="profile"
                value={input.loadProfile}
                onChange={(e) =>
                  setInput((s) => ({ ...s, loadProfile: e.target.value as CalculatorInput["loadProfile"] }))
                }
              >
                <option value="day">{t.day}</option>
                <option value="mixed">{t.mixed}</option>
                <option value="evening">{t.evening}</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="ori">{t.orientation}</label>
              <select
                id="ori"
                value={input.orientation}
                onChange={(e) =>
                  setInput((s) => ({ ...s, orientation: e.target.value as CalculatorInput["orientation"] }))
                }
              >
                <option value="south">{t.south}</option>
                <option value="se-sw">{t.sesw}</option>
                <option value="east-west">{t.ew}</option>
                <option value="north">{t.north}</option>
                <option value="unknown">{t.unknown}</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="tilt">{t.tilt}</label>
              <select
                id="tilt"
                value={input.tilt}
                onChange={(e) => setInput((s) => ({ ...s, tilt: e.target.value as CalculatorInput["tilt"] }))}
              >
                <option value="optimal">{t.optimal}</option>
                <option value="low">{t.low}</option>
                <option value="flat">{t.flat}</option>
                <option value="unknown">{t.unknown}</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="shade">{t.shading}</label>
              <select
                id="shade"
                value={input.shading}
                onChange={(e) =>
                  setInput((s) => ({ ...s, shading: e.target.value as CalculatorInput["shading"] }))
                }
              >
                <option value="none">{t.shadeNone}</option>
                <option value="partial">{t.shadePartial}</option>
                <option value="significant">{t.shadeSignificant}</option>
                <option value="unknown">{t.unknown}</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="bat">{t.battery}</label>
              <select
                id="bat"
                value={batteryValue}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v === "unsure") setInput((s) => ({ ...s, batteryKwh: 0, batteryUnsure: true }));
                  else setInput((s) => ({ ...s, batteryKwh: Number(v), batteryUnsure: false }));
                }}
              >
                <option value="0">{t.batteryNone}</option>
                <option value="unsure">{t.batteryUnsure}</option>
                <option value="5">{t.battery5}</option>
                <option value="10">{t.battery10}</option>
                <option value="15">{t.battery15}</option>
              </select>
            </div>
            <fieldset className="choice-row">
              <legend className="meta">{t.extra}</legend>
              <label>
                <input
                  type="checkbox"
                  checked={input.ev}
                  onChange={(e) => setInput((s) => ({ ...s, ev: e.target.checked }))}
                />
                {t.extraEv}
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={input.heatPump}
                  onChange={(e) => setInput((s) => ({ ...s, heatPump: e.target.checked }))}
                />
                {t.extraHp}
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={input.pool}
                  onChange={(e) => setInput((s) => ({ ...s, pool: e.target.checked }))}
                />
                {t.extraPool}
              </label>
            </fieldset>
            <details>
              <summary>{t.importTariff} / {t.exportTariff}</summary>
              <div className="grid-2" style={{ marginTop: "0.75rem" }}>
                <div className="form-field">
                  <label htmlFor="imp">{t.importTariff}</label>
                  <input
                    id="imp"
                    type="number"
                    min={0.05}
                    max={0.5}
                    step="0.01"
                    lang={locale === "en" ? "en" : locale}
                    value={input.importTariff}
                    onChange={(e) => setInput((s) => ({ ...s, importTariff: Number(e.target.value) }))}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="exp">{t.exportTariff}</label>
                  <input
                    id="exp"
                    type="number"
                    min={0}
                    max={0.25}
                    step="0.01"
                    lang={locale === "en" ? "en" : locale}
                    value={input.exportTariff}
                    onChange={(e) => setInput((s) => ({ ...s, exportTariff: Number(e.target.value) }))}
                  />
                </div>
              </div>
            </details>
          </div>
        </details>
        {errors.map((err) => (
          <p className="error" key={err} role="alert">
            {err}
          </p>
        ))}
      </form>

      <div className="card calc-result stack">
        <div className="kpis">
          <div className="kpi">
            <span className="meta">{t.resultKwp}</span>
            <b>{number(result.recommendedKwp, locale, 2)} kWp</b>
          </div>
          <div className="kpi">
            <span className="meta">{t.resultPanels}</span>
            <b>
              {result.panelCount} × {result.panelWatts} W
            </b>
          </div>
          <div className="kpi">
            <span className="meta">{t.resultGen}</span>
            <b>{number(result.annualGeneration, locale)} kWh</b>
          </div>
        </div>
        <p>
          <strong>{t.resultPrice}:</strong> {money(result.priceLow, locale)}–{money(result.priceHigh, locale)}
        </p>
        <p>
          <strong>{t.resultSelf}:</strong> {number(result.selfConsumptionKwh, locale)} kWh
        </p>
        <p>
          <strong>{t.resultGenShare}:</strong> {pct(result.generationSelfUse, locale)}
        </p>
        <p>
          <strong>{t.resultHomeCover}:</strong> {pct(result.homeCoverage, locale)}
        </p>
        <p>
          <strong>{t.resultExport}:</strong> {number(result.exportedKwh, locale)} kWh
        </p>
        <p>
          <strong>{t.resultSave}:</strong> {money(result.annualSavings, locale)}
        </p>
        <p className="notice">
          {t.saveImport} {money(result.savingsBreakdown.importSavings, locale)} · {t.saveExport}{" "}
          {money(result.savingsBreakdown.exportIncome, locale)} · {t.saveUpkeep}{" "}
          {money(result.savingsBreakdown.maintenance, locale)}
        </p>
        <p>
          <strong>{t.resultPayback}:</strong>{" "}
          {result.paybackLow && result.paybackHigh
            ? `${number(result.paybackLow, locale, 1)}–${number(result.paybackHigh, locale, 1)} ${locale === "es" ? "años" : locale === "ru" ? "лет" : "years"}`
            : "—"}
        </p>
        <p>
          <strong>{t.resultAccuracy}:</strong>{" "}
          {result.confidence === "high"
            ? t.confidenceHigh
            : result.confidence === "medium"
              ? t.confidenceMedium
              : t.confidenceLow}
        </p>
        <figure className="chart">
          <figcaption className="meta">{t.chartCaption}</figcaption>
          <div className="bars" aria-hidden="true">
            {result.monthlyGeneration.map((value, i) => (
              <div className="bar-row" key={months[locale][i]}>
                <span>{months[locale][i]}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${(value / maxBar) * 100}%` }} />
                </div>
                <span>{number(value, locale)}</span>
              </div>
            ))}
          </div>
        </figure>
        <details>
          <summary>{t.methodology}</summary>
          <ul className="prose" style={{ marginTop: "0.75rem" }}>
            {result.assumptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>
              {t.updated} {CALCULATION_MODEL.updatedAt} · {result.modelVersion} · {result.estimateId}
            </li>
          </ul>
        </details>
        <p className="notice">
          {t.ivaIncluded} {t.surveyNeeded}
        </p>
        <LeadBox locale={locale} wa={wa} municipality={input.municipality} />
      </div>
    </div>
  );
}

function LeadBox({
  locale,
  wa,
  municipality,
}: {
  locale: Locale;
  wa: string;
  municipality: string;
}) {
  const t = ui[locale];
  const [status, setStatus] = useState("");
  const [pref, setPref] = useState<"whatsapp" | "phone">("whatsapp");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    if (name.length < 2 || !PHONE_RE.test(phone)) {
      setStatus(t.phoneInvalid);
      return;
    }
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
    track("solar_calc_whatsapp_click", { locale, area: municipality });
    window.location.href = whatsappHref(message);
    setStatus(t.leadOk);
  }

  return (
    <form className="stack" onSubmit={onSubmit}>
      <h3>{t.submitLead}</h3>
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
          <input
            type="radio"
            name="pref"
            checked={pref === "whatsapp"}
            onChange={() => setPref("whatsapp")}
          />
          {t.prefWhatsapp}
        </label>
        <label>
          <input type="radio" name="pref" checked={pref === "phone"} onChange={() => setPref("phone")} />
          {t.prefPhone}
        </label>
      </fieldset>
      <div className="form-field">
        <label htmlFor="msg">{t.message}</label>
        <textarea id="msg" name="message" />
      </div>
      <label className="notice">
        <input type="checkbox" name="consent" required /> {t.consent}{" "}
        <Link href={getPath({ kind: "privacy", locale })}>{t.privacyLink}</Link>.
      </label>
      <div className="cta-row">
        <button className="btn btn-primary" type="submit">
          {t.submitLead}
        </button>
        <a
          className="btn btn-secondary"
          href={wa}
          onClick={() => track("solar_calc_whatsapp_click", { locale, area: municipality })}
        >
          {t.whatsappPrefill}
        </a>
      </div>
      {status ? <p className="notice">{status}</p> : null}
    </form>
  );
}
