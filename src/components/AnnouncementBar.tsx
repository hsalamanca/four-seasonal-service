import { BUSINESS, OFFER, telHref } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div className="bg-harvest text-canopy-deep">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2 text-xs font-semibold tracking-wide md:px-8 md:text-sm">
        <p className="min-w-0 truncate">{OFFER.bar}</p>
        <a href={telHref()} className="shrink-0 underline-offset-2 hover:underline">
          Call {BUSINESS.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
