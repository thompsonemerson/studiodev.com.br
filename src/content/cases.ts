export const CASES = [
  {
    title: "Plataforma Integrada de Gestão Operacional",
    industry: "Logística & Transporte",
    challenge:
      "A empresa dependia de processos manuais descentralizados, resultando em falhas de comunicação, alto tempo operacional e retrabalho na consolidação de dados financeiros e operacionais.",
    solution:
      "Desenvolvimento de um ERP web customizado, focado na jornada do usuário interno. O sistema centralizou pedidos, rastreamento e faturamento, integrando-se via API ao sistema financeiro legado da companhia.",
    result:
      "Redução de 40% no tempo de processamento de pedidos e eliminação total de erros de faturamento manual.",
  },
  {
    title: "Automação Inteligente de Backoffice",
    industry: "Serviços Financeiros",
    challenge:
      "Equipe sobrecarregada com análise manual de documentos não estruturados (PDFs, formulários e anexos), gerando gargalos e atrasos nas aprovações de crédito.",
    solution:
      "Pipeline de automação com OCR e LLM: extração estruturada de dados dos documentos, cruzamento com bases internas e públicas, e pré-aprovação assistida nos fluxos de crédito, com trilha de auditoria para a equipe humana.",
    result:
      "Aumento da capacidade de análise em 300% sem necessidade de aumento de quadro de funcionários.",
  },
  {
    title: "Middleware Corporativo de Sincronização",
    industry: "Varejo B2B",
    challenge:
      "Silos de informação severos entre a plataforma de e-commerce, o CRM (Salesforce) e o ERP (SAP), forçando a equipe comercial a realizar digitação dupla diariamente.",
    solution:
      "Construção de uma arquitetura de microsserviços baseada em mensageria para atuar como barramento de integração, garantindo que o estoque, pedidos e status de clientes estivessem sempre sincronizados em tempo real.",
    result:
      "Garantia de integridade de dados e liberação de 15 horas semanais por vendedor.",
  },
] as const;

export const AI_SCENARIOS = [
  {
    title: "Base de conhecimento com RAG",
    problem:
      "Equipes de suporte e operação perdem tempo buscando procedimentos em pastas, wikis e e-mails desatualizados.",
    approach:
      "Indexação semântica de documentos e políticas internas; assistente com respostas contextualizadas e referência à fonte, integrado ao canal que a equipe já usa.",
  },
  {
    title: "Classificação e roteamento de demanda",
    problem:
      "Alto volume de e-mails e chamados sem triagem consistente, gerando fila e SLA comprometido.",
    approach:
      "Modelo de classificação + regras de negócio: priorização, roteamento para filas corretas e rascunhos de resposta, com revisão humana onde o risco exige.",
  },
  {
    title: "Orquestração ERP ↔ CRM ↔ escritório",
    problem:
      "Dados e aprovações travados entre sistemas e planilhas; trabalho manual para manter o fluxo vivo.",
    approach:
      "Automações com Power Automate ou n8n no meio do processo e, quando faz sentido, LLM para extrair ou resumir conteúdo antes de gravar no sistema de registro.",
  },
] as const;

export const CASE_TESTIMONIAL = {
  quote:
    "A StudioDev possui uma visão de negócio rara no mercado técnico. Eles não vieram vender horas de programação; vieram entender nosso gargalo logístico antes de propor qualquer arquitetura. A entrega foi pontual e a qualidade do código nos deu segurança para escalar.",
  author: "Diretor de Operações Logísticas",
  role: "Cliente Enterprise",
} as const;
