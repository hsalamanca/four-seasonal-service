export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={className}
      aria-hidden
      fill="none"
    >
      <rect width="36" height="36" rx="8" fill="#0C1F19" />
      <rect x="6" y="6" width="10" height="10" rx="2" fill="#7BAF7A" />
      <rect x="20" y="6" width="10" height="10" rx="2" fill="#2A5C4A" />
      <rect x="6" y="20" width="10" height="10" rx="2" fill="#C47B2D" />
      <rect x="20" y="20" width="10" height="10" rx="2" fill="#8AA0A8" />
    </svg>
  );
}
