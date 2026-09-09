type Props = {
  className?: string;
};

export function BrandMark({ className = "h-10 w-10" }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      fill="none"
    >
      <rect width="64" height="64" rx="16" fill="#0C1F19" />
      <rect
        x="2.1"
        y="2.1"
        width="59.8"
        height="59.8"
        rx="14.6"
        stroke="#C47B2D"
        strokeWidth="2.05"
      />
      <rect
        x="6.7"
        y="6.7"
        width="50.6"
        height="50.6"
        rx="11"
        stroke="#C47B2D"
        strokeWidth="0.85"
        opacity="0.55"
      />
      <rect x="12.6" y="12.6" width="17.05" height="17.05" rx="3.4" fill="#7EBE74" />
      <rect x="34.35" y="12.6" width="17.05" height="17.05" rx="3.4" fill="#2F7A56" />
      <rect x="12.6" y="34.35" width="17.05" height="17.05" rx="3.4" fill="#C47B2D" />
      <rect x="34.35" y="34.35" width="17.05" height="17.05" rx="3.4" fill="#A8B9BE" />
      <circle cx="32" cy="32" r="3.55" fill="#0C1F19" />
      <circle cx="32" cy="32" r="2.35" fill="#C47B2D" />
    </svg>
  );
}
