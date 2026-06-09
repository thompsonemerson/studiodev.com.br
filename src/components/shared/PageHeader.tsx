import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { cn } from "@/lib/cn";

type PageHeaderMedia = {
  src: string;
  alt: string;
};

type PageHeaderProps = {
  badge?: string;
  title?: string;
  description?: string;
  extraDescription?: string;
  media?: PageHeaderMedia;
  children?: React.ReactNode;
  className?: string;
};

function PageHeaderTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{children}</h1>
  );
}

function PageHeaderDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-xl text-slate-600 leading-relaxed", className)}>{children}</p>;
}

export function PageHeader({
  badge,
  title,
  description,
  extraDescription,
  media,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-16 border-b border-slate-200 pb-12", className)}>
      <div className="animate-fade-in-up-sm motion-reduce:animate-none">
        {children ??
          (media ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {badge ? <SectionBadge className="mb-4">{badge}</SectionBadge> : null}
                {title ? <PageHeaderTitle>{title}</PageHeaderTitle> : null}
                {description ? (
                  <PageHeaderDescription className="mb-6">{description}</PageHeaderDescription>
                ) : null}
                {extraDescription ? (
                  <p className="text-slate-600 leading-relaxed">{extraDescription}</p>
                ) : null}
              </div>
              <div className="w-full">
                <div className="rounded-lg overflow-hidden shadow-lg border border-slate-200">
                  <OptimizedImage
                    src={media.src}
                    alt={media.alt}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              {badge ? <SectionBadge className="mb-4">{badge}</SectionBadge> : null}
              {title ? <PageHeaderTitle>{title}</PageHeaderTitle> : null}
              {description ? (
                <PageHeaderDescription className="max-w-3xl">{description}</PageHeaderDescription>
              ) : null}
            </>
          ))}
      </div>
    </div>
  );
}
