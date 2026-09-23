import { VEHICLES_DATA } from "@/data/vehicles";
import { BLOG_POSTS } from "@/data/posts";

export const INDEXNOW_KEY = "c7e29b104a8f3d654029b38fa19e82c7";
export const HOST = "edwinkibiraisuzusales.onrender.com";
export const BASE_URL = `https://${HOST}`;
export const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

/**
 * Collects all public URLs for Edwin Kibira Isuzu Sales
 */
export function getAllSiteUrls(): string[] {
  const staticPaths = [
    "",
    "/vehicles",
    "/vehicles/d-max",
    "/vehicles/mu-x",
    "/trucks",
    "/buses",
    "/inventory",
    "/bikes",
    "/blog",
    "/fleet-sales",
    "/get-quote",
    "/book-test-drive",
    "/loan-calculator",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/ultimate-isuzu-guide",
  ];

  const vehiclePaths = Object.keys(VEHICLES_DATA).map((model) => `/vehicles/${model}`);
  const blogPaths = (BLOG_POSTS || []).map((post) => `/blog/${post.slug}`);

  const allPaths = Array.from(new Set([...staticPaths, ...vehiclePaths, ...blogPaths]));
  return allPaths.map((path) => `${BASE_URL}${path}`);
}

/**
 * Submits a list of URLs directly to the IndexNow protocol (Bing, Yandex, Seznam, Naver)
 */
export async function submitToIndexNow(urls: string[]) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  const results = await Promise.allSettled(
    endpoints.map(async (endpoint) => {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "EdwinKibira-IndexingBot/1.0",
        },
        body: JSON.stringify(payload),
      });

      return {
        endpoint,
        status: res.status,
        statusText: res.statusText,
        ok: res.ok || res.status === 200 || res.status === 202,
      };
    })
  );

  return results.map((r, i) =>
    r.status === "fulfilled"
      ? r.value
      : { endpoint: endpoints[i], ok: false, error: String((r as PromiseRejectedResult).reason) }
  );
}

/**
 * Pings Google and Bing XML sitemap notification endpoints
 */
export async function pingSearchEngineSitemaps() {
  const sitemapUrl = encodeURIComponent(`${BASE_URL}/sitemap.xml`);
  const pingUrls = [
    { name: "Google Ping", url: `https://www.google.com/ping?sitemap=${sitemapUrl}` },
    { name: "Bing Ping", url: `https://www.bing.com/ping?sitemap=${sitemapUrl}` },
  ];

  const results = await Promise.allSettled(
    pingUrls.map(async ({ name, url }) => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: { "User-Agent": "EdwinKibira-IndexingBot/1.0" },
        });
        return { name, url, status: res.status, ok: res.ok || res.status === 200 };
      } catch (err) {
        return { name, url, ok: false, error: String(err) };
      }
    })
  );

  return results.map((r, i) =>
    r.status === "fulfilled" ? r.value : { name: pingUrls[i].name, ok: false, error: "Failed request" }
  );
}

/**
 * Complete Authorized SEO Robot Trigger
 * Submits all pages and pings all search engines immediately.
 */
export async function runFullSeoIndexPush() {
  const urls = getAllSiteUrls();
  const [indexNowResult, sitemapPings] = await Promise.all([
    submitToIndexNow(urls),
    pingSearchEngineSitemaps(),
  ]);

  return {
    timestamp: new Date().toISOString(),
    totalUrlsSubmitted: urls.length,
    indexNow: indexNowResult,
    sitemapPings,
    sampleUrls: urls.slice(0, 10),
  };
}
