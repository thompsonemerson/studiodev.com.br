## Why

O formulário de contato em `/contato` hoje simula o envio com um `setTimeout` — nenhuma solicitação comercial chega à equipe. Integrar com Resend permite receber leads reais por e-mail de forma confiável, sem expor a API key no cliente, aproveitando a infraestrutura Vercel já usada em produção.

## What Changes

- Adicionar endpoint serverless `POST /api/contact` na Vercel que valida o payload, aplica proteção anti-spam (honeypot) e envia e-mail via Resend.
- Substituir o placeholder em `useContactForm` por chamada `fetch` ao endpoint, com estados de loading, sucesso e erro via toasts existentes.
- Configurar variáveis de ambiente (`RESEND_API_KEY`, destinatário e remetente verificado) para dev e produção.
- Enviar e-mail interno para `contato@studiodev.com.br` com os dados do lead; opcionalmente enviar confirmação ao visitante.
- Manter validação client-side, honeypot e limites de tamanho já existentes; replicar validação no servidor.
- Documentar setup do Resend (domínio verificado, env vars) no README.

## Capabilities

### New Capabilities

- `contact-form-submission`: Envio seguro do formulário de contato corporativo do SPA para a equipe comercial via Resend, incluindo validação, anti-spam e feedback ao usuário.

### Modified Capabilities

_(nenhuma — não há specs existentes em `openspec/specs/`)_

## Impact

- **Código**: `src/hooks/useContactForm.ts`, novo `api/contact.ts` (Vercel Function), possível `src/lib/contact.ts` para tipos/contrato compartilhado.
- **Dependências**: `resend` (SDK no serverless function).
- **Infra**: Vercel env vars; domínio `studiodev.com.br` verificado no Resend para `from`.
- **Config**: `vercel.json` pode precisar de ajuste para não reescrever `/api/*` para `index.html`.
- **Segurança**: API key apenas no servidor; honeypot + validação dupla; respostas genéricas em erro para não vazar detalhes internos.
