import {
  ANNUAL_MAINTENANCE_PER_KWP,
  CALCULATION_MODEL,
  DEFAULT_EXPORT_TARIFF,
  DEFAULT_IMPORT_TARIFF,
  EXTRA_LOAD_FACTOR,
  MONTHLY_FRACTION,
  ORIENTATION_FACTOR,
  PANEL_M2,
  PANEL_WATTS,
  PRICE_MATRIX,
  SELF_CONSUMPTION,
  SHADING_FACTOR,
  SOLAR_YIELD_BY_AREA,
  TILT_FACTOR,
} from "./assumptions";
import type { CalculatorInput, CalculatorResult, SavingsBreakdown } from "./types";

export function consumptionFromBill(monthlyEur: number, importTariff: number): number {
  if (importTariff <= 0) {
    throw new Error("Import tariff must be positive");
  }
  return (monthlyEur / importTariff) * 12;
}

export function roofPanelLimit(roofM2: number): number {
  return Math.max(1, Math.floor(roofM2 / PANEL_M2));
}

export function roofCapacityKwp(roofM2: number): number {
  return kwpFromPanels(roofPanelLimit(roofM2));
}

export function kwpFromPanels(panels: number): number {
  return Math.round((panels * PANEL_WATTS) / 10) / 100;
}

export function extraLoadFactor(input: Pick<CalculatorInput, "ev" | "heatPump" | "pool">): number {
  return (
    1 +
    (input.ev ? EXTRA_LOAD_FACTOR.ev : 0) +
    (input.heatPump ? EXTRA_LOAD_FACTOR.heatPump : 0) +
    (input.pool ? EXTRA_LOAD_FACTOR.pool : 0)
  );
}

export function specificYield(
  input: Pick<CalculatorInput, "municipality" | "orientation" | "tilt" | "shading">,
): number {
  return (
    SOLAR_YIELD_BY_AREA[input.municipality] *
    ORIENTATION_FACTOR[input.orientation] *
    TILT_FACTOR[input.tilt] *
    SHADING_FACTOR[input.shading]
  );
}

export function sizeSystem(targetKwp: number, roofM2?: number): { panelCount: number; recommendedKwp: number } {
  const uncapped = Math.max(1, Math.ceil((targetKwp * 1000) / PANEL_WATTS));
  const panelCount = roofM2 ? Math.min(uncapped, roofPanelLimit(roofM2)) : uncapped;
  return { panelCount: Math.max(1, panelCount), recommendedKwp: kwpFromPanels(Math.max(1, panelCount)) };
}

export function savingsBreakdown(
  selfConsumed: number,
  exported: number,
  importTariff: number,
  exportTariff: number,
  kwp: number,
): SavingsBreakdown {
  const importSavings = selfConsumed * importTariff;
  const exportIncome = exported * exportTariff;
  const maintenance = kwp * ANNUAL_MAINTENANCE_PER_KWP;
  return {
    importSavings,
    exportIncome,
    maintenance,
    total: importSavings + exportIncome - maintenance,
  };
}

function selfUse(generation: number, consumption: number, fraction: number): number {
  return Math.min(generation * fraction, consumption, generation);
}

function pricePerKwp(kwp: number): { low: number; high: number } {
  const row =
    PRICE_MATRIX.perKwp.find((item) => kwp >= item.minKwp && kwp <= item.maxKwp) ??
    PRICE_MATRIX.perKwp[PRICE_MATRIX.perKwp.length - 1];
  return { low: row.low, high: row.high };
}

function systemPrice(kwp: number, batteryKwh: number, complexRoof: boolean) {
  const { low, high } = pricePerKwp(kwp);
  const roof = complexRoof ? 1 + PRICE_MATRIX.complexRoofUplift : 1;
  const batteryLow = batteryKwh * PRICE_MATRIX.batteryPerKwh.low;
  const batteryHigh = batteryKwh * PRICE_MATRIX.batteryPerKwh.high;
  return {
    low: Math.round(kwp * low * roof + batteryLow),
    high: Math.round(kwp * high * roof + batteryHigh),
  };
}

function payback(cost: number, annual: number): number | null {
  if (annual <= 0) return null;
  return Math.round((cost / annual) * 10) / 10;
}

export function makeEstimateId(parts: string[]): string {
  const raw = parts.join("|");
  let hash = 0;
  for (let i = 0; i < raw.length; i += 1) {
    hash = (hash * 31 + raw.charCodeAt(i)) >>> 0;
  }
  return `CE-${hash.toString(36).slice(0, 8).toUpperCase()}`;
}

