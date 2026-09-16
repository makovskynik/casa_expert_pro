import { LeadForm } from "@/components/calculator/LeadForm";
import { months, towns, ui } from "@/content/ui";
import { CALCULATION_MODEL } from "@/lib/calculator/assumptions";
import { calculate } from "@/lib/calculator/model";
import type { CalculatorInput } from "@/lib/calculator/types";
import { whatsappHref } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/config";
import { getPath, withSlash } from "@/lib/i18n/routing";

const TOTAL_STEPS = 3;

const municipalities = [
  "alicante",
  "torrevieja",
  "orihuela-costa",
  "benidorm",
  "gran-alacant",
  "other-costa-blanca",
] as const;

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

function yearsLabel(locale: Locale) {
  return locale === "es" ? "años" : locale === "ru" ? "лет" : "years";
}

function stepProgress(template: string, n: number, total: number) {
  return template.replace("{n}", String(n)).replace("{total}", String(total));
}

function isMunicipality(v: string): v is CalculatorInput["municipality"] {
  return (municipalities as readonly string[]).includes(v);
}

function one(sp: Record<string, string | string[] | undefined>, key: string) {
  const v = sp[key];
  return Array.isArray(v) ? v[0] : v;
}

function parseStep(sp: Record<string, string | string[] | undefined>): 1 | 2 | 3 {
  const s = one(sp, "step");
  if (s === "2") return 2;
  if (s === "3") return 3;
  return 1;
}

function inputFromParams(sp: Record<string, string | string[] | undefined>) {
  const muni = one(sp, "muni") || "torrevieja";
  const mode = one(sp, "mode") === "bill" ? "bill" : "kwh";
  const bill = Number(one(sp, "bill") || 90);
  const roofUnknown = one(sp, "roof_unknown") === "1" || one(sp, "roof_unknown") === "on";
  const batteryRaw = one(sp, "battery") || "0";

  return {
    mode: mode as "kwh" | "bill",
    bill: Number.isFinite(bill) ? bill : 90,
    roofUnknown,
    input: {
      municipality: isMunicipality(muni) ? muni : "torrevieja",
      annualKwh: mode === "kwh" ? Number(one(sp, "kwh") || 5000) || 5000 : undefined,
      monthlyBillEur: mode === "bill" ? (Number.isFinite(bill) ? bill : 90) : undefined,
      importTariff: 0.18,
      exportTariff: 0.06,
      propertyType: (one(sp, "prop") as CalculatorInput["propertyType"]) || "house",
      loadProfile: (one(sp, "profile") as CalculatorInput["loadProfile"]) || "mixed",
      roofM2: roofUnknown ? undefined : Number(one(sp, "roof") || 40) || 40,
      orientation: (one(sp, "ori") as CalculatorInput["orientation"]) || "south",
      tilt: (one(sp, "tilt") as CalculatorInput["tilt"]) || "optimal",
      shading: (one(sp, "shade") as CalculatorInput["shading"]) || "none",
      batteryKwh: batteryRaw === "unsure" ? 0 : Number(batteryRaw) || 0,
      batteryUnsure: batteryRaw === "unsure",
      ev: one(sp, "ev") === "1" || one(sp, "ev") === "on",
      heatPump: one(sp, "hp") === "1" || one(sp, "hp") === "on",
      pool: one(sp, "pool") === "1" || one(sp, "pool") === "on",
    } satisfies CalculatorInput,
  };
}

function buildQuery(
  step: 2 | 3,
  values: {
    muni: string;
    mode: string;
    kwh: string;
    bill: string;
    roof: string;
    roofUnknown: boolean;
    prop: string;
    profile: string;
    ori: string;
    tilt: string;
    shade: string;
    battery: string;
    ev: boolean;
    hp: boolean;
    pool: boolean;
  },
) {
  const q = new URLSearchParams();
  q.set("step", String(step));
  q.set("muni", values.muni);
  q.set("mode", values.mode);
  if (values.mode === "kwh") q.set("kwh", values.kwh);
  else q.set("bill", values.bill);
  if (values.roofUnknown) q.set("roof_unknown", "1");
  else q.set("roof", values.roof);
  q.set("prop", values.prop);
  q.set("profile", values.profile);
  q.set("ori", values.ori);
  q.set("tilt", values.tilt);
  q.set("shade", values.shade);
  q.set("battery", values.battery);
  if (values.ev) q.set("ev", "1");
  if (values.hp) q.set("hp", "1");
  if (values.pool) q.set("pool", "1");
  return q.toString();
}

