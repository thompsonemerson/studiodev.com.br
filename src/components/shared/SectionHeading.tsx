type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {description && <p className="text-slate-600 text-lg">{description}</p>}
    </div>
  );
}
