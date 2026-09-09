"use client";

import { telHref } from "@/lib/constants";
import Link from "next/link";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-snow/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={telHref()}
          className="min-h-11 rounded-sm bg-harvest px-3 py-3 text-center text-sm font-semibold text-canopy-deep"
        >
          Call now
        </a>
        <Link
          href="/#quote"
          className="min-h-11 rounded-sm bg-canopy px-3 py-3 text-center text-sm font-semibold text-snow"
        >
          Free quote
        </Link>
      </div>
    </div>
  );
}
