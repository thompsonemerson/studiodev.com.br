import {
  Blocks,
  BrainCircuit,
  CheckCircle2,
  Cog,
  Cpu,
  Database,
  FileText,
  Globe,
  LifeBuoy,
  RefreshCw,
  Server,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";

export const SERVICES: { title: string; icon: LucideIcon; desc: string }[] = [
  {
    title: "Sistemas Corporativos",
    icon: Cog,
    desc: "Desenvolvimento de ERPs internos, CRMs personalizados, sistemas de gestão e backoffices adaptados aos processos únicos da sua empresa.",
  },
  {
    title: "Desenvolvimento Web",
    icon: Globe,
    desc: "Plataformas SaaS, portais B2B/B2C, marketplaces e áreas logadas construídas com as tecnologias mais robustas do mercado.",
  },
  {
    title: "Aplicativos Mobile",
    icon: Smartphone,
    desc: "Soluções nativas e híbridas (iOS e Android) para operações de campo, produtos digitais e relacionamento com o cliente.",
  },
  {
    title: "Integração de Sistemas",
    icon: Blocks,
    desc: "Conexão de sistemas legados, desenvolvimento de APIs corporativas, e integração com ERPs (SAP, TOTVS) e ferramentas de mercado.",
  },
  {
    title: "Automação e RPA",
    icon: Server,
    desc: "Mapeamento e automação de fluxos operacionais repetitivos, processamento de dados em lote e geração de relatórios.",
  },
  {
    title: "Inteligência Artificial",
    icon: Cpu,
    desc: "Implementação de assistentes inteligentes, análise de dados avançada, OCR e integração de LLMs em processos de negócio.",
  },
];

export const CTO_FEATURES = [
  "Arquitetura de Soluções",
  "Governança e Compliance de TI",
  "Liderança e Mentoria de Times",
  "Avaliação de Tecnologias",
] as const;

export const TECH_STACK_CATEGORIES = [
  {
    icon: Globe,
    title: "Front-end",
    items: ["React", "Next.js", "Vue.js", "TypeScript"],
  },
  {
    icon: Database,
    title: "Back-end",
    items: ["Node.js", "Python", "Java", "PHP & Laravel"],
  },
  {
    icon: Cpu,
    title: "Cloud & DevOps",
    items: ["AWS", "DigitalOcean", "Docker", "Pipelines CI/CD"],
  },
  {
    icon: Server,
    title: "Banco de Dados",
    items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["React Native", "Flutter", "SwiftUI"],
  },
] as const;

export const DELIVERY_STANDARDS: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: FileText,
    title: "Documentação Exaustiva",
    desc: "Manuais de arquitetura, diagramas de infraestrutura e documentação de API completas (Swagger/OpenAPI) entregues com o código.",
  },
  {
    icon: RefreshCw,
    title: "CI/CD & Qualidade Automática",
    desc: "Pipelines de integração contínua garantindo que todo código passe por testes automatizados e análise estática antes de atingir a produção.",
  },
  {
    icon: Users,
    title: "Transferência de Conhecimento",
    desc: "Sessões de handoff e treinamentos dedicados para a sua equipe técnica interna assumir o controle da plataforma de forma independente.",
  },
  {
    icon: LifeBuoy,
    title: "Manutenção & SLA de Resolução",
    desc: "Contratos de suporte e evolução contínua com tempo de resposta garantido para incidentes críticos (L1, L2, L3) no pós-go-live.",
  },
];

export { BrainCircuit, CheckCircle2 };
