import { SectionBadge } from "./SectionBadge";

type PageHeaderProps = {
  badge?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ badge, title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-16 border-b border-slate-200 pb-12">
      <div className="animate-fade-in-up-sm motion-reduce:animate-none">
        {children ?? (
          <>
            {badge ? <SectionBadge className="mb-4">{badge}</SectionBadge> : null}
            {title ? (
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{title}</h1>
            ) : null}
            {description ? (
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">{description}</p>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
