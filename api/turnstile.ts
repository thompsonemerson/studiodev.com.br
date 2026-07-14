const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TOKEN_MAX_LENGTH = 2048;

type TurnstileSiteverifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstileToken(
  token: string,
  remoteip?: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("contact: TURNSTILE_SECRET_KEY is not configured");
    return false;
  }

  if (!token || token.length > TOKEN_MAX_LENGTH) {
    return false;
  }

  try {
    const body: Record<string, string> = {
      secret,
      response: token,
    };
    if (remoteip) {
      body.remoteip = remoteip;
    }

    const response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = (await response.json()) as TurnstileSiteverifyResponse;
    return result.success === true;
  } catch (error) {
    console.error("contact: turnstile verification failed", error);
    return false;
  }
}

export function getRequestIp(req: { headers?: Record<string, string | string[] | undefined> }) {
  const forwarded = req.headers?.["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0]?.trim();
  }
  if (Array.isArray(forwarded) && forwarded[0]) {
    return forwarded[0].split(",")[0]?.trim();
  }
  return undefined;
}
