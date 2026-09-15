import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  message: z.string().trim().max(1000).optional().default(""),
  locale: z.enum(["en", "es", "ru"]),
  municipality: z.string().max(40).optional(),
  calculator: z.record(z.string(), z.unknown()).optional(),
  consent: z.literal(true),
  company_website: z.string().max(0).optional(),
  startedAt: z.number().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
