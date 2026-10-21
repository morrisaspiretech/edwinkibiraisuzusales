export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "https://edwinkibiraisuzu.onrender.com";

    // Self-ping every 10 minutes to prevent Render free instance from sleeping
    const globalWithPing = global as typeof globalThis & { _keepAliveInterval?: NodeJS.Timeout };

    if (!globalWithPing._keepAliveInterval) {
      globalWithPing._keepAliveInterval = setInterval(async () => {
        try {
          await fetch(`${websiteUrl}/api/health`, {
            cache: "no-store",
            signal: AbortSignal.timeout(5000),
          });
        } catch {
          // Ignore ping errors silently to avoid memory leaks or log noise
        }
      }, 10 * 60 * 1000); // 10 minutes
    }
  }
}
