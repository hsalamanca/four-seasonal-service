type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.16em] ${
            tone === "light" ? "text-frost" : "text-canopy-mid"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${
          tone === "light" ? "text-snow" : "text-ink"
        } ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      <div
        className={`season-rail mt-4 h-px w-16 ${
          align === "center" ? "mx-auto" : ""
        } ${tone === "light" ? "bg-frost/70" : "bg-canopy-mid/50"}`}
        aria-hidden
      />
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            tone === "light" ? "text-snow/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
