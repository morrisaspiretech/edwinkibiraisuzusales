import { MetadataRoute } from "next";

const BASE_URL = "https://edwinkibiraisuzusales.onrender.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "YandexBot",
          "Slurp",
          "Baiduspider",
          "facebookexternalhit",
          "Facebot",
          "Twitterbot",
          "LinkedInBot",
          "WhatsApp",
          "Pinterestbot",
        ],
        allow: [
          "/",
          "/vehicles/",
          "/trucks",
          "/buses",
          "/inventory",
          "/blog/",
          "/fleet-sales",
          "/get-quote",
          "/book-test-drive",
          "/loan-calculator",
          "/ultimate-isuzu-guide",
          "/images/",
          "/videos/",
        ],
        disallow: [
          "/admin/",
          "/api/",
          "/favourites",
          "/_next/",
        ],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/favourites",
          "/_next/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
