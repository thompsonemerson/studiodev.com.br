import { CheckCircle2 } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  BrainCircuit,
  CTO_FEATURES,
  DELIVERY_STANDARDS,
  SERVICES,
  TECH_STACK_CATEGORIES,
} from "@/content/services";

export function Servicos() {
  return (
    <PageContainer>
      <PageHeader
        badge="Nossas Soluções"
        title="O que fazemos"
        description="Oferecemos um portfólio completo de serviços de engenharia de software para cobrir todas as necessidades tecnológicas da sua empresa."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <service.icon className="w-10 h-10 text-blue-600 mb-6" strokeWidth={1.75} />
            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-24 bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm relative">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
        <div className="bg-slate-50 p-8 md:p-12 md:w-1/3 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-slate-200 pl-10 md:pl-12">
          <BrainCircuit className="w-12 h-12 text-blue-600 mb-6" strokeWidth={1.75} />
          <h2 className="text-2xl font-bold text-slate-900 mb-3">CTO as a Service</h2>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            Consultoria Estratégica
          </span>
        </div>
        <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Liderança técnica de alto nível sob demanda
          </h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-8">
            Arquitetura de produto, gestão de times de engenharia, decisões de tecnologia e
            governança de TI para empresas que precisam de visão estratégica sem o custo integral
            de um C-Level técnico.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CTO_FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" strokeWidth={1.75} />
                <p className="text-slate-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-10 md:p-16 border border-slate-200">
        <SectionHeading
          title="Especialidades Técnicas"
          description="Trabalhamos com as tecnologias e frameworks mais consolidados do mercado corporativo."
          className="max-w-2xl mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {TECH_STACK_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center border-b border-slate-200 pb-2">
                <category.icon className="w-5 h-5 mr-2 text-blue-600" strokeWidth={1.75} />
                {category.title}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                {category.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 mb-12">
        <SectionHeading
          title="Padrões de Entrega e SLAs"
          description="Nossa engenharia vai além do código. Garantimos uma operação previsível, segura e com total transparência de ponta a ponta."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DELIVERY_STANDARDS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col sm:flex-row bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 sm:mb-0 sm:mr-6 shrink-0">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                  <item.icon className="w-7 h-7 text-blue-600" strokeWidth={1.75} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
