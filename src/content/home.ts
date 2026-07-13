import {
  Building2,
  Bot,
  BrainCircuit,
  Cog,
  Cpu,
  Database,
  FileSearch,
  Laptop,
  Server,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const HOME_STATS = [
  { label: "Projetos Entregues", value: "85+" },
  { label: "Tecnologias", value: "20+" },
  { label: "Clientes Corporativos", value: "40+" },
  { label: "Anos de Experiência", value: "10+" },
] as const;

export const HOME_SERVICES: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: Cog,
    title: "Sistemas Corporativos",
    desc: "Desenvolvimento de ERPs, CRMs e plataformas internas sob medida para otimizar sua operação.",
  },
  {
    icon: Building2,
    title: "Plataformas Digitais",
    desc: "Criação de portais, SaaS e aplicativos móveis focados em performance e escalabilidade.",
  },
  {
    icon: BrainCircuit,
    title: "Automação e IA",
    desc: "Automações com Power Automate e n8n, LLMs e RAG embutidos nos processos — para reduzir custo e ciclo operacional.",
  },
];

export const HOME_AI: {
  title: string;
  description: string;
  pillars: { icon: LucideIcon; title: string; desc: string }[];
} = {
  title: "IA aplicada à operação — sem teatro",
  description:
    "Integramos automações, modelos e conhecimento interno aos sistemas que você já usa. Critério de engenharia: onde o modelo gera eficiência mensurável — e onde código clássico resolve melhor.",
  pillars: [
    {
      icon: Workflow,
      title: "Automações",
      desc: "Fluxos com Power Automate e n8n conectando ERP, CRM, e-mail e planilhas — menos retrabalho, mais previsibilidade.",
    },
    {
      icon: Bot,
      title: "IA nos sistemas",
      desc: "Assistentes internos, classificação, OCR e decisão assistida embutidos em backoffices e produtos digitais.",
    },
    {
      icon: FileSearch,
      title: "RAG e conhecimento",
      desc: "Busca semântica em documentos, políticas e bases internas — respostas com contexto e rastreabilidade.",
    },
  ],
};

export const HOME_METHODOLOGY = [
  {
    step: "01",
    title: "Discovery Técnico",
    desc: "Mapeamento aprofundado de requisitos, arquitetura de sistemas e definição de viabilidade.",
  },
  {
    step: "02",
    title: "Design de Solução",
    desc: "Criação de protótipos, modelagem de dados e validação de regras de negócio.",
  },
  {
    step: "03",
    title: "Desenvolvimento",
    desc: "Engenharia ágil com foco em código limpo, testes automatizados e segurança.",
  },
  {
    step: "04",
    title: "Operação e Escala",
    desc: "Monitoramento contínuo, manutenção evolutiva e suporte especializado pós-lançamento.",
  },
] as const;

export const HOME_TECH_STACK: {
  icon: LucideIcon;
  title: string;
  tools: string;
}[] = [
  { icon: Laptop, title: "Frontend", tools: "React, Next.js, Vue, TypeScript" },
  { icon: Database, title: "Backend", tools: "Node, Python, Java, PHP, Laravel" },
  { icon: Cpu, title: "Cloud & Devops", tools: "AWS, DigitalOcean, Docker, CI/CD" },
  { icon: Server, title: "Banco de Dados", tools: "SQL, MySQL, PostgreSQL, MongoDB" },
  { icon: Smartphone, title: "Mobile", tools: "React Native, Flutter, SwiftUI" },
  {
    icon: Workflow,
    title: "IA & Automação",
    tools: "n8n, Power Automate, OpenAI / Azure OpenAI, Python",
  },
];

export const HOME_WHY_US = [
  {
    title: "Visão de Negócio",
    desc: "Compreendemos sua operação antes de propor arquiteturas.",
  },
  {
    title: "Engenharia Sólida",
    desc: "Código limpo, escalável e construído para durar anos.",
  },
  {
    title: "CTO as a Service",
    desc: "Apoio executivo para decisões técnicas críticas.",
  },
] as const;

export const HOME_IMAGES = {
  hero: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3ODAxNTcxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  meeting:
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlb3BsZSUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3ODAxNTcxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  dashboard:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
} as const;
