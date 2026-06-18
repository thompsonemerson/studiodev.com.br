## Context

O site é um SPA React + Vite hospedado na Vercel (`vercel.json` com rewrite catch-all para `index.html`). O formulário de contato em `src/features/contact/ContactForm.tsx` usa `useContactForm`, que hoje valida no cliente mas simula envio com `setTimeout`. O MCP Resend já está configurado no projeto (`.cursor/mcp.json` com `resend-mcp`), indicando intenção de usar Resend como provedor de e-mail.

Não existe backend nem pasta `api/` hoje. A API key do Resend não pode ir para o bundle do cliente.

## Goals / Non-Goals

**Goals:**

- Entregar leads do formulário para `contato@studiodev.com.br` via Resend de forma confiável.
- Manter validação client-side existente e adicionar validação server-side equivalente.
- Preservar honeypot anti-spam e UX atual (toasts, loading, reset no sucesso).
- Isolar segredos (`RESEND_API_KEY`) exclusivamente no serverless function.
- Permitir teste local do fluxo completo com variáveis em `.env`.

**Non-Goals:**

- CRM, pipeline de vendas ou armazenamento persistente de leads (banco de dados).
- CAPTCHA/reCAPTCHA ou rate limiting avançado (pode ser evolução futura).
- E-mail de confirmação automática ao visitante (opcional em fase 2).
- Migrar o projeto para Next.js ou outro framework full-stack.

## Decisions

### 1. Vercel Serverless Function em `api/contact.ts`

**Escolha:** Criar `api/contact.ts` na raiz do projeto (convenção Vercel) exportando um handler `POST`.

**Por quê:** O deploy já é Vercel; serverless functions coexistem com o SPA sem novo serviço. A rota `/api/contact` é exposta automaticamente e tem precedência sobre o rewrite SPA.

**Alternativas consideradas:**
- *Resend direto do cliente*: descartado — expõe API key.
- *Serviço externo (Formspree, etc.)*: descartado — usuário pediu Resend explicitamente.
- *Edge Function*: possível, mas Node runtime é mais simples com SDK Resend e validação.

### 2. SDK `resend` apenas no serverless function

**Escolha:** Adicionar `resend` como dependência de produção; importar somente em `api/contact.ts`.

**Por quê:** SDK oficial, tipagem, manutenção simples. O bundle Vite não inclui código de `api/` porque fica fora de `src/`.

### 3. Contrato de payload compartilhado via `src/lib/contact.ts`

**Escolha:** Extrair tipos (`ContactPayload`), constantes (`MAX_LENGTHS`, `INTEREST_OPTIONS`) e função `validateContactPayload` para `src/lib/contact.ts`. O hook importa do lib; o API handler duplica a validação inline ou importa de um módulo compartilhado se a estrutura Vercel permitir.

**Por quê:** Evita drift entre validação client e server. Se import cross-boundary for problemático no build Vercel, duplicar validação mínima no handler (mesmas regras, comentário de sincronização).

**Nota prática:** Vercel Functions podem importar de `src/lib/` se configurado; caso contrário, manter validação espelhada em `api/contact.ts` com os mesmos limites documentados.

### 4. Variáveis de ambiente

| Variável | Onde | Descrição |
|----------|------|-----------|
| `RESEND_API_KEY` | Server only | Chave da API Resend |
| `CONTACT_TO_EMAIL` | Server only | Destino (default: `contato@studiodev.com.br`) |
| `CONTACT_FROM_EMAIL` | Server only | Remetente verificado (ex: `contato@studiodev.com.br`) |

**Escolha:** Sem prefixo `VITE_` — nunca expor ao cliente. Documentar em `.env.example`.

### 5. Formato do e-mail interno

**Escolha:** E-mail HTML simples + texto plano com assunto `Nova solicitação comercial — {empresa}` contendo todos os campos formatados. `reply-to` definido como e-mail do visitante para facilitar resposta direta.

**Por quê:** Fluxo comercial natural; equipe responde pelo cliente de e-mail habitual.

### 6. Respostas HTTP da API

| Status | Quando | Body |
|--------|--------|------|
| `200` | Sucesso real ou honeypot (spam) | `{ "ok": true }` |
| `400` | Validação falhou | `{ "ok": false, "error": "..." }` mensagem genérica |
| `405` | Método não POST | `{ "ok": false }` |
| `500` | Falha Resend/interna | `{ "ok": false, "error": "..." }` mensagem genérica |

**Escolha:** Honeypot retorna `200` (não revelar detecção). Erros internos logados no servidor, mensagem genérica ao cliente.

### 7. Atualização de `useContactForm`

**Escolha:** Substituir `setTimeout` por:

```ts
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
```

Tratar `res.ok`, parsear JSON, chamar `toastSuccess` / `toastError` conforme spec. Manter `loading` com `try/finally`.

### 8. Desenvolvimento local

**Escolha:** Documentar `npx vercel dev` para testar API + SPA juntos. Opcionalmente adicionar proxy no `vite.config.ts`:

```ts
server: {
  proxy: {
    "/api": "http://localhost:3000",
  },
},
```

quando rodar `vercel dev` na porta 3000 em paralelo com `vite`.

**Alternativa mais simples:** Usar apenas `vercel dev`, que serve Vite build + API num processo.

### 9. Ajuste de `vercel.json`

**Escolha:** Manter rewrite catch-all; rotas `/api/*` são tratadas nativamente pela Vercel antes do rewrite. Validar em deploy que `/api/contact` responde (não retorna `index.html`).

Se necessário, adicionar exceção explícita:

```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 10. CORS

**Escolha:** Não necessário — SPA e API estão no mesmo domínio (`studiodev.com.br`). Handler define `Content-Type: application/json` apenas.

## Risks / Trade-offs

| Risco | Mitigação |
|-------|-----------|
| Domínio não verificado no Resend | Verificar `studiodev.com.br` no dashboard Resend antes do deploy; testar com `resend dev` / sandbox |
| Spam sem rate limit | Honeypot + validação dupla; rate limit pode ser adicionado depois via Vercel KV ou middleware |
| API key vazando em logs | Nunca logar payload com secrets; usar env vars na Vercel |
| Dev local sem `vercel dev` | Documentar fluxo; formulário falhará graciosamente com toast de erro |
| Rewrite SPA engolindo `/api` | Testar endpoint pós-deploy; ajustar `vercel.json` se necessário |
| Validação client/server divergir | Centralizar regras em `src/lib/contact.ts` ou documentar sincronização |

## Migration Plan

1. Criar conta/chave Resend e verificar domínio `studiodev.com.br`.
2. Adicionar env vars na Vercel (Production + Preview).
3. Implementar `api/contact.ts` e atualizar `useContactForm`.
4. Deploy em Preview; testar envio real com dados de teste.
5. Validar recebimento em `contato@studiodev.com.br`.
6. Promover para Production.
7. **Rollback:** Reverter deploy; formulário volta a falhar graciosamente (ou reverter hook para placeholder temporariamente).

## Open Questions

1. **E-mail de confirmação ao visitante** — incluir na v1 ou deixar só notificação interna? _(Recomendação: só interno na v1; confirmação em follow-up.)_
2. **Remetente exato** — `contato@studiodev.com.br` ou `noreply@studiodev.com.br`? Depende do que estiver verificado no Resend.
3. **Dev workflow preferido** — `vercel dev` único ou `vite` + proxy? A definir na implementação conforme DX do time.
