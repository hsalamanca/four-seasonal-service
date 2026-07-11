import { CallTextCtas } from "@/components/CallTextCtas";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-canopy-mid">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        That page doesn&apos;t exist. Head home or contact us for lawn care,
        landscaping, or snow removal in Dale City and Prince William County.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-sm bg-canopy px-4 py-2.5 text-sm font-semibold text-snow"
        >
          Back home
        </Link>
        <Link
          href="/contact"
          className="rounded-sm border border-line px-4 py-2.5 text-sm font-semibold text-ink"
        >
          Contact
        </Link>
      </div>
      <CallTextCtas className="mt-8 text-ink" />
    </section>
  );
}
