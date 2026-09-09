import { QuoteForm } from "@/components/QuoteForm";
import { BUSINESS } from "@/lib/constants";
import Image from "next/image";

type Props = {
  imageSrc: string;
  imageAlt: string;
  brandFirst?: boolean;
  headline: string;
  support: string;
  compact?: boolean;
  showForm?: boolean;
  defaultService?: string;
  defaultCity?: string;
};

export function PageHero({
  imageSrc,
  imageAlt,
  brandFirst = false,
  headline,
  support,
  compact = false,
  showForm = true,
  defaultService,
  defaultCity,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-canopy-deep">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="hero-drift object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-canopy-deep/92 via-canopy-deep/70 to-canopy-deep/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-canopy-deep via-transparent to-canopy-deep/35"
        aria-hidden
      />

      <div
        className={`relative mx-auto grid max-w-6xl items-end gap-10 px-5 md:px-8 ${
          compact ? "py-14 md:py-16" : "py-16 md:py-24"
        } ${showForm ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}
      >
        <div className={compact ? "" : "pb-2"}>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-harvest">
            <span className="hidden h-px w-8 bg-harvest sm:block" />
            {BUSINESS.city} · {BUSINESS.county}
          </p>
          {brandFirst ? (
            <p className="mt-5 font-display text-xl font-medium tracking-tight text-snow/80 md:text-2xl">
              {BUSINESS.name}
            </p>
          ) : null}
          <h1
            className={`max-w-3xl font-display font-semibold tracking-tight text-snow ${
              brandFirst
                ? "mt-2 text-4xl leading-[1.05] md:text-6xl"
                : "mt-5 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            }`}
          >
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-snow/80 md:text-lg">
            {support}
          </p>
          {showForm ? (
            <ul className="mt-7 hidden gap-x-6 gap-y-2 text-sm text-snow/75 sm:flex sm:flex-wrap">
              <li>Local Dale City crew</li>
              <li>Same-day quotes</li>
              <li>Year-round on one roster</li>
            </ul>
          ) : null}
        </div>

        {showForm ? (
          <QuoteForm
            compact
            defaultService={defaultService}
            defaultCity={defaultCity}
          />
        ) : null}
      </div>
    </section>
  );
}
