import { BUSINESS, NAV, telHref } from "@/lib/constants";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-snow/10 bg-canopy-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="group min-w-0">
          <span className="font-display text-lg font-bold tracking-tight text-snow md:text-xl">
            {BUSINESS.name}
          </span>
          <span className="mt-0.5 block text-xs text-snow/70">
            Dale City &amp; Prince William County
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-snow/85 transition hover:text-snow"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={telHref()}
            className="rounded-sm bg-harvest px-3.5 py-2 text-sm font-semibold text-canopy-deep transition hover:bg-harvest-hover"
          >
            {BUSINESS.phoneDisplay}
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
