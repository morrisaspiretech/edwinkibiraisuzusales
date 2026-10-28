import { MetadataRoute } from "next";

const BASE_URL = "https://www.edwinkibiraisuzusales.co.ke";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/api",
          "/api/",
          "/favourites",
          "/favourites/",
        ],
      },
      // Explicit permissions for AI Search & Answer Engines (GEO - Generative Engine Optimization)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Applebot",
          "Applebot-Extended",
          "Amazonbot",
        ],
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/api",
          "/api/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
