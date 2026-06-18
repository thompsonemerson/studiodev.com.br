import { useCallback, useEffect, useRef, useState } from "react";
import {
  INITIAL_CONTACT_FORM,
  sanitizeContactPayload,
  validateContactPayload,
  type ContactPayload,
} from "@/lib/contact";
import { toastError, toastSuccess } from "@/lib/toast";

export type ContactFormData = ContactPayload;

export type ContactFormStatus =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const SUCCESS_MESSAGE =
  "Solicitação enviada. Um consultor entrará em contato comercial em breve.";

const API_ERROR_MESSAGE =
  "Não foi possível enviar sua solicitação. Tente novamente ou entre em contato pelo e-mail comercial.";

const NETWORK_ERROR_MESSAGE =
  "Falha na conexão. Verifique sua internet e tente novamente.";

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_CONTACT_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<ContactFormStatus>({ type: "idle" });
  const formRef = useRef(form);

  useEffect(() => {
    formRef.current = form;
  }, [form]);

  const updateField = useCallback(
    <K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) => {
      setStatus({ type: "idle" });
      setForm((current) => ({ ...current, [field]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const payload = sanitizeContactPayload(formRef.current);
    const error = validateContactPayload(payload);

    if (error) {
      setStatus({ type: "error", message: error });
      void toastError(error);
      return;
    }

    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: { ok?: boolean; error?: string } | null = null;

      try {
        data = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        data = null;
      }

      if (!response.ok || !data?.ok) {
        const message = data?.error ?? API_ERROR_MESSAGE;
        setStatus({ type: "error", message });
        void toastError(message);
        return;
      }

      setForm(INITIAL_CONTACT_FORM);
      setStatus({ type: "success", message: SUCCESS_MESSAGE });
      void toastSuccess(SUCCESS_MESSAGE);
    } catch {
      setStatus({ type: "error", message: NETWORK_ERROR_MESSAGE });
      void toastError(NETWORK_ERROR_MESSAGE);
    } finally {
      setLoading(false);
    }
  }, []);

  return { form, loading, status, updateField, handleSubmit };
}
