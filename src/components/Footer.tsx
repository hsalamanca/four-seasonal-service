import { BrandMark } from "@/components/BrandMark";
import { AREAS, BUSINESS, SERVICES, telHref } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-canopy-deep text-snow">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <BrandMark className="h-8 w-8" />
            <p className="font-display text-xl font-semibold">{BUSINESS.name}</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-snow/75">
            {BUSINESS.tagline} Serving {BUSINESS.city} and {BUSINESS.county}, VA.
          </p>
          <a
            href={telHref()}
            className="mt-5 inline-flex text-sm font-semibold text-harvest hover:underline"
          >
            {BUSINESS.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-frost">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="text-sm text-snow/80 transition hover:text-snow"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm text-snow/80 transition hover:text-snow">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-frost">
            Service areas
          </p>
          <ul className="mt-4 space-y-2">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  href={area.href}
                  className="text-sm text-snow/80 transition hover:text-snow"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-frost">
            Get a quote
          </p>
          <ul className="mt-4 space-y-2 text-sm text-snow/80">
            <li>
              <a href={telHref()} className="transition hover:text-snow">
                Call {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <Link href="/#quote" className="transition hover:text-snow">
                Request a free quote
              </Link>
            </li>
            <li>
              {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
            </li>
            <li>{BUSINESS.hours.label}</li>
            <li>
              <Link href="/privacy" className="transition hover:text-snow">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-snow/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-snow/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Lawn · Landscape · Snow — one local team.</p>
        </div>
      </div>
    </footer>
  );
}
