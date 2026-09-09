import { BrandLockup } from "@/components/BrandLockup";
import { IconPhone } from "@/components/Icons";
import { BUSINESS, NAV, telHref } from "@/lib/constants";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-snow/10 bg-canopy-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 md:px-8">
        <Link href="/" aria-label={`${BUSINESS.name} home`} className="min-w-0">
          <BrandLockup />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-snow/80 transition hover:text-snow"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref()}
            className="cta-primary inline-flex min-h-11 items-center gap-2 rounded-sm bg-harvest px-3 py-2.5 text-sm font-semibold text-canopy-deep"
          >
            <IconPhone className="h-4 w-4" />
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">{BUSINESS.phoneDisplay}</span>
          </a>
          <Link
            href="/#quote"
            className="hidden min-h-11 items-center rounded-sm border border-snow/25 px-3.5 py-2.5 text-sm font-semibold text-snow transition hover:border-snow md:inline-flex"
          >
            Free quote
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