export function calculate(raw: CalculatorInput): CalculatorResult {
  const importTariff = raw.importTariff || DEFAULT_IMPORT_TARIFF;
  const exportTariff = raw.exportTariff ?? DEFAULT_EXPORT_TARIFF;
  const consumption =
    raw.annualKwh ??
    (raw.monthlyBillEur ? consumptionFromBill(raw.monthlyBillEur, importTariff) : 4500);
  const yieldKwh = specificYield(raw);
  const target = (consumption * extraLoadFactor(raw)) / yieldKwh;
  const { panelCount, recommendedKwp } = sizeSystem(target, raw.roofM2);
  const annualGeneration = Math.round(recommendedKwp * yieldKwh);
  const monthlyGeneration = MONTHLY_FRACTION.map((part) => Math.round(annualGeneration * part));
  const fraction = SELF_CONSUMPTION[raw.loadProfile];
  const withBattery = raw.batteryKwh > 0;
  const selfFraction = withBattery ? fraction.battery : fraction.noBattery;
  const selfConsumptionKwh = Math.round(selfUse(annualGeneration, consumption, selfFraction));
  const exportedKwh = Math.max(0, annualGeneration - selfConsumptionKwh);
  const homeCoverage = consumption > 0 ? selfConsumptionKwh / consumption : 0;
  const generationSelfUse = annualGeneration > 0 ? selfConsumptionKwh / annualGeneration : 0;
  const complexRoof = raw.orientation === "north" || raw.shading === "significant";
  const price = systemPrice(recommendedKwp, raw.batteryKwh, complexRoof);
  const breakdown = savingsBreakdown(
    selfConsumptionKwh,
    exportedKwh,
    importTariff,
    exportTariff,
    recommendedKwp,
  );
  const annualSavings = Math.round(breakdown.total);

  const batterySelf = Math.round(selfUse(annualGeneration, consumption, fraction.battery));
  const batteryExport = Math.max(0, annualGeneration - batterySelf);
  const batteryPrice = systemPrice(recommendedKwp, Math.max(raw.batteryKwh, 5), complexRoof);
  const batterySavings = Math.round(
    savingsBreakdown(batterySelf, batteryExport, importTariff, exportTariff, recommendedKwp).total,
  );

  const unknownBits = [
    raw.annualKwh ? null : "consumption",
    raw.roofM2 ? null : "roof",
    raw.orientation === "unknown" ? "orientation" : null,
    raw.tilt === "unknown" ? "tilt" : null,
    raw.shading === "unknown" ? "shading" : null,
    raw.batteryUnsure ? "battery" : null,
  ].filter(Boolean);
  const confidence = unknownBits.length >= 3 ? "low" : unknownBits.length ? "medium" : "high";

  return {
    modelVersion: CALCULATION_MODEL.version,
    updatedAt: CALCULATION_MODEL.updatedAt,
    vatIncluded: CALCULATION_MODEL.vatIncluded,
    specificYield: Math.round(yieldKwh),
    recommendedKwp,
    panelCount,
    panelWatts: PANEL_WATTS,
    annualGeneration,
    monthlyGeneration,
    selfConsumptionKwh,
    exportedKwh,
    homeCoverage,
    generationSelfUse,
    priceLow: price.low,
    priceHigh: price.high,
    annualSavings,
    savingsBreakdown: {
      importSavings: Math.round(breakdown.importSavings),
      exportIncome: Math.round(breakdown.exportIncome),
      maintenance: Math.round(breakdown.maintenance),
      total: annualSavings,
    },
    paybackLow: payback(price.low, annualSavings),
    paybackHigh: payback(price.high, annualSavings),
    estimateId: makeEstimateId([
      raw.municipality,
      String(consumption),
      String(recommendedKwp),
      String(panelCount),
    ]),
    batteryComparison: {
      selfConsumptionKwh: batterySelf,
      annualSavings: batterySavings,
      priceLow: batteryPrice.low,
      priceHigh: batteryPrice.high,
    },
    confidence,
    assumptions: [
      CALCULATION_MODEL.sourceNote,
      `Each panel is ${PANEL_WATTS} W. System size is panel count × ${PANEL_WATTS} W.`,
      `Annual saving = energy used on site × import tariff + exported energy × export tariff − estimated upkeep (€${ANNUAL_MAINTENANCE_PER_KWP}/kWp).`,
      `Self-use share of generation is how much of the solar output is used in the home. Home coverage is how much of household consumption that on-site use covers.`,
      `Price range includes IVA at ${Math.round(PRICE_MATRIX.ivaRate * 100)}%. Subsidies are not deducted.`,
      `The figure is indicative until a site survey.`,
    ],
  };
}
