"use client";

import { BUSINESS, NAV, smsHref, telHref } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="rounded-sm border border-snow/30 px-3 py-2 text-sm font-semibold text-snow"
      >
        Menu
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-canopy-deep/95 px-5 py-6 backdrop-blur-sm"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-display text-lg font-bold text-snow">
              {BUSINESS.name}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-sm border border-snow/30 px-3 py-2 text-sm font-semibold text-snow"
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-bold text-snow"
            >
              Home
            </Link>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-snow"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-3">
            <a
              href={telHref()}
              className="rounded-sm bg-harvest px-4 py-3 text-center text-base font-semibold text-canopy-deep"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={smsHref("Hi, I'd like a free quote for my property.")}
              className="rounded-sm border border-snow/40 px-4 py-3 text-center text-base font-semibold text-snow"
            >
              Text for a Quote
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