export function Calculator({
  locale,
  searchParams = {},
}: {
  locale: Locale;
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const t = ui[locale];
  const step = parseStep(searchParams);
  const { input, mode, bill, roofUnknown } = inputFromParams(searchParams);
  const formAction = withSlash(getPath({ kind: "calculator", locale }));
  const editHref = formAction;

  const result = calculate({
    ...input,
    annualKwh: mode === "kwh" ? input.annualKwh : undefined,
    monthlyBillEur: mode === "bill" ? bill : undefined,
    roofM2: roofUnknown ? undefined : input.roofM2,
  });

  const townLabel = towns[input.municipality][locale];
  const batteryValue = input.batteryUnsure ? "unsure" : String(input.batteryKwh);
  const queryValues = {
    muni: input.municipality,
    mode,
    kwh: String(input.annualKwh ?? 5000),
    bill: String(bill),
    roof: String(input.roofM2 ?? 40),
    roofUnknown,
    prop: input.propertyType,
    profile: input.loadProfile,
    ori: input.orientation,
    tilt: input.tilt,
    shade: input.shading,
    battery: batteryValue,
    ev: input.ev,
    hp: input.heatPump,
    pool: input.pool,
  };
  const resultsHref = `${formAction}?${buildQuery(2, queryValues)}`;
  const visitHref = `${formAction}?${buildQuery(3, queryValues)}`;
  const wa = whatsappHref(
    [
      `Casa Expert ${t.calcTitle} ${result.estimateId}`,
      townLabel,
      `${result.recommendedKwp} kWp · ${result.panelCount} × ${result.panelWatts} W`,
      `${number(result.annualGeneration, locale)} kWh/year`,
      `${money(result.priceLow, locale)}–${money(result.priceHigh, locale)} IVA`,
      mode === "kwh" ? `${input.annualKwh} kWh` : `€${bill}/month`,
      roofUnknown ? t.unknown : `${input.roofM2} m²`,
      locale,
    ].join("\n"),
  );
  const maxBar = Math.max(...result.monthlyGeneration, 1);
  const stepTitles = [t.calcStep1Title, t.calcStep3Title, t.calcStep4Title];

  return (
    <div className="calc-wizard" id="calc-wizard" data-step={step}>
      <div className="calc-progress" aria-live="polite">
        <div className="calc-progress-meta">
          <span>{stepProgress(t.calcStepProgress, step, TOTAL_STEPS)}</span>
          <strong>{stepTitles[step - 1]}</strong>
        </div>
        <div className="calc-progress-track" aria-hidden="true">
          <div className="calc-progress-fill" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
        </div>
      </div>

      {step === 1 ? (
        <form className="calc-panel form-grid" method="get" action={formAction}>
          <input type="hidden" name="step" value="2" />
          <div className="form-field">
            <label htmlFor="muni">{t.municipality}</label>
            <select id="muni" name="muni" defaultValue={input.municipality}>
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
              <input type="radio" name="mode" value="kwh" defaultChecked={mode === "kwh"} />
              {t.knowKwh}
            </label>
            <label>
              <input type="radio" name="mode" value="bill" defaultChecked={mode === "bill"} />
              {t.knowBill}
            </label>
          </fieldset>
          <div className="form-field calc-kwh-field">
            <label htmlFor="kwh">{t.consumption}</label>
            <input
              id="kwh"
              name="kwh"
              type="number"
              min={500}
              max={40000}
              step={100}
              inputMode="numeric"
              defaultValue={input.annualKwh ?? 5000}
            />
          </div>
          <div className="form-field calc-bill-field">
            <label htmlFor="bill">{t.bill}</label>
            <input
              id="bill"
              name="bill"
              type="number"
              min={20}
              max={800}
              step={1}
              inputMode="decimal"
              defaultValue={bill}
            />
          </div>
          <div className="form-field">
            <label htmlFor="roof">{t.roof}</label>
            <input
              id="roof"
              name="roof"
              type="number"
              min={4}
              max={400}
              defaultValue={input.roofM2 ?? 40}
            />
            <label className="notice">
              <input type="checkbox" name="roof_unknown" value="1" defaultChecked={roofUnknown} />{" "}
              {t.unknown}
            </label>
          </div>
          <details className="advanced">
            <summary>{t.advanced}</summary>
            <div className="form-grid calc-advanced">
              <div className="form-field">
                <label htmlFor="prop">{t.property}</label>
                <select id="prop" name="prop" defaultValue={input.propertyType}>
                  <option value="house">{t.house}</option>
                  <option value="apartment">{t.apartment}</option>
                  <option value="commercial">{t.commercial}</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="profile">{t.profile}</label>
                <select id="profile" name="profile" defaultValue={input.loadProfile}>
                  <option value="day">{t.day}</option>
                  <option value="mixed">{t.mixed}</option>
                  <option value="evening">{t.evening}</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="ori">{t.orientation}</label>
                <select id="ori" name="ori" defaultValue={input.orientation}>
                  <option value="south">{t.south}</option>
                  <option value="se-sw">{t.sesw}</option>
                  <option value="east-west">{t.ew}</option>
                  <option value="north">{t.north}</option>
                  <option value="unknown">{t.unknown}</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="tilt">{t.tilt}</label>
                <select id="tilt" name="tilt" defaultValue={input.tilt}>
                  <option value="optimal">{t.optimal}</option>
                  <option value="low">{t.low}</option>
                  <option value="flat">{t.flat}</option>
                  <option value="unknown">{t.unknown}</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="shade">{t.shading}</label>
                <select id="shade" name="shade" defaultValue={input.shading}>
                  <option value="none">{t.shadeNone}</option>
                  <option value="partial">{t.shadePartial}</option>
                  <option value="significant">{t.shadeSignificant}</option>
                  <option value="unknown">{t.unknown}</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="bat">{t.battery}</label>
                <select id="bat" name="battery" defaultValue={batteryValue}>
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
                  <input type="checkbox" name="ev" value="1" defaultChecked={input.ev} />
                  {t.extraEv}
                </label>
                <label>
                  <input type="checkbox" name="hp" value="1" defaultChecked={input.heatPump} />
                  {t.extraHp}
                </label>
                <label>
                  <input type="checkbox" name="pool" value="1" defaultChecked={input.pool} />
                  {t.extraPool}
                </label>
              </fieldset>
            </div>
          </details>
          <div className="calc-nav">
            <button type="submit" className="btn btn-primary">
              {t.calcShowResults}
            </button>
          </div>
        </form>
      ) : null}

      {step === 2 ? (
        <section className="calc-panel calc-result-panel">
          <div className="calc-result-hero">
            <p className="calc-result-price">
              {money(result.priceLow, locale)}–{money(result.priceHigh, locale)}
            </p>
            <p className="muted">{t.resultPrice}</p>
          </div>
          <div className="kpis calc-kpis">
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
              <span className="meta">{t.resultSave}</span>
              <b>{money(result.annualSavings, locale)}</b>
            </div>
          </div>
          <dl className="calc-metrics">
            <div>
              <dt>{t.resultGen}</dt>
              <dd>{number(result.annualGeneration, locale)} kWh</dd>
            </div>
            <div>
              <dt>{t.resultPayback}</dt>
              <dd>
                {result.paybackLow && result.paybackHigh
                  ? `${number(result.paybackLow, locale, 1)}–${number(result.paybackHigh, locale, 1)} ${yearsLabel(locale)}`
                  : "—"}
              </dd>
            </div>
            <div>
              <dt>{t.resultHomeCover}</dt>
              <dd>{pct(result.homeCoverage, locale)}</dd>
            </div>
            <div>
              <dt>{t.resultGenShare}</dt>
              <dd>{pct(result.generationSelfUse, locale)}</dd>
            </div>
            <div>
              <dt>{t.resultSelf}</dt>
              <dd>{number(result.selfConsumptionKwh, locale)} kWh</dd>
            </div>
            <div>
              <dt>{t.resultExport}</dt>
              <dd>{number(result.exportedKwh, locale)} kWh</dd>
            </div>
          </dl>
          <p className="notice">
            {t.resultAccuracy}:{" "}
            {result.confidence === "high"
              ? t.confidenceHigh
              : result.confidence === "medium"
                ? t.confidenceMedium
                : t.confidenceLow}
          </p>
          <details className="calc-fold">
            <summary>{t.chartCaption}</summary>
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
          </details>
          <details className="calc-fold">
            <summary>{t.methodology}</summary>
            <ul className="prose calc-assumptions">
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
          <div className="calc-nav">
            <a className="btn btn-secondary" href={editHref}>
              {t.calcEditInputs}
            </a>
            <a className="btn btn-primary" href={visitHref}>
              {t.calcRequestVisit}
            </a>
            <a className="btn btn-ghost" href={wa}>
              {t.whatsappPrefill}
            </a>
          </div>
        </section>
      ) : null}

      {step === 3 ? (
        <section className="calc-panel">
          <p className="calc-summary-chip">
            <strong>
              {number(result.recommendedKwp, locale, 2)} kWp · {money(result.priceLow, locale)}–
              {money(result.priceHigh, locale)}
            </strong>
            <span>
              {townLabel} · {result.panelCount} × {result.panelWatts} W
            </span>
          </p>
          <LeadForm locale={locale} wa={wa} onBackHref={resultsHref} />
        </section>
      ) : null}
    </div>
  );
}
