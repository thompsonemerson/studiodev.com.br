# StudioDev — Site Institucional

Site institucional da StudioDev Consulting, construído com React, TypeScript, Vite e Tailwind CSS.

## Scripts

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run typecheck  # verificação de tipos (CI)
npm run build      # typecheck + build de produção
npm run preview    # preview do build
```

## Estrutura

```
src/
├── App.tsx              # bootstrap do router
├── routes.tsx           # definição de rotas (lazy)
├── main.tsx             # entry point
│
├── lib/                 # utilitários puros (cn, helpers)
├── config/              # constantes da aplicação (site, navegação)
├── types/               # contratos TypeScript compartilhados
├── content/             # textos e dados estáticos (sem JSX)
├── hooks/               # lógica reutilizável com React
│
├── components/
│   ├── ui/              # primitivos do design system (Button, Input...)
│   ├── shared/          # blocos reutilizados em 2+ páginas
│   └── layout/          # shell do site (header, footer, AppLayout)
│
├── features/            # UI específica por domínio
│   ├── home/            # seções da página inicial
│   └── contact/         # formulário de contato
│
└── pages/               # rotas finas (só composição)
```

### Onde colocar código novo

| Tipo | Pasta |
|------|-------|
| Função pura (`cn`, validator) | `lib/` |
| Copy estático, arrays de conteúdo | `content/` |
| Hook com estado/efeito | `hooks/` |
| Botão, Input, Badge (átomo) | `components/ui/` |
| Bloco usado em várias páginas | `components/shared/` |
| Header, footer, layout global | `components/layout/` |
| Seção de uma página específica | `features/{domínio}/` |
| Nova rota | `pages/` + `routes.tsx` |
