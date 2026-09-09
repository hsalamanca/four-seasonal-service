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
        className="absolute inset-0 bg-gradient-to-r from-canopy-deep/90 via-canopy-deep/72 to-canopy-deep/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-canopy-deep via-transparent to-canopy-deep/40"
        aria-hidden
      />

      <div
        className={`relative mx-auto grid max-w-6xl items-end gap-10 px-5 md:px-8 ${
          compact ? "py-16 md:py-20" : "py-16 md:py-24"
        } ${showForm ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}
      >
        <div className={compact ? "" : "pb-2"}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-frost">
            {BUSINESS.city} · {BUSINESS.county}
          </p>
          {brandFirst ? (
            <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-snow md:text-4xl">
              {BUSINESS.name}
            </p>
          ) : null}
          <h1
            className={`max-w-3xl font-display font-semibold tracking-tight text-snow ${
              brandFirst
                ? "mt-3 text-4xl md:text-6xl"
                : "mt-4 text-4xl md:text-5xl lg:text-6xl"
            }`}
          >
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-snow/80 md:text-lg">
            {support}
          </p>
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
