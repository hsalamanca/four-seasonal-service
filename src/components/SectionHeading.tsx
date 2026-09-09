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
          className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] ${
            align === "center" ? "justify-center" : ""
          } ${tone === "light" ? "text-harvest" : "text-canopy-mid"}`}
        >
          {align === "center" ? null : <span className="h-px w-8 bg-harvest" />}
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight md:text-4xl ${
          tone === "light" ? "text-snow" : "text-ink"
        } ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
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
