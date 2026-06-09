import { cn } from "@/lib/cn";

type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800",
        className,
      )}
    >
      {children}
    </span>
  );
}
