import type {
  LoadProfile,
  Municipality,
  Orientation,
  PropertyType,
  Shading,
  TiltBand,
} from "./assumptions";

export type CalculatorInput = {
  municipality: Municipality;
  annualKwh?: number;
  monthlyBillEur?: number;
  importTariff: number;
  exportTariff: number;
  propertyType: PropertyType;
  loadProfile: LoadProfile;
  roofM2?: number;
  orientation: Orientation;
  tilt: TiltBand;
  shading: Shading;
  batteryKwh: number;
  batteryUnsure?: boolean;
  ev: boolean;
  heatPump: boolean;
  pool: boolean;
};

export type SavingsBreakdown = {
  importSavings: number;
  exportIncome: number;
  maintenance: number;
  total: number;
};

export type CalculatorResult = {
  modelVersion: string;
  updatedAt: string;
  vatIncluded: boolean;
  specificYield: number;
  recommendedKwp: number;
  panelCount: number;
  panelWatts: number;
  annualGeneration: number;
  monthlyGeneration: number[];
  selfConsumptionKwh: number;
  exportedKwh: number;
  homeCoverage: number;
  generationSelfUse: number;
  priceLow: number;
  priceHigh: number;
  annualSavings: number;
  savingsBreakdown: SavingsBreakdown;
  paybackLow: number | null;
  paybackHigh: number | null;
  estimateId: string;
  batteryComparison?: {
    selfConsumptionKwh: number;
    annualSavings: number;
    priceLow: number;
    priceHigh: number;
  };
  confidence: "high" | "medium" | "low";
  assumptions: string[];
};
