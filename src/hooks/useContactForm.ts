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

const CAPTCHA_REQUIRED_MESSAGE =
  "Confirme que você não é um robô antes de enviar.";

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_CONTACT_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<ContactFormStatus>({ type: "idle" });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const formRef = useRef(form);
  const turnstileTokenRef = useRef(turnstileToken);
  const resetTurnstileRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    formRef.current = form;
  }, [form]);

  useEffect(() => {
    turnstileTokenRef.current = turnstileToken;
  }, [turnstileToken]);

  const updateField = useCallback(
    <K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) => {
      setStatus({ type: "idle" });
      setForm((current) => ({ ...current, [field]: value }));
    },
    [],
  );

  const onTurnstileSuccess = useCallback((token: string) => {
    setTurnstileToken(token);
    setStatus({ type: "idle" });
  }, []);

  const onTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const onTurnstileError = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const registerTurnstileReset = useCallback((reset: (() => void) | null) => {
    resetTurnstileRef.current = reset;
  }, []);

  const handleSubmit = useCallback(async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const payload = sanitizeContactPayload(formRef.current);
    const error = validateContactPayload(payload);

    if (error) {
      setStatus({ type: "error", message: error });
      void toastError(error);
      return;
    }

    const token = turnstileTokenRef.current;
    if (!token) {
      setStatus({ type: "error", message: CAPTCHA_REQUIRED_MESSAGE });
      void toastError(CAPTCHA_REQUIRED_MESSAGE);
      return;
    }

    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, turnstileToken: token }),
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
        setTurnstileToken(null);
        resetTurnstileRef.current?.();
        return;
      }

      setForm(INITIAL_CONTACT_FORM);
      setTurnstileToken(null);
      resetTurnstileRef.current?.();
      setStatus({ type: "success", message: SUCCESS_MESSAGE });
      void toastSuccess(SUCCESS_MESSAGE);
    } catch {
      setStatus({ type: "error", message: NETWORK_ERROR_MESSAGE });
      void toastError(NETWORK_ERROR_MESSAGE);
      setTurnstileToken(null);
      resetTurnstileRef.current?.();
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    form,
    loading,
    status,
    turnstileToken,
    updateField,
    handleSubmit,
    onTurnstileSuccess,
    onTurnstileExpire,
    onTurnstileError,
    registerTurnstileReset,
  };
}
