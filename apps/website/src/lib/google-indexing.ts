import crypto from "crypto";

export interface GoogleIndexingResult {
  url: string;
  status: "submitted" | "skipped" | "error";
  message: string;
}

/**
 * Creates a signed JWT for Google Service Account authentication
 */
function createGoogleJwt(clientEmail: string, privateKey: string): string {
  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const base64Url = (obj: object) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const unsignedToken = `${base64Url(header)}.${base64Url(payload)}`;

  const sign = crypto.createSign("RSA-SHA256");
  sign.update(unsignedToken);
  sign.end();

  // Clean formatted private key (handles both escaped \n and raw multiline)
  const formattedKey = privateKey.replace(/\\n/g, "\n");
  const signature = sign
    .sign(formattedKey)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${unsignedToken}.${signature}`;
}

/**
 * Obtains an OAuth2 Access Token using Google Service Account credentials
 */
async function getGoogleAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const jwt = createGoogleJwt(clientEmail, privateKey);

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }).toString(),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Google OAuth token failed: ${res.status} ${errorText}`);
  }

  const data = await res.json();
  return data.access_token;
}

/**
 * Submits URL list to Google Indexing API (URL_UPDATED notification)
 */
export async function submitToGoogleIndexingApi(urls: string[]): Promise<GoogleIndexingResult[]> {
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  let clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (serviceAccountJson) {
    try {
      const parsed = JSON.parse(serviceAccountJson);
      clientEmail = parsed.client_email;
      privateKey = parsed.private_key;
    } catch {
      // Ignored, will fall back
    }
  }

  if (!clientEmail || !privateKey) {
    return urls.map((url) => ({
      url,
      status: "skipped",
      message: "GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_CLIENT_EMAIL / GOOGLE_PRIVATE_KEY not set in environment. Set up a free service account in Google Cloud Console to enable instant Google Indexing API pushes.",
    }));
  }

  try {
    const token = await getGoogleAccessToken(clientEmail, privateKey);
    const results: GoogleIndexingResult[] = [];

    for (const url of urls) {
      try {
        const response = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            url,
            type: "URL_UPDATED",
          }),
        });

        if (response.ok) {
          results.push({ url, status: "submitted", message: "Successfully notified Googlebot via Indexing API" });
        } else {
          const errText = await response.text();
          results.push({ url, status: "error", message: `HTTP ${response.status}: ${errText}` });
        }
      } catch (err: any) {
        results.push({ url, status: "error", message: err.message || "Failed request" });
      }
    }

    return results;
  } catch (err: any) {
    return urls.map((url) => ({
      url,
      status: "error",
      message: `Failed to authenticate with Google: ${err.message}`,
    }));
  }
}
