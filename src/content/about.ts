import { Award, BookOpenCheck, FileCode2, Lock, Shield, Users, type LucideIcon } from "lucide-react";

export const ABOUT_VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Shield,
    title: "Visão de Negócio",
    desc: "Entendemos o seu mercado e os desafios da operação antes de propor tecnologia. Não vendemos IA por tendência: avaliamos onde modelo, automação ou integração gera eficiência — e onde código clássico resolve melhor.",
  },
  {
    icon: Award,
    title: "Engenharia Sólida",
    desc: "Projetamos soluções pensando em manutenção de longo prazo, escalabilidade segura e redução de débito técnico.",
  },
  {
    icon: Users,
    title: "Parceria de Longo Prazo",
    desc: "Acompanhamos a evolução dos produtos após a entrega inicial, assumindo compromisso com a estabilidade e o crescimento das soluções.",
  },
];

export const COMPLIANCE_ITEMS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Lock,
    title: "Conformidade LGPD & GDPR",
    desc: "Arquiteturas orientadas à privacidade (Privacy by Design). Criptografia de dados sensíveis em repouso e em trânsito, garantindo conformidade legal desde o primeiro dia.",
  },
  {
    icon: Shield,
    title: "Segurança da Informação",
    desc: "Testes e validações periódicas, proteção contra as principais vulnerabilidades da web (OWASP Top 10) e gestão rigorosa de identidades e acessos (IAM).",
  },
  {
    icon: FileCode2,
    title: "Governança e Código Limpo",
    desc: "Revisões por pares obrigatórias (Code Reviews), análise estática de código automatizada (SonarQube) e cobertura de testes para minimizar riscos em produção.",
  },
  {
    icon: BookOpenCheck,
    title: "Acordos de Confidencialidade (NDA)",
    desc: "Tratamos o sigilo industrial com absoluta seriedade. Todos os nossos projetos são resguardados por contratos rigorosos e segregação estrita de acesso.",
  },
];

export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBtZWV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODAxNTcxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080";
