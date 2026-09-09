import { BUSINESS, telHref } from "@/lib/constants";
import Link from "next/link";

type Props = {
  className?: string;
  size?: "md" | "lg";
};

export function CallTextCtas({ className = "", size = "md" }: Props) {
  const pad = size === "lg" ? "px-5 py-3.5 text-base" : "px-4 py-2.5 text-sm";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={telHref()}
        className={`cta-primary min-h-11 rounded-sm bg-harvest font-semibold text-canopy-deep ${pad}`}
      >
        Call {BUSINESS.phoneDisplay}
      </a>
      <Link
        href="/#quote"
        className={`min-h-11 rounded-sm border border-current/30 font-semibold transition hover:border-current ${pad}`}
      >
        Get a free quote
      </Link>
    </div>
  );
}
