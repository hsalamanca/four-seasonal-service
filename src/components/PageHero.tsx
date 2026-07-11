import { CallTextCtas } from "@/components/CallTextCtas";
import { BUSINESS } from "@/lib/constants";
import Image from "next/image";

type Props = {
  imageSrc: string;
  imageAlt: string;
  brandFirst?: boolean;
  headline: string;
  support: string;
  compact?: boolean;
};

export function PageHero({
  imageSrc,
  imageAlt,
  brandFirst = false,
  headline,
  support,
  compact = false,
}: Props) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-canopy-deep ${
        compact ? "min-h-[52vh]" : "min-h-[92vh]"
      }`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="hero-drift object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-canopy-deep/88 via-canopy-deep/70 to-canopy-deep/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-canopy-deep/70 via-transparent to-canopy-deep/30"
        aria-hidden
      />

      <div
        className={`relative mx-auto flex max-w-6xl flex-col justify-end px-5 md:px-8 ${
          compact ? "pb-14 pt-16 md:pb-16 md:pt-20" : "pb-20 pt-20 md:pb-24 md:pt-28"
        }`}
      >
        {brandFirst ? (
          <p className="font-display text-2xl font-extrabold tracking-tight text-snow md:text-4xl">
            {BUSINESS.name}
          </p>
        ) : null}
        <h1
          className={`max-w-3xl font-display font-bold tracking-tight text-snow ${
            brandFirst
              ? "mt-4 text-3xl md:text-5xl"
              : "text-4xl md:text-5xl lg:text-6xl"
          }`}
        >
          {headline}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-snow/80 md:text-lg">
          {support}
        </p>
        <CallTextCtas
          className="mt-8 text-snow"
          size="lg"
          smsBody="Hi Four Seasonal Services — I'd like a free quote."
        />
      </div>
    </section>
  );
}
