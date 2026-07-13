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
  Workflow,
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
    icon: Workflow,
    desc: "Mapeamento e orquestração de fluxos com Power Automate, n8n e RPA — processamento em lote, integrações e relatórios sem retrabalho manual.",
  },
  {
    title: "Inteligência Artificial",
    icon: BrainCircuit,
    desc: "Assistentes internos, OCR, LLMs e RAG embutidos em sistemas e processos — com arquitetura, governança e ownership do cliente.",
  },
];

export const AI_CAPABILITIES: {
  title: string;
  description: string;
  offerings: { title: string; desc: string }[];
} = {
  title: "Inteligência Artificial & Automação Inteligente",
  description:
    "Projetamos e embutimos capacidade de IA em aplicações e fluxos operacionais — com arquitetura sólida, segurança e transferência de conhecimento.",
  offerings: [
    {
      title: "Automações",
      desc: "Power Automate, n8n e orquestração entre ERP, CRM, e-mail e planilhas — fluxos previsíveis e auditáveis.",
    },
    {
      title: "IA generativa",
      desc: "Assistentes internos, geração e revisão de conteúdo, suporte a atendimento e copilots no backoffice.",
    },
    {
      title: "RAG e dados",
      desc: "Busca semântica em documentos, políticas e tickets; respostas com fonte; OCR + LLM em pipelines de documento.",
    },
  ],
};

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
  {
    icon: BrainCircuit,
    title: "IA & Automação",
    items: [
      "Power Automate",
      "n8n",
      "OpenAI / Azure OpenAI",
      "Python",
      "Vector DB / embeddings",
    ],
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
