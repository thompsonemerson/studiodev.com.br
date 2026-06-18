import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import {
  buildContactLeadSubject,
  buildContactLeadText,
  renderContactLeadEmail,
} from "./contact-email";
import {
  isHoneypotTriggered,
  sanitizeContactPayload,
  validateContactPayload,
} from "../src/lib/contact";

const DEFAULT_TO_EMAIL = "contato@studiodev.com.br";
const DEFAULT_FROM_EMAIL = "contato@updates.studiodev.com.br";

function json(res: VercelResponse, status: number, body: { ok: boolean; error?: string }) {
  return res.status(status).json(body);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return json(res, 405, { ok: false });
  }

  const raw = req.body as Record<string, unknown> | undefined;
  const payload = sanitizeContactPayload({
    name: String(raw?.name ?? ""),
    company: String(raw?.company ?? ""),
    email: String(raw?.email ?? ""),
    phone: String(raw?.phone ?? ""),
    interest: String(raw?.interest ?? ""),
    message: String(raw?.message ?? ""),
    website: String(raw?.website ?? ""),
  });

  if (isHoneypotTriggered(payload)) {
    return json(res, 200, { ok: true });
  }

  const validationError = validateContactPayload(payload);
  if (validationError) {
    return json(res, 400, { ok: false, error: validationError });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not configured");
    return json(res, 500, {
      ok: false,
      error: "Não foi possível enviar sua solicitação. Tente novamente ou use o e-mail comercial.",
    });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM_EMAIL;

  try {
    const resend = new Resend(apiKey);
    const html = await renderContactLeadEmail(payload);
    const text = buildContactLeadText(payload);

    const { error } = await resend.emails.send({
      from: `StudioDev <${fromEmail}>`,
      to: [toEmail],
      replyTo: payload.email,
      subject: buildContactLeadSubject(payload.company),
      text,
      html,
    });

    if (error) {
      console.error("contact: resend error", error);
      return json(res, 500, {
        ok: false,
        error: "Não foi possível enviar sua solicitação. Tente novamente ou use o e-mail comercial.",
      });
    }

    return json(res, 200, { ok: true });
  } catch (error) {
    console.error("contact: unexpected error", error);
    return json(res, 500, {
      ok: false,
      error: "Não foi possível enviar sua solicitação. Tente novamente ou use o e-mail comercial.",
    });
  }
}
