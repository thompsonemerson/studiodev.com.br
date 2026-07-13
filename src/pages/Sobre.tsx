import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ABOUT_IMAGE, ABOUT_VALUES, COMPLIANCE_ITEMS } from "@/content/about";

export function Sobre() {
  return (
    <PageContainer>
      <PageHeader
        badge="Sobre a Empresa"
        title="Tecnologia, Estratégia e Confiança."
        description="Desde 2013, somos parceiros tecnológicos de empresas que precisam desenvolver produtos digitais, modernizar operações e construir soluções escaláveis."
        extraDescription="A StudioDev não é uma agência criativa ou uma fábrica de software focada em volume. Somos uma consultoria boutique de engenharia de software focada em qualidade, arquitetura sólida e resolução de problemas reais, inclusive potencializando operações com automação e IA aplicada, com critério."
        media={{ src: ABOUT_IMAGE, alt: "Equipe corporativa de tecnologia" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ABOUT_VALUES.map((value) => (
          <div key={value.title} className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <value.icon className="w-8 h-8 text-blue-600 mb-4" strokeWidth={1.75} />
            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-24 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <SectionHeading
            align="left"
            title="Cultura de Segurança e Compliance"
            description="Desenvolver para o mercado corporativo exige rigor. Empregamos políticas estritas de segurança da informação e governança em todos os ciclos de desenvolvimento para proteger o ativo mais valioso da sua empresa: os dados."
            className="lg:sticky lg:top-32 mb-0"
          />

          <div className="lg:col-span-2 space-y-6">
            {COMPLIANCE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-6 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
                    <item.icon className="w-6 h-6 text-blue-600" strokeWidth={1.75} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
