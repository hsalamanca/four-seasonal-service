"use client";

import { BUSINESS, SERVICES, smsHref } from "@/lib/constants";
import { FormEvent, useState } from "react";

const serviceOptions = [
  ...SERVICES.map((s) => s.shortName),
  "Not sure / multiple",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Dale City");
  const [service, setService] = useState<string>(SERVICES[0].shortName);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Hi Four Seasonal Services — quote request`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `City: ${city.trim()}`,
      `Service: ${service}`,
      message.trim() ? `Notes: ${message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = smsHref(body);
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-line bg-snow p-6 shadow-[0_1px_0_rgba(20,32,28,0.04)] md:p-8"
    >
      <h2 className="font-display text-2xl font-bold text-ink">
        Text us a quote request
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Fill this out and we&apos;ll open a text to{" "}
        <span className="font-semibold text-ink">{BUSINESS.phoneDisplay}</span>{" "}
        with your details. Prefer to talk? Call anytime.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-ink">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
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

      {sent ? (
        <p className="mt-3 text-sm text-canopy-mid" role="status">
          Opening your messages app… If nothing appears, text us directly at{" "}
          {BUSINESS.phoneDisplay}.
        </p>
      ) : null}
    </form>
  );
}
