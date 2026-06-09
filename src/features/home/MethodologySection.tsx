import { SectionHeading } from "@/components/shared/SectionHeading";
import { HOME_METHODOLOGY } from "@/content/home";

export function MethodologySection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nossa Metodologia de Engenharia"
          description="Um processo estruturado para mitigar riscos, garantir qualidade técnica e entregar valor real ao seu negócio desde o primeiro ciclo."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {HOME_METHODOLOGY.map((phase, index) => (
            <div key={phase.step} className="relative">
              <div className="text-5xl font-extrabold text-slate-100 mb-4">{phase.step}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{phase.desc}</p>
              {index < HOME_METHODOLOGY.length - 1 && (
                <div className="hidden md:block absolute top-6 left-20 right-[-1rem] h-[1px] bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
