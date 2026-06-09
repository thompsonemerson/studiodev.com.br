import { FileText } from "lucide-react";
import { LegalPageLayout } from "@/components/shared/LegalPageLayout";
import { TERMS_SECTIONS } from "@/content/legal/terms";
import type { LegalPageConfig } from "@/types/legal";

const PAGE_CONFIG: LegalPageConfig = {
  title: "Termos de Uso",
  breadcrumb: "Termos de Uso",
  description:
    "Leia atentamente os termos e condições que regem o uso deste site. Ao navegar nossas páginas, você concorda com as disposições abaixo.",
  disclaimer:
    "Este documento é parte integrante das condições gerais de uso dos serviços da StudioDev Consulting — CNPJ 19.260.946/0001-15. Em caso de contratação formal de serviços, prevalecerão as disposições do instrumento contratual específico sobre estes Termos de Uso gerais.",
  relatedLinks: [
    { label: "Ver Política de Privacidade", href: "/politica-de-privacidade", variant: "primary" },
    { label: "Fale com o jurídico", href: "/contato", variant: "muted" },
  ],
};

export function TermosDeUso() {
  return <LegalPageLayout icon={FileText} config={PAGE_CONFIG} sections={TERMS_SECTIONS} />;
}
