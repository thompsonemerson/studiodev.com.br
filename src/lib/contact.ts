export const MAX_LENGTHS = {
  name: 120,
  company: 120,
  email: 254,
  phone: 30,
  message: 2000,
} as const;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const DEFAULT_INTEREST = "Sistemas Corporativos (ERP/CRM)";

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  website: string;
};

export const INITIAL_CONTACT_FORM: ContactPayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: DEFAULT_INTEREST,
  message: "",
  website: "",
};

export function trimContactField(value: string, maxLength: number) {
  return value.trim().slice(0, maxLength);
}

export function sanitizeContactPayload(data: ContactPayload): ContactPayload {
  return {
    name: trimContactField(data.name, MAX_LENGTHS.name),
    company: trimContactField(data.company, MAX_LENGTHS.company),
    email: trimContactField(data.email, MAX_LENGTHS.email).toLowerCase(),
    phone: trimContactField(data.phone, MAX_LENGTHS.phone),
    interest: data.interest,
    message: trimContactField(data.message, MAX_LENGTHS.message),
    website: data.website,
  };
}

export function isHoneypotTriggered(data: ContactPayload) {
  return Boolean(data.website);
}

export function validateContactPayload(data: ContactPayload): string | null {
  if (isHoneypotTriggered(data)) {
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
