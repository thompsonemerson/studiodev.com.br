# Napkin Runbook

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-06-09] CI must pass typecheck + build**
   Do instead: run `npm run typecheck` then `npm run build` before merging.

## Domain Behavior Guardrails
1. **[2026-06-09] SPA reload needs host fallback**
   Do instead: keep `vercel.json`, `public/_redirects`, `public/.htaccess` so `/servicos` etc. serve `index.html` in production.

2. **[2026-06-09] Layered src/ structure**
   Do instead: `lib/` utils, `content/` copy, `components/ui|shared|layout/`, `features/{domain}/`, `pages/` routes.

2. **[2026-06-09] cn() lives in lib/cn.ts**
   Do instead: never put utils inside `components/ui/`.

3. **[2026-06-09] Contact form is client-only placeholder**
   Do instead: wire `useContactForm` to backend/CRM when API exists; keep honeypot + validation.

4. **[2026-06-09] Animations are CSS-first, no motion lib**
   Do instead: use `src/styles/animations.css` + `Reveal` (IntersectionObserver); hero LCP via `OptimizedImage priority` + preload in `index.html`.

5. **[2026-06-09] Toasts load on demand**
   Do instead: call `toastError`/`toastSuccess` from `lib/toast.ts`; never import `sonner` directly in layout.

## User Directives
1. **[2026-07-13] Copy: cirurgia, não reescrita**
   Do instead: priorizar remoção de "—"; manter tom técnico; mudar pouco; não casualizar nem apagar jargão de engenharia.

2. **[2026-06-09] Componentize; extract logic to hooks**
   Do instead: new behavior → `hooks/`; cross-page UI → `components/shared/`; page-specific → `features/`.
