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

## Formulário de contato (Resend)

O envio do formulário em `/contato` passa por uma Vercel Serverless Function (`api/contact.ts`) que dispara e-mail via [Resend](https://resend.com). A API key fica apenas no servidor.

### Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

| Variável | Descrição |
|----------|-----------|
| `RESEND_API_KEY` | Chave da API Resend |
| `CONTACT_TO_EMAIL` | Destino (padrão: `contato@studiodev.com.br`) |
| `CONTACT_FROM_EMAIL` | Remetente no subdomínio verificado (ex: `contato@updates.studiodev.com.br`) |

Na Vercel, configure as mesmas variáveis em **Production** e **Preview** (Settings → Environment Variables). O domínio `studiodev.com.br` precisa estar verificado no Resend antes do deploy.

**`.env` vs `.env.local`**

| Arquivo | Quem edita | Conteúdo |
|---------|------------|----------|
| `.env` | Você | Segredos do projeto (`RESEND_API_KEY`, e-mails) |
| `.env.local` | Vercel CLI | Token temporário (`VERCEL_OIDC_TOKEN`) ao rodar `vercel dev` |

Não junte os dois. O `.env.local` é recriado/atualizado pelo Vercel e o token expira. Mantenha suas variáveis só no `.env` (copiado de `.env.example`). Ambos são carregados automaticamente no `vercel dev`.

### E-mail de lead (React Email)

O layout fica em `emails/contact-lead.tsx` e é renderizado na API antes do envio.

**Preview local:**

```bash
npm run email:dev
```

Abre em `http://localhost:3000` com hot reload. Use `ContactLeadEmail.PreviewProps` no componente para dados de exemplo.

**Após editar o layout:** faça deploy — não há template no dashboard do Resend.

### Desenvolvimento local

**Para ver o site** (recomendado):

```bash
npm run dev
```

Abre em `http://localhost:5173`. O site funciona normalmente.

**Para testar o formulário com a API** — use dois terminais:

```bash
# Terminal 1 — só a API serverless
npx vercel dev --listen 3000

# Terminal 2 — frontend
npm run dev
```

O `vite.config.ts` faz proxy de `/api` para `http://localhost:3000`.

> **Atenção:** `npx vercel dev` sozinho quebra o site em dev local. O rewrite SPA do `vercel.json` redireciona até `/src/main.tsx` para `index.html`, e o Vite tenta interpretar HTML como JavaScript — tela branca. Isso é uma limitação conhecida do `vercel dev` com SPAs Vite. Em produção na Vercel funciona corretamente.
