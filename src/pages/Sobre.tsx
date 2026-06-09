import { PageHeader } from "@/components/shared/PageHeader";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { ABOUT_IMAGE, ABOUT_VALUES, COMPLIANCE_ITEMS } from "@/content/about";

export function Sobre() {
  return (
    <div className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <PageHeader>
        <SectionBadge className="mb-4">Sobre a Empresa</SectionBadge>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Tecnologia, Estratégia e Confiança.
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Desde 2013, somos parceiros tecnológicos de empresas que precisam desenvolver
              produtos digitais, modernizar operações e construir soluções escaláveis.
            </p>
            <p className="text-slate-600 leading-relaxed">
              A StudioDev não é uma agência criativa ou uma fábrica de software focada em volume.
              Somos uma consultoria boutique de engenharia de software focada em qualidade,
              arquitetura sólida e resolução de problemas reais de negócios.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="rounded-lg overflow-hidden shadow-lg border border-slate-200">
              <OptimizedImage
                src={ABOUT_IMAGE}
                alt="Equipe corporativa de tecnologia"
                className="w-full h-auto aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ABOUT_VALUES.map((value) => (
          <div key={value.title} className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <value.icon className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-24 border-t border-slate-200">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Cultura de Segurança e Compliance
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Desenvolver para o mercado corporativo exige rigor. Empregamos políticas estritas de
              segurança da informação e governança em todos os ciclos de desenvolvimento para
              proteger o ativo mais valioso da sua empresa: os dados.
            </p>
          </div>

          <div className="lg:w-2/3 space-y-6">
            {COMPLIANCE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-6 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
                    <item.icon className="w-6 h-6 text-blue-600" />
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
    </div>
  );
}
