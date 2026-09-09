"use client";

import { BUSINESS, SERVICES, smsHref } from "@/lib/constants";
import { FormEvent, useState } from "react";

const serviceOptions = [
  ...SERVICES.map((s) => s.shortName),
  "Not sure / multiple",
];

function cleanText(value: string, max: number) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

function cleanPhone(value: string) {
  return value.replace(/[^\d+().\-\s]/g, "").slice(0, 32);
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Dale City");
  const [service, setService] = useState<string>(SERVICES[0].shortName);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (honeypot.trim()) {
      setSent(true);
      return;
    }

    const safeName = cleanText(name, 80);
    const safePhone = cleanPhone(phone);
    const safeCity = cleanText(city, 80);
    const safeMessage = cleanText(message, 800);
    const safeService = serviceOptions.includes(service)
      ? service
      : SERVICES[0].shortName;

    if (safeName.length < 2 || safePhone.length < 7 || safeCity.length < 2) {
      setError("Please enter a valid name, phone number, and city.");
      return;
    }

    const body = [
      `Hi Four Seasonal Services — quote request`,
      `Name: ${safeName}`,
      `Phone: ${safePhone}`,
      `City: ${safeCity}`,
      `Service: ${safeService}`,
      safeMessage ? `Notes: ${safeMessage}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = smsHref(body);
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-sm border border-line bg-snow p-6 shadow-[0_1px_0_rgba(20,32,28,0.04)] md:p-8"
    >
      <h2 className="font-display text-2xl font-bold text-ink">
        Text us a quote request
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Fill this out and we'll open a text to{" "}
        <span className="font-semibold text-ink">{BUSINESS.phoneDisplay}</span>{" "}
        with your details. Prefer to talk? Call anytime.
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-ink">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-sm border border-line bg-mist px-3 py-2.5 text-ink outline-none ring-canopy focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-ink">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={32}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-sm border border-line bg-mist px-3 py-2.5 text-ink outline-none ring-canopy focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-ink">City</span>
          <input
            required
            name="city"
            autoComplete="address-level2"
            maxLength={80}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-sm border border-line bg-mist px-3 py-2.5 text-ink outline-none ring-canopy focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-ink">Service</span>
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-sm border border-line bg-mist px-3 py-2.5 text-ink outline-none ring-canopy focus:ring-2"
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-semibold text-ink">
            Message (optional)
          </span>
          <textarea
            name="message"
            rows={4}
            maxLength={800}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Address, lot size, photos welcome via text…"
            className="w-full rounded-sm border border-line bg-mist px-3 py-2.5 text-ink outline-none ring-canopy focus:ring-2"
          />
        </label>
      </div>

      <button
        type="submit"
        className="cta-primary mt-6 w-full rounded-sm bg-harvest px-4 py-3 text-sm font-semibold text-canopy-deep transition hover:bg-harvest-hover sm:w-auto"
      >
        Open Text to {BUSINESS.phoneDisplay}
      </button>

      {error ? (
        <p className="mt-3 text-sm text-harvest" role="alert">
          {error}
        </p>
      ) : null}

      {sent ? (
        <p className="mt-3 text-sm text-canopy-mid" role="status">
          Opening your messages app… If nothing appears, text us directly at{" "}
          {BUSINESS.phoneDisplay}.
        </p>
      ) : null}
    </form>
  );
}
