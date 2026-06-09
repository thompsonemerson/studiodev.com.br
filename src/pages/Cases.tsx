import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { CASE_TESTIMONIAL, CASES } from "@/content/cases";

export function Cases() {
  return (
    <div className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <PageHeader
        badge="Casos de Sucesso"
        title="Resultados Reais"
        description="Conheça como ajudamos nossos clientes a superar desafios operacionais, escalar seus negócios e reduzir custos através da engenharia de software e automação."
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
                  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-slate-300 rounded-full mr-2" /> O Desafio
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{caseItem.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" /> A Solução
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{caseItem.solution}</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded border border-blue-100 mt-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" /> Resultados Alcançados
                </h3>
                <p className="text-slate-700 font-medium text-sm">{caseItem.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 mb-10">O que nossos clientes dizem</h3>
        <div className="bg-slate-900 text-white rounded-xl p-10 shadow-lg relative">
          <p className="text-lg italic leading-relaxed mb-6">"{CASE_TESTIMONIAL.quote}"</p>
          <div className="flex flex-col items-center">
            <span className="font-bold text-white">{CASE_TESTIMONIAL.author}</span>
            <span className="text-slate-400 text-sm">{CASE_TESTIMONIAL.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
