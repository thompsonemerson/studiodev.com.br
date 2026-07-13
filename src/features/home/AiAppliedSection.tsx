import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TextLink } from "@/components/shared/TextLink";
import { HOME_AI } from "@/content/home";

export function AiAppliedSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={HOME_AI.title} description={HOME_AI.description} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {HOME_AI.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.05 + index * 0.05}>
              <div className="h-full bg-slate-50 p-8 rounded-lg border border-slate-200">
                <pillar.icon className="w-9 h-9 text-blue-600 mb-5" strokeWidth={1.75} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/servicos#ia">
            <Button variant="primary" size="lg">
              Ver capacidade de IA
            </Button>
          </Link>
          <TextLink to="/contato" className="text-base">
            Falar sobre um projeto
          </TextLink>
        </div>
      </div>
    </section>
  );
}
