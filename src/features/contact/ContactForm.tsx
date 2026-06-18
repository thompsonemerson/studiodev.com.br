import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";

const INTEREST_OPTIONS = [
  "Sistemas Corporativos (ERP/CRM)",
  "Desenvolvimento Web / Portais",
  "Aplicativos Mobile",
  "Integração de Sistemas (APIs)",
  "Inteligência Artificial / Automação",
  "CTO as a Service",
] as const;

const inputClassName =
  "w-full border border-slate-300 rounded px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all";

export function ContactForm() {
  const { form, loading, status, updateField, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6" noValidate>
      <div className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-slate-700">
            Nome Completo
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            className={inputClassName}
            placeholder="Seu nome"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-bold text-slate-700">
            Empresa
          </label>
          <input
            id="company"
            name="company"
            required
            maxLength={120}
            className={inputClassName}
            placeholder="Nome da organização"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-slate-700">
            E-mail Corporativo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            className={inputClassName}
            placeholder="nome@empresa.com.br"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold text-slate-700">
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={30}
            className={inputClassName}
            placeholder="(00) 00000-0000"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="interest" className="text-sm font-bold text-slate-700">
          Área de Interesse
        </label>
        <select
          id="interest"
          name="interest"
          className={`${inputClassName} bg-white`}
          value={form.interest}
          onChange={(e) => updateField("interest", e.target.value)}
        >
          {INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-slate-700">
          Descrição do Cenário
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          className={`${inputClassName} resize-none`}
          placeholder="Descreva os desafios atuais da sua operação e o que espera resolver..."
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
        />
      </div>

      <div className="pt-2 space-y-4">
        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" disabled={loading}>
          {loading ? "Processando..." : "Enviar Solicitação Comercial"}
        </Button>

        {status.type === "success" && (
          <p
            role="status"
            className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
          >
            {status.message}
          </p>
        )}

        {status.type === "error" && (
          <p
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
