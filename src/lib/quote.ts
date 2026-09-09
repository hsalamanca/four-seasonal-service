import { SERVICE_OPTIONS, TIMING_OPTIONS } from "./constants";

export type QuotePayload = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  timing: string;
  message: string;
  companyWebsite?: string;
};

export function cleanText(value: string, max: number) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

export function cleanPhone(value: string) {
  return value.replace(/[^\d+().\-\s]/g, "").slice(0, 32);
}

export function validateQuote(input: QuotePayload) {
  if (input.companyWebsite?.trim()) {
    return { ok: true as const, honeypot: true };
  }

  const name = cleanText(input.name ?? "", 80);
  const phone = cleanPhone(input.phone ?? "");
  const email = cleanText(input.email ?? "", 120);
  const city = cleanText(input.city ?? "", 80);
  const message = cleanText(input.message ?? "", 800);
  const service = SERVICE_OPTIONS.includes(
    input.service as (typeof SERVICE_OPTIONS)[number],
  )
    ? input.service
    : "Not sure / multiple";
  const timing = TIMING_OPTIONS.includes(
    input.timing as (typeof TIMING_OPTIONS)[number],
  )
    ? input.timing
    : "Just getting a price";

  if (name.length < 2 || phone.replace(/\D/g, "").length < 7 || city.length < 2) {
    return {
      ok: false as const,
      error: "Please enter a valid name, phone number, and city.",
    };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, error: "Please enter a valid email, or leave it blank." };
  }

  return {
    ok: true as const,
    honeypot: false,
    data: { name, phone, email, city, service, timing, message },
  };
}
