import { BUSINESS } from "@/lib/constants";
import { validateQuote, type QuotePayload } from "@/lib/quote";
import { clientIp } from "@/lib/security";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const buckets = new Map<string, { count: number; resetAt: number }>();

function tooMany(ip: string) {
  const now = Date.now();
  const current = buckets.get(ip);
  if (!current || now > current.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > MAX_PER_WINDOW;
}

function allowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin") || "";
  const host = request.headers.get("host") || "";
  if (origin) {
    try {
      const url = new URL(origin);
      if (url.hostname === "fourseasonalservices.com") return true;
      if (url.hostname.endsWith(".vercel.app")) return true;
      if (url.hostname === "localhost") return true;
    } catch {
      return false;
    }
  }
  return host.includes("fourseasonalservices.com") || host.includes("vercel.app");
}

async function deliverLead(data: {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
}) {
  const notify = process.env.LEAD_NOTIFY_EMAIL || BUSINESS.email;
  const webhook = process.env.LEAD_WEBHOOK_URL;
  const payload = {
    _subject: `New quote — ${data.service} — ${data.city}`,
    _template: "table",
    _captcha: "false",
    name: data.name,
    phone: data.phone,
    email: data.email || "(none)",
    city: data.city,
    service: data.service,
    message: data.message || "(none)",
    source: BUSINESS.domain,
  };

  const jobs: Promise<unknown>[] = [
    fetch(`https://formsubmit.co/ajax/${encodeURIComponent(notify)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }),
  ];

  if (webhook) {
    jobs.push(
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, receivedAt: new Date().toISOString() }),
      }),
    );
  }

  const results = await Promise.allSettled(jobs);
  return results.some((result) => result.status === "fulfilled");
}

export async function POST(request: NextRequest) {
  if (!allowedOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = clientIp(request.headers);
  if (tooMany(ip)) {
    return NextResponse.json(
      { error: "Too many quote requests. Please call us instead." },
      { status: 429, headers: { "Retry-After": "3600" } },
    );
  }

  let body: QuotePayload;
  try {
    const text = await request.text();
    if (text.length > 8000) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }
    body = JSON.parse(text) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = validateQuote(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
  if (parsed.honeypot || !parsed.data) {
    return NextResponse.json({ ok: true });
  }

  try {
    await deliverLead(parsed.data);
  } catch {
    // Still confirm to the visitor; they can call. Delivery is best-effort.
  }

  return NextResponse.json({ ok: true });
}
