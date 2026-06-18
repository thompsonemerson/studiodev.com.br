import { render } from "@react-email/render";
import ContactLeadEmail, { type ContactLeadEmailProps } from "../emails/contact-lead";
import type { ContactPayload } from "../src/lib/contact";

export function toContactLeadEmailProps(data: ContactPayload): ContactLeadEmailProps {
  return {
    clientName: data.name,
    company: data.company,
    clientEmail: data.email,
    phone: data.phone || "Não informado",
    interest: data.interest,
    message: data.message,
  };
}

export function buildContactLeadSubject(company: string) {
  return `Nova solicitação comercial — ${company}`;
}

export function buildContactLeadText(data: ContactPayload) {
  const phoneLine = data.phone ? `Telefone: ${data.phone}\n` : "Telefone: Não informado\n";

  return [
    "Nova solicitação comercial pelo site",
    "",
    `Nome: ${data.name}`,
    `Empresa: ${data.company}`,
    `E-mail: ${data.email}`,
    phoneLine.trimEnd(),
    `Área de interesse: ${data.interest}`,
    "",
    "Descrição do cenário:",
    data.message,
  ].join("\n");
}

export async function renderContactLeadEmail(data: ContactPayload) {
  return render(ContactLeadEmail(toContactLeadEmailProps(data)));
}
