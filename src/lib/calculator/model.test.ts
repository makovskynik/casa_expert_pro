import { describe, expect, it } from "vitest";
import {
  calculate,
  consumptionFromBill,
  extraLoadFactor,
  kwpFromPanels,
  roofCapacityKwp,
  savingsBreakdown,
  sizeSystem,
  specificYield,
} from "./model";
import { ANNUAL_MAINTENANCE_PER_KWP, ORIENTATION_FACTOR, PANEL_WATTS, SOLAR_YIELD_BY_AREA } from "./assumptions";

const base = {
  municipality: "torrevieja" as const,
  annualKwh: 5000,
  importTariff: 0.18,
  exportTariff: 0.06,
  propertyType: "house" as const,
  loadProfile: "mixed" as const,
  roofM2: 40,
  orientation: "south" as const,
  tilt: "optimal" as const,
  shading: "none" as const,
  batteryKwh: 0,
  ev: false,
  heatPump: false,
  pool: false,
};

describe("solar calculator", () => {
  it("derives annual kWh from a monthly bill", () => {
    expect(consumptionFromBill(90, 0.18)).toBe(6000);
  });

  it("keeps kWp equal to panel count times panel watts", () => {
    expect(PANEL_WATTS).toBe(450);
    expect(kwpFromPanels(7)).toBe(3.15);
    expect(7 * 450).toBe(3150);
  });

  it("sizes 5,000 kWh in Torrevieja to 7 × 450 W = 3.15 kWp", () => {
    const result = calculate(base);
    expect(result.panelCount).toBe(7);
    expect(result.recommendedKwp).toBe(3.15);
    expect(result.panelWatts).toBe(450);
    expect(result.recommendedKwp).toBeCloseTo((result.panelCount * result.panelWatts) / 1000);
  });

  it("explains annual saving from import, export and upkeep", () => {
    const result = calculate(base);
    const parts = savingsBreakdown(
      result.selfConsumptionKwh,
      result.exportedKwh,
      0.18,
      0.06,
      result.recommendedKwp,
    );
    expect(Math.round(parts.total)).toBe(result.annualSavings);
    expect(parts.importSavings).toBeCloseTo(result.selfConsumptionKwh * 0.18);
    expect(parts.exportIncome).toBeCloseTo(result.exportedKwh * 0.06);
    expect(parts.maintenance).toBeCloseTo(result.recommendedKwp * ANNUAL_MAINTENANCE_PER_KWP);
    expect(result.selfConsumptionKwh + result.exportedKwh).toBe(result.annualGeneration);
  });

  it("separates home coverage from share of generation used on site", () => {
    const result = calculate(base);
    expect(result.homeCoverage).toBeCloseTo(result.selfConsumptionKwh / 5000);
    expect(result.generationSelfUse).toBeCloseTo(result.selfConsumptionKwh / result.annualGeneration);
    expect(result.homeCoverage).not.toBe(result.generationSelfUse);
  });

  it("reduces yield for east-west vs south", () => {
    const south = specificYield({
      municipality: "alicante",
      orientation: "south",
      tilt: "optimal",
      shading: "none",
    });
    const east = specificYield({
      municipality: "alicante",
      orientation: "east-west",
      tilt: "optimal",
      shading: "none",
    });
    expect(south).toBe(SOLAR_YIELD_BY_AREA.alicante);
    expect(east / south).toBeCloseTo(ORIENTATION_FACTOR["east-west"]);
  });

  it("caps panels by roof area", () => {
    const result = calculate({ ...base, annualKwh: 20000, roofM2: 9 });
    expect(result.panelCount).toBeLessThanOrEqual(Math.floor(9 / 2.2));
    expect(result.recommendedKwp).toBe(kwpFromPanels(result.panelCount));
    expect(result.recommendedKwp).toBeLessThanOrEqual(roofCapacityKwp(9) + 0.001);
  });

  it("raises target size when EV, heat pump or pool is planned", () => {
    expect(extraLoadFactor({ ev: true, heatPump: false, pool: false })).toBeCloseTo(1.12);
    const none = calculate(base);
    const ev = calculate({ ...base, ev: true });
    expect(ev.recommendedKwp).toBeGreaterThanOrEqual(none.recommendedKwp);
  });

  it("improves self-consumption when a battery is added", () => {
    const none = calculate(base);
    const withBattery = calculate({ ...base, batteryKwh: 5 });
    expect(withBattery.selfConsumptionKwh).toBeGreaterThan(none.selfConsumptionKwh);
    expect(withBattery.priceLow).toBeGreaterThan(none.priceLow);
  });

  it("handles unknown consumption via bill estimate", () => {
    const result = calculate({
      ...base,
      annualKwh: undefined,
      monthlyBillEur: 75,
    });
    expect(result.confidence).not.toBe("high");
    expect(result.recommendedKwp).toBeGreaterThan(1);
  });

  it("returns a result without requiring a phone number", () => {
    const result = calculate(base);
    expect(result.priceLow).toBeLessThan(result.priceHigh);
    expect(result.vatIncluded).toBe(true);
    expect(result.estimateId.startsWith("CE-")).toBe(true);
  });

  it("never splits kWp away from whole panels", () => {
    const sized = sizeSystem(2.9, 40);
    expect(sized.panelCount).toBe(7);
    expect(sized.recommendedKwp).toBe(3.15);
  });
});
