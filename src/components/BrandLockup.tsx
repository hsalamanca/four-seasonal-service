import { BrandMark } from "@/components/BrandMark";

type Props = {
  className?: string;
  markClassName?: string;
};

export function BrandLockup({
  className = "",
  markClassName = "h-10 w-10",
}: Props) {
  return (
    <span className={`flex min-w-0 items-center gap-2.5 ${className}`}>
      <BrandMark className={`shrink-0 ${markClassName}`} />
      <span className="min-w-0 leading-none">
        <span className="block font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-snow md:text-[1.22rem]">
          Four Seasonal
        </span>
        <span className="mt-[0.38rem] block text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-harvest">
          Services
        </span>
      </span>
    </span>
  );
}
