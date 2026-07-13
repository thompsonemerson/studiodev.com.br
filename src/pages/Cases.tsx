import { CheckCircle2 } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AI_SCENARIOS, CASE_TESTIMONIAL, CASES } from "@/content/cases";

export function Cases() {
  return (
    <PageContainer>
      <PageHeader
        badge="Casos de Sucesso"
        title="Resultados Reais"
        description="Conheça como ajudamos nossos clientes a superar desafios operacionais, escalar negócios e reduzir custos com engenharia de software, automação e IA aplicada."
      />

      <div className="space-y-12">
        {CASES.map((caseItem) => (
          <div
            key={caseItem.title}
            className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col lg:flex-row"
          >
            <div className="lg:w-1/3 bg-slate-50 p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-center">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {caseItem.industry}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{caseItem.title}</h2>
            </div>

            <div className="lg:w-2/3 p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3">O Desafio</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{caseItem.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3">A Solução</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{caseItem.solution}</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded border border-blue-100 mt-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" strokeWidth={1.75} />
                  Resultados Alcançados
                </h3>
                <p className="text-slate-700 font-medium text-sm">{caseItem.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-16 border-t border-slate-200">
        <SectionHeading
          title="Cenários típicos de IA e automação"
          description="Situações recorrentes em que embutimos automações, LLMs ou RAG na operação — sem inventar caso de cliente. Cada entrega parte do seu processo e dos seus dados."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AI_SCENARIOS.map((scenario) => (
            <div
              key={scenario.title}
              className="bg-slate-50 p-8 rounded-lg border border-slate-200"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                Cenário típico
              </p>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{scenario.title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Problema</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{scenario.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Abordagem</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{scenario.approach}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading title="O que nossos clientes dizem" className="mb-10" />
        <div className="max-w-3xl mx-auto bg-slate-900 text-white rounded-xl p-10 shadow-lg">
          <p className="text-lg italic leading-relaxed mb-6">"{CASE_TESTIMONIAL.quote}"</p>
          <div className="flex flex-col items-center text-center">
            <span className="font-bold text-white">{CASE_TESTIMONIAL.author}</span>
            <span className="text-slate-400 text-sm">{CASE_TESTIMONIAL.role}</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
