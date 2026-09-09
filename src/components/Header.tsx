import { BrandMark } from "@/components/BrandMark";
import { BUSINESS, NAV, telHref } from "@/lib/constants";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-snow/10 bg-canopy-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <BrandMark className="h-9 w-9 shrink-0" />
          <span className="min-w-0">
            <span className="block font-display text-lg font-semibold tracking-tight text-snow md:text-xl">
              {BUSINESS.name}
            </span>
            <span className="block text-xs text-snow/65">
              Dale City & Prince William County
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-snow/80 transition hover:text-snow"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={telHref()}
            className="text-sm font-semibold text-snow/90 transition hover:text-snow"
          >
            {BUSINESS.phoneDisplay}
          </a>
          <Link
            href="/#quote"
            className="rounded-sm bg-harvest px-3.5 py-2.5 text-sm font-semibold text-canopy-deep transition hover:bg-harvest-hover"
          >
            Free quote
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
