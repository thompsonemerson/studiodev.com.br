import { Shield } from "lucide-react";
import { LegalPageLayout } from "@/components/shared/LegalPageLayout";
import { PRIVACY_SECTIONS } from "@/content/legal/privacy";
import type { LegalPageConfig } from "@/types/legal";

const PAGE_CONFIG: LegalPageConfig = {
  title: "Política de Privacidade",
  breadcrumb: "Política de Privacidade",
  description:
    "A StudioDev Consulting está comprometida com a transparência e a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
  disclaimer:
    "Este documento é parte integrante das práticas de governança de dados da StudioDev Consulting — CNPJ 19.260.946/0001-15. Em caso de conflito entre este documento e um contrato de prestação de serviços vigente, prevalecerão as disposições contratuais específicas.",
  relatedLinks: [
    { label: "Ver Termos de Uso", href: "/termos-de-uso", variant: "primary" },
    { label: "Fale com nosso DPO", href: "/contato", variant: "muted" },
  ],
};

export function PoliticaPrivacidade() {
  return <LegalPageLayout icon={Shield} config={PAGE_CONFIG} sections={PRIVACY_SECTIONS} />;
}
