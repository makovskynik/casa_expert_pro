export const CALCULATION_MODEL = {
  version: "2026.09.2",
  updatedAt: "2026-09-15",
  currency: "EUR",
  vatIncluded: true,
  sourceNote:
    "Specific yield is a static table for Costa Blanca municipalities, derived from typical PVGIS values and reviewed for this coast.",
} as const;

export const PANEL_WATTS = 450;
export const PANEL_M2 = 2.2;
export const SYSTEM_LOSS_NOTE = "14% typical system losses already reflected in specific yield";

export const DEFAULT_IMPORT_TARIFF = 0.18;
export const DEFAULT_EXPORT_TARIFF = 0.06;
export const ANNUAL_MAINTENANCE_PER_KWP = 18;

export const EXTRA_LOAD_FACTOR = {
  ev: 0.12,
  heatPump: 0.1,
  pool: 0.08,
} as const;

export type Municipality =
  | "alicante"
  | "torrevieja"
  | "orihuela-costa"
  | "benidorm"
  | "gran-alacant"
  | "other-costa-blanca";

export type Orientation = "south" | "se-sw" | "east-west" | "north" | "unknown";
export type TiltBand = "flat" | "low" | "optimal" | "unknown";
export type Shading = "none" | "partial" | "significant" | "unknown";
export type LoadProfile = "day" | "evening" | "mixed";
export type PropertyType = "house" | "apartment" | "commercial";

/** kWh / kWp / year at south, ~35° tilt, after typical system losses. */
export const SOLAR_YIELD_BY_AREA: Record<Municipality, number> = {
  alicante: 1660,
  torrevieja: 1720,
  "orihuela-costa": 1705,
  benidorm: 1630,
  "gran-alacant": 1690,
  "other-costa-blanca": 1670,
};

export const MONTHLY_FRACTION = [
  0.062, 0.07, 0.085, 0.092, 0.105, 0.112, 0.118, 0.11, 0.09, 0.075, 0.06, 0.056,
] as const;

export const ORIENTATION_FACTOR: Record<Orientation, number> = {
  south: 1,
  "se-sw": 0.95,
  "east-west": 0.85,
  north: 0.65,
  unknown: 0.93,
};

export const TILT_FACTOR: Record<TiltBand, number> = {
  optimal: 1,
  low: 0.96,
  flat: 0.9,
  unknown: 0.95,
};

export const SHADING_FACTOR: Record<Shading, number> = {
  none: 1,
  partial: 0.88,
  significant: 0.72,
  unknown: 0.92,
};

export const SELF_CONSUMPTION: Record<
  LoadProfile,
  { noBattery: number; battery: number }
> = {
  day: { noBattery: 0.55, battery: 0.78 },
  mixed: { noBattery: 0.4, battery: 0.72 },
  evening: { noBattery: 0.28, battery: 0.7 },
};

export const PRICE_MATRIX = {
  perKwp: [
    { minKwp: 0, maxKwp: 4.49, low: 1650, high: 2100 },
    { minKwp: 4.5, maxKwp: 6.99, low: 1400, high: 1800 },
    { minKwp: 7, maxKwp: 20, low: 1250, high: 1600 },
  ],
  complexRoofUplift: 0.15,
  batteryPerKwh: { low: 650, high: 900 },
  legalizationIncluded: true,
  ivaRate: 0.21,
} as const;
