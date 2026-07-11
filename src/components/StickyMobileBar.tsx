"use client";

import { BUSINESS, smsHref, telHref } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-snow/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={telHref()}
          className="rounded-sm bg-harvest px-3 py-3 text-center text-sm font-semibold text-canopy-deep"
        >
          Call Now
        </a>
        <a
          href={smsHref("Hi, I'd like a free quote for my property.")}
          className="rounded-sm bg-canopy px-3 py-3 text-center text-sm font-semibold text-snow"
        >
          Text {BUSINESS.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
