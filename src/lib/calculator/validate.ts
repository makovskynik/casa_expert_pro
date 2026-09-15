import { z } from "zod";

export const calculatorInputSchema = z.object({
  municipality: z.enum([
    "alicante",
    "torrevieja",
    "orihuela-costa",
    "benidorm",
    "gran-alacant",
    "other-costa-blanca",
  ]),
  annualKwh: z.number().positive().max(80000).optional(),
  monthlyBillEur: z.number().positive().max(5000).optional(),
  importTariff: z.number().min(0.05).max(0.6),
  exportTariff: z.number().min(0).max(0.3),
  propertyType: z.enum(["house", "apartment", "commercial"]),
  loadProfile: z.enum(["day", "evening", "mixed"]),
  roofM2: z.number().positive().max(600).optional(),
  orientation: z.enum(["south", "se-sw", "east-west", "north", "unknown"]),
  tilt: z.enum(["flat", "low", "optimal", "unknown"]),
  shading: z.enum(["none", "partial", "significant", "unknown"]),
  batteryKwh: z.number().min(0).max(40),
  batteryUnsure: z.boolean().optional(),
  ev: z.boolean(),
  heatPump: z.boolean(),
  pool: z.boolean(),
});
