"use client";

import { BrandMark } from "@/components/BrandMark";
import { BUSINESS, NAV, telHref } from "@/lib/constants";
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
        className="min-h-11 rounded-sm border border-snow/30 px-3 py-2 text-sm font-semibold text-snow"
      >
        Menu
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-canopy-deep px-5 py-6"
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="flex items-center gap-3">
              <BrandMark />
              <span className="font-display text-lg font-semibold text-snow">
                {BUSINESS.name}
              </span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="min-h-11 rounded-sm border border-snow/30 px-3 py-2 text-sm font-semibold text-snow"
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-semibold text-snow"
            >
              Home
            </Link>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-snow"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 flex flex-col gap-3">
            <a
              href={telHref()}
              className="min-h-12 rounded-sm bg-harvest px-4 py-3 text-center text-base font-semibold text-canopy-deep"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/#quote"
              onClick={() => setOpen(false)}
              className="min-h-12 rounded-sm border border-snow/40 px-4 py-3 text-center text-base font-semibold text-snow"
            >
              Get a free quote
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
