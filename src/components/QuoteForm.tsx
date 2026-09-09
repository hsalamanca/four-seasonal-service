"use client";

import { BUSINESS, SERVICE_OPTIONS, telHref } from "@/lib/constants";
import { FormEvent, useState } from "react";

type Props = {
  compact?: boolean;
  defaultService?: string;
  defaultCity?: string;
  id?: string;
};

export function QuoteForm({
  compact = false,
  defaultService = SERVICE_OPTIONS[0],
  defaultCity = "Dale City",
  id = "quote",
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState(defaultCity);
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setStatus("sending");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          city,
          service,
          message,
          companyWebsite: honeypot,
        }),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok) {
        setStatus("error");
        setError(payload.error || "Something went wrong. Please call us.");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Could not send. Call or text us and we’ll take it from there.");
    }
  }

  if (status === "sent") {
    return (
      <div
        id={id}
        className="scroll-mt-28 rounded-lg bg-snow p-6 shadow-[0_18px_40px_rgba(12,31,25,0.16)] md:p-7"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-canopy-mid">
          Quote request received
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
          We’ll call you shortly.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Same-day replies are the goal. If you need us now, call{" "}
          {BUSINESS.phoneDisplay}.
        </p>
        <a
          href={telHref()}
          className="cta-primary mt-6 inline-flex min-h-11 items-center rounded-sm bg-harvest px-5 py-3 text-sm font-semibold text-canopy-deep"
        >
          Call {BUSINESS.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="relative scroll-mt-28 rounded-lg bg-snow p-6 shadow-[0_18px_40px_rgba(12,31,25,0.16)] md:p-7"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-canopy-mid">
        Free quote
      </p>
      <h2 className="mt-1 font-display text-2xl font-semibold text-ink">
        Tell us about the property
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        We reply the same day when we can. No online gimmicks—just a clear next step.
      </p>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <div className={`mt-5 grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="field"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={32}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="field"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">City</span>
          <input
            required
            name="city"
            autoComplete="address-level2"
            maxLength={80}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="field"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Service</span>
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="field"
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        {compact ? null : (
          <label className="block text-sm sm:col-span-2">
            <span className="mb-1.5 block font-medium text-ink">
              Email <span className="font-normal text-muted">(optional)</span>
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              maxLength={120}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field"
            />
          </label>
        )}
        <label className={`block text-sm ${compact ? "" : "sm:col-span-2"}`}>
          <span className="mb-1.5 block font-medium text-ink">
            Address / notes <span className="font-normal text-muted">(optional)</span>
          </span>
          <textarea
            name="message"
            rows={compact ? 2 : 4}
            maxLength={800}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Street, lot size, photos later via text…"
            className="field"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="cta-primary mt-5 min-h-11 w-full rounded-sm bg-harvest px-4 py-3 text-sm font-semibold text-canopy-deep disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Get my free quote"}
      </button>
      {error ? (
        <p className="mt-3 text-sm text-harvest" role="alert">
          {error}
        </p>
      ) : (
        <p className="mt-3 text-center text-xs text-muted">
          Or call {BUSINESS.phoneDisplay} · {BUSINESS.hours.label}
        </p>
      )}
    </form>
  );
}
