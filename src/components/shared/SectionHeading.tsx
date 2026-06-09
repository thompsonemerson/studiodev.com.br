import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-2xl text-left",
        className,
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-slate-900 mb-4",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-slate-600 text-lg leading-relaxed", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
