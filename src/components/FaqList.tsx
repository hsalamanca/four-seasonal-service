type Item = { q: string; a: string };

export function FaqList({ items }: { items: readonly Item[] | Item[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-semibold text-ink">
            {item.q}
            <span
              aria-hidden
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-base font-medium text-canopy transition group-open:rotate-45 group-open:border-canopy"
            >
              +
            </span>
          </summary>
          <p className="pb-5 pr-12 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
