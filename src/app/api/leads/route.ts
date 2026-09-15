import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/leads/schema";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  if (origin && site && !origin.startsWith(site) && !origin.includes("localhost")) {
    return NextResponse.json({ error: "origin" }, { status: 403 });
  }

  const json: unknown = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true, stored: false, leadId: "ignored" });
  }

  if (parsed.data.startedAt && Date.now() - parsed.data.startedAt < 1200) {
    return NextResponse.json({ error: "too-fast" }, { status: 400 });
  }

  const leadId = crypto.randomUUID();
  const enabled = process.env.LEADS_ENABLED === "true";

  if (enabled && process.env.BLOB_READ_WRITE_TOKEN) {
    const { put } = await import("@vercel/blob");
    const now = new Date();
    const key = `leads/${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, "0")}/${leadId}.json`;
    await put(
      key,
      JSON.stringify({
        leadId,
        name: parsed.data.name,
        phone: parsed.data.phone,
        message: parsed.data.message,
        locale: parsed.data.locale,
        municipality: parsed.data.municipality,
        calculator: parsed.data.calculator,
        createdAt: now.toISOString(),
      }),
      {
        access: "private",
        token: process.env.BLOB_READ_WRITE_TOKEN,
        contentType: "application/json",
      },
    );
    return NextResponse.json({ ok: true, stored: true, leadId });
  }

  return NextResponse.json({ ok: true, stored: false, leadId });
}
