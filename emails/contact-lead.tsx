import type { ReactNode } from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { SITE } from "../src/config/site";

export interface ContactLeadEmailProps {
  clientName: string;
  company: string;
  clientEmail: string;
  phone: string;
  interest: string;
  message: string;
}

function Field({ label, children, first = false }: { label: string; children: ReactNode; first?: boolean }) {
  return (
    <Section style={first ? fieldSectionFirst : fieldSection}>
      <Text style={fieldLabel}>{label}</Text>
      {children}
    </Section>
  );
}

export default function ContactLeadEmail({
  clientName,
  company,
  clientEmail,
  phone,
  interest,
  message,
}: ContactLeadEmailProps) {
  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>Nova solicitação comercial — {company}</Preview>
      <Body style={body}>
        <Container style={outer}>
          <Section style={card}>
            <Section style={header}>
              <Img
                src={SITE.assets.logoSymbol}
                width={48}
                height={48}
                alt="StudioDev"
                style={logo}
              />
              <Heading style={title}>Nova solicitação comercial</Heading>
              <Text style={subtitle}>Lead recebido pelo formulário do site</Text>
            </Section>

            <Section style={content}>
              <Field label="Nome" first>
                <Text style={fieldValueStrong}>{clientName}</Text>
              </Field>
              <Field label="Empresa">
                <Text style={fieldValueStrong}>{company}</Text>
              </Field>
              <Field label="E-mail">
                <Link href={`mailto:${clientEmail}`} style={fieldLink}>
                  {clientEmail}
                </Link>
              </Field>
              <Field label="Telefone">
                <Text style={fieldValue}>{phone}</Text>
              </Field>
              <Field label="Área de interesse">
                <Text style={fieldValue}>{interest}</Text>
              </Field>
              <Section style={fieldSectionLast}>
                <Text style={fieldLabel}>Descrição do cenário</Text>
                <Section style={messageBox}>
                  <Text style={messageText}>{message}</Text>
                </Section>
              </Section>
            </Section>

            <Section style={footer}>
              <Text style={footerText}>
                Responda este e-mail para contatar o prospect diretamente.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

ContactLeadEmail.PreviewProps = {
  clientName: "Maria Silva",
  company: "Acme Corp",
  clientEmail: "maria@acme.com",
  phone: "+55 (11) 99999-0000",
  interest: "Desenvolvimento de plataforma",
  message:
    "Precisamos de uma solução para automatizar nosso fluxo de onboarding de clientes B2B.",
} satisfies ContactLeadEmailProps;

const body = {
  margin: 0,
  padding: 0,
  backgroundColor: "#f8fafc",
  fontFamily: "Arial, Helvetica, sans-serif",
} as const;

const outer = {
  margin: "0 auto",
  padding: "32px 16px",
  maxWidth: "600px",
} as const;

const card = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
} as const;

const header = {
  backgroundColor: "#0f172a",
  padding: "32px",
} as const;

const logo = {
  display: "block",
  marginBottom: "20px",
} as const;

const title = {
  margin: "0 0 8px",
  fontSize: "24px",
  lineHeight: "1.3",
  color: "#ffffff",
  fontWeight: 700,
} as const;

const subtitle = {
  margin: 0,
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#94a3b8",
} as const;

const content = {
  padding: "32px",
} as const;

const fieldSectionFirst = {
  paddingTop: 0,
  paddingBottom: "16px",
  borderBottom: "1px solid #e2e8f0",
} as const;

const fieldSection = {
  paddingTop: "16px",
  paddingBottom: "16px",
  borderBottom: "1px solid #e2e8f0",
} as const;

const fieldSectionLast = {
  paddingTop: "16px",
  paddingBottom: 0,
} as const;

const fieldLabel = {
  margin: "0 0 4px",
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
  color: "#64748b",
  lineHeight: "1.4",
} as const;

const fieldValueStrong = {
  margin: 0,
  fontSize: "16px",
  color: "#0f172a",
  fontWeight: 600,
  lineHeight: "1.5",
} as const;

const fieldValue = {
  margin: 0,
  fontSize: "16px",
  color: "#0f172a",
  lineHeight: "1.5",
} as const;

const fieldLink = {
  fontSize: "16px",
  color: "#2563eb",
  textDecoration: "none",
  lineHeight: "1.5",
} as const;

const messageBox = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  padding: "16px",
  marginTop: "8px",
} as const;

const messageText = {
  margin: 0,
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#334155",
  whiteSpace: "pre-wrap" as const,
} as const;

const footer = {
  backgroundColor: "#f8fafc",
  borderTop: "1px solid #e2e8f0",
  padding: "20px 32px 28px",
} as const;

const footerText = {
  margin: 0,
  fontSize: "13px",
  lineHeight: "1.5",
  color: "#64748b",
} as const;
