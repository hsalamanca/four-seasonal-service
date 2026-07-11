import { BUSINESS, smsHref, telHref } from "@/lib/constants";

type Props = {
  className?: string;
  size?: "md" | "lg";
  smsBody?: string;
};

export function CallTextCtas({
  className = "",
  size = "md",
  smsBody = "Hi Four Seasonal Services — I'd like a free quote for my property.",
}: Props) {
  const pad = size === "lg" ? "px-5 py-3.5 text-base" : "px-4 py-2.5 text-sm";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={telHref()}
        className={`cta-primary rounded-sm bg-harvest font-semibold text-canopy-deep transition hover:bg-harvest-hover ${pad}`}
      >
        Call {BUSINESS.phoneDisplay}
      </a>
      <a
        href={smsHref(smsBody)}
        className={`cta-secondary rounded-sm border border-current/30 font-semibold transition hover:border-current ${pad}`}
      >
        Text for a Quote
      </a>
    </div>
  );
}
