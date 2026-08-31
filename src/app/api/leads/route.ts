import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/server/leads/schema";
import { storeLead } from "@/server/leads/store";
import { sendLeadEmails } from "@/server/leads/email";
import { checkLocalRateLimit } from "@/server/security/rateLimit";
import { verifyTurnstile } from "@/server/security/turnstile";

const MAX_BODY_BYTES = 16_000;

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, message: "Request too large." }, { status: 413 });
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ ok: false, message: "Request rejected." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ ok: false, message: "Request rejected." }, { status: 403 });
    }
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const rate = checkLocalRateLimit(ip);
  if (!rate.allowed) {
    return NextResponse.json({ ok: false, message: "Too many submissions. Please try again later." }, { status: 429 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const turnstileToken = typeof raw === "object" && raw !== null && "turnstileToken" in raw
    ? String((raw as Record<string, unknown>).turnstileToken || "")
    : undefined;

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please review the highlighted fields.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  if (parsed.data.websiteTrap) {
    return NextResponse.json({ ok: true });
  }

  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return NextResponse.json({ ok: false, message: "Verification failed. Please try again." }, { status: 403 });
  }

  const { websiteTrap: _trap, ...lead } = parsed.data;
  void _trap;

  try {
    await storeLead(lead);
    await sendLeadEmails(lead);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json({ ok: false, message: "We could not submit the project right now. Please try again." }, { status: 503 });
  }
}
