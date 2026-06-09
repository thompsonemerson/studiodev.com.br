import { useCallback, useEffect, useRef, useState } from "react";
import { toastError, toastSuccess } from "@/lib/toast";

const MAX_LENGTHS = {
  name: 120,
  company: 120,
  email: 254,
  phone: 30,
  message: 2000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  website: string;
};

const INITIAL_FORM: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "Sistemas Corporativos (ERP/CRM)",
  message: "",
  website: "",
};

function trimField(value: string, maxLength: number) {
  return value.trim().slice(0, maxLength);
}

function validateForm(data: ContactFormData): string | null {
  if (data.website) {
    return "Não foi possível enviar o formulário.";
  }

  if (!data.name || !data.company || !data.email || !data.message) {
    return "Preencha todos os campos obrigatórios.";
  }

  if (!EMAIL_REGEX.test(data.email)) {
    return "Informe um e-mail corporativo válido.";
  }

  return null;
}

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(form);

  useEffect(() => {
    formRef.current = form;
  }, [form]);

  const updateField = useCallback(
    <K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) => {
      setForm((current) => ({ ...current, [field]: value }));
    },
    [],
  );

  const handleSubmit = useCallback((event: { preventDefault: () => void }) => {
    event.preventDefault();

    const current = formRef.current;
    const payload: ContactFormData = {
      name: trimField(current.name, MAX_LENGTHS.name),
      company: trimField(current.company, MAX_LENGTHS.company),
      email: trimField(current.email, MAX_LENGTHS.email).toLowerCase(),
      phone: trimField(current.phone, MAX_LENGTHS.phone),
      interest: current.interest,
      message: trimField(current.message, MAX_LENGTHS.message),
      website: current.website,
    };

    const error = validateForm(payload);
    if (error) {
      void toastError(error);
      return;
    }

    setLoading(true);

    // Placeholder até integração com backend/CRM.
    window.setTimeout(() => {
      setLoading(false);
      setForm(INITIAL_FORM);
      void toastSuccess(
        "Solicitação enviada. Um consultor entrará em contato comercial em breve.",
      );
    }, 1500);
  }, []);

  return { form, loading, updateField, handleSubmit };
}
