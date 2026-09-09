type IconProps = { className?: string };

export function IconStar({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden fill="currentColor">
      <path d="M10 1.6 12.4 7l5.8.5-4.4 3.8 1.3 5.6L10 13.9 4.9 16.9l1.3-5.6L1.8 7.5 7.6 7 10 1.6Z" />
    </svg>
  );
}

export function IconPhone({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.7 3.8c.4-.4 1-.5 1.5-.3l2.2.9c.6.2 1 .8 1 1.4l-.2 2.2a1.4 1.4 0 0 1-.7 1.1l-1.2.7a11.2 11.2 0 0 0 5.4 5.4l.7-1.2c.3-.4.8-.6 1.1-.7l2.2-.2c.6 0 1.2.4 1.4 1l.9 2.2c.2.5.1 1.1-.3 1.5l-1.3 1.3c-.5.5-1.2.7-1.9.5C10.7 19.2 4.8 13.3 3.4 7c-.2-.7 0-1.4.5-1.9L6.7 3.8Z"
      />
    </svg>
  );
}

export function IconPin({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function IconClock({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.2" />
      <path strokeLinecap="round" d="M12 8v4.2l2.6 1.6" />
    </svg>
  );
}

export function IconLeaf({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19c8-1 13-7 14-14-7 1-13 6-14 14Z" />
      <path strokeLinecap="round" d="M9 15c2-3 5-6 9-8" />
    </svg>
  );
}

export function IconShield({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinejoin="round" d="M12 3.5 19 6.2v5.3c0 4.3-2.9 7.4-7 8.8-4.1-1.4-7-4.5-7-8.8V6.2L12 3.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.8 12.2 2.1 2.1 4.3-4.4" />
    </svg>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-harvest ${className}`} aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-3.5 w-3.5" />
      ))}
    </span>
  );
}
