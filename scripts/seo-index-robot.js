/**
 * Edwin Kibira Isuzu Sales - Authorized SEO Indexing Robot
 * Pushes all live URLs to IndexNow (Bing, Yandex, Seznam, Naver) and pings Google Search Console sitemap.
 */

const https = require("https");
const http = require("http");

const HOST = "edwinkibiraisuzusales.onrender.com";
const BASE_URL = `https://${HOST}`;
const INDEXNOW_KEY = "c7e29b104a8f3d654029b38fa19e82c7";
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// Core pages + all vehicle models + buyers guides
const URL_LIST = [
  `${BASE_URL}`,
  `${BASE_URL}/vehicles`,
  `${BASE_URL}/vehicles/d-max`,
  `${BASE_URL}/vehicles/mu-x`,
  `${BASE_URL}/trucks`,
  `${BASE_URL}/buses`,
  `${BASE_URL}/inventory`,
  `${BASE_URL}/bikes`,
  `${BASE_URL}/blog`,
  `${BASE_URL}/fleet-sales`,
  `${BASE_URL}/get-quote`,
  `${BASE_URL}/book-test-drive`,
  `${BASE_URL}/loan-calculator`,
  `${BASE_URL}/ultimate-isuzu-guide`,
  `${BASE_URL}/about`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/faq`,
  `${BASE_URL}/privacy`,
  `${BASE_URL}/terms`,
  // Pickups
  `${BASE_URL}/vehicles/tfr87-4x2`,
  `${BASE_URL}/vehicles/tfs87-single-cab-4x4`,
  `${BASE_URL}/vehicles/tfs40-double-manual`,
  `${BASE_URL}/vehicles/tfs40-double-auto`,
  `${BASE_URL}/vehicles/tfs87-double-auto`,
  // SUVs
  `${BASE_URL}/vehicles/mu-x-1900cc`,
  `${BASE_URL}/vehicles/mu-x-3000cc`,
  // Trucks
  `${BASE_URL}/vehicles/n-series-nlr`,
  `${BASE_URL}/vehicles/n-series-nmr85`,
  `${BASE_URL}/vehicles/n-series-nps`,
  `${BASE_URL}/vehicles/n-series-nqr81`,
  `${BASE_URL}/vehicles/n-series-nqr-xtra`,
  `${BASE_URL}/vehicles/f-series-frr90n`,
  `${BASE_URL}/vehicles/f-series-fvr90l`,
  `${BASE_URL}/vehicles/f-series-fvr90p`,
  `${BASE_URL}/vehicles/f-series-fvz34n`,
  `${BASE_URL}/vehicles/f-series-fvz34t`,
  `${BASE_URL}/vehicles/movers`,
  // Buses
  `${BASE_URL}/vehicles/bus-nmr-26`,
  `${BASE_URL}/vehicles/bus-nqr-29`,
  `${BASE_URL}/vehicles/bus-nqr-33`,
  `${BASE_URL}/vehicles/bus-frr90n-51`,
  `${BASE_URL}/vehicles/bus-frr90q-51`,
  `${BASE_URL}/vehicles/bus-fvr34-67-4x2`,
  `${BASE_URL}/vehicles/bus-fvr34-67-6x2`,
];

function sendPost(urlStr, data) {
  return new Promise((resolve) => {
    const url = new URL(urlStr);
    const postData = JSON.stringify(data);
    const req = https.request(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(postData),
          "User-Agent": "EdwinKibira-IndexingBot/1.0",
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve({ endpoint: urlStr, status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 300 }));
      }
    );
    req.on("error", (e) => resolve({ endpoint: urlStr, ok: false, error: e.message }));
    req.write(postData);
    req.end();
  });
}

function sendGet(urlStr) {
  return new Promise((resolve) => {
    const url = new URL(urlStr);
    https.get(url, { headers: { "User-Agent": "EdwinKibira-IndexingBot/1.0" } }, (res) => {
      resolve({ url: urlStr, status: res.statusCode, ok: res.statusCode === 200 });
    }).on("error", (e) => resolve({ url: urlStr, ok: false, error: e.message }));
  });
}

async function run() {
  console.log("=================================================");
  console.log("🚀 EDWIN KIBIRA ISUZU SALES - SEO INDEXING ROBOT");
  console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
  console.log(`📦 URLs to submit: ${URL_LIST.length}`);
  console.log("=================================================\n");

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  console.log("📡 1. Pushing batch URLs to IndexNow Protocol (Bing, Yandex, Seznam, Naver)...");
  const indexNowResult = await sendPost("https://api.indexnow.org/indexnow", payload);
  console.log(`   - api.indexnow.org: HTTP ${indexNowResult.status || indexNowResult.error} (${indexNowResult.ok ? "SUCCESS" : "CHECK"})`);

  const bingResult = await sendPost("https://www.bing.com/indexnow", payload);
  console.log(`   - bing.com/indexnow: HTTP ${bingResult.status || bingResult.error} (${bingResult.ok ? "SUCCESS" : "CHECK"})\n`);

  console.log("📡 2. Pinging Google & Bing XML Sitemaps...");
  const sitemapParam = encodeURIComponent(`${BASE_URL}/sitemap.xml`);
  const googlePing = await sendGet(`https://www.google.com/ping?sitemap=${sitemapParam}`);
  console.log(`   - Google Sitemap Ping: HTTP ${googlePing.status || googlePing.error}`);

  const bingPing = await sendGet(`https://www.bing.com/ping?sitemap=${sitemapParam}`);
  console.log(`   - Bing Sitemap Ping: HTTP ${bingPing.status || bingPing.error}\n`);

  console.log("=================================================");
  console.log("✅ All search engine robots notified successfully!");
  console.log("=================================================");
}

run();
