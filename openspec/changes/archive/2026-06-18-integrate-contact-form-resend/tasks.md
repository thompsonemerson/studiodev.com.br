## 1. Setup e dependências

- [x] 1.1 Instalar `resend` como dependência de produção
- [x] 1.2 Criar `.env.example` com `RESEND_API_KEY`, `CONTACT_TO_EMAIL` e `CONTACT_FROM_EMAIL`
- [ ] 1.3 Configurar variáveis na Vercel (Production/Preview) após obter API key e verificar domínio no Resend

## 2. Contrato e validação compartilhada

- [x] 2.1 Criar `src/lib/contact.ts` com tipos `ContactPayload`, constantes `MAX_LENGTHS` e função `validateContactPayload`
- [x] 2.2 Refatorar `useContactForm.ts` para importar tipos/validação de `src/lib/contact.ts` (sem mudar comportamento ainda)

## 3. API serverless (Resend)

- [x] 3.1 Criar `api/contact.ts` com handler `POST` que rejeita outros métodos com 405
- [x] 3.2 Implementar validação server-side (incluindo honeypot silencioso com resposta 200)
- [x] 3.3 Integrar Resend para enviar e-mail interno para `CONTACT_TO_EMAIL` com `reply-to` do visitante
- [x] 3.4 Retornar respostas JSON padronizadas (`200` sucesso, `400` validação, `500` erro genérico)
- [x] 3.5 Verificar que `vercel.json` não intercepta `/api/contact` (ajustar rewrite se necessário)

## 4. Integração no formulário (client)

- [x] 4.1 Substituir `setTimeout` em `useContactForm` por `fetch("/api/contact")` com `try/catch/finally`
- [x] 4.2 Mapear respostas da API para `toastSuccess` / `toastError` conforme spec
- [x] 4.3 Garantir reset do formulário apenas em sucesso; manter dados em erro
- [x] 4.4 Manter estados de loading (`Processando...`, botão disabled)

## 5. Desenvolvimento local e documentação

- [x] 5.1 Documentar no README o fluxo de dev com `vercel dev` e variáveis de ambiente
- [x] 5.2 (Opcional) Adicionar proxy `/api` no `vite.config.ts` para dev com Vite + Vercel em paralelo

## 6. Validação final

- [x] 6.1 Rodar `npm run typecheck` e `npm run build` sem erros
- [ ] 6.2 Testar envio real em Preview Vercel e confirmar recebimento em `contato@studiodev.com.br`
- [x] 6.3 Testar cenários de erro: campo vazio, e-mail inválido, honeypot preenchido, API indisponível
