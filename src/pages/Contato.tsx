import { Building, Mail, Phone } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ContactForm } from "@/features/contact/ContactForm";
import { PageHeader } from "@/components/shared/PageHeader";
import { SITE } from "@/config/site";

export function Contato() {
  return (
    <PageContainer>
      <PageHeader
        badge="Contato Corporativo"
        title="Fale com um Especialista"
        description="Nossa equipe de consultoria e engenharia está preparada para entender seus desafios e propor arquiteturas robustas para sua operação."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Canais de Atendimento</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" strokeWidth={1.75} />
                <div>
                  <p className="text-sm font-bold text-slate-900">E-mail Comercial</p>
                  <a
                    href={`mailto:${SITE.emails.contact}`}
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    {SITE.emails.contact}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" strokeWidth={1.75} />
                <div>
                  <p className="text-sm font-bold text-slate-900">Telefone</p>
                  <p className="text-sm text-slate-600">{SITE.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-lg p-8 shadow-md">
            <Building className="w-8 h-8 text-blue-400 mb-4" strokeWidth={1.75} />
            <h3 className="text-lg font-bold mb-2">Para Empresas</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Atendemos organizações de médio e grande porte, focando em projetos de missão crítica,
              integrações complexas e modernização de legado.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Solicitar Reunião Técnica</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
