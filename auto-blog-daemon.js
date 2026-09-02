/**
 * Edwin Isuzu — AI Blog Auto-Publisher Daemon
 * Runs silently every 3 days and generates + publishes a new SEO buyer guide.
 * Start once with: node auto-blog-daemon.js
 */

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const INTERVAL_DAYS = 3;
const INTERVAL_MS = INTERVAL_DAYS * 24 * 60 * 60 * 1000;
const SECRET = "edwinkibira_blog_auto_2026";
const LOG_FILE = path.join(__dirname, "auto-blog-daemon.log");

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + "\n");
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      port: parsed.port || 3000,
      path: parsed.pathname + parsed.search,
      method: "GET",
    };
    http.request(options, (res) => {
      // Follow redirect
      if ((res.statusCode === 301 || res.statusCode === 302) && res.headers.location) {
        const loc = res.headers.location.startsWith("http")
          ? res.headers.location
          : `http://${parsed.hostname}:${parsed.port || 3000}${res.headers.location}`;
        return httpGet(loc).then(resolve).catch(reject);
      }
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject).end();
  });
}

function callAutoEndpoint() {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3000/api/blog/auto/?secret=${SECRET}`;
    log(`Triggering AI blog generation...`);

    httpGet(url).then((data) => {
      try {
        const json = JSON.parse(data);
        if (json.success) {
          log(`✅ Published: "${json.title}" → /blog/${json.slug}`);
          resolve(json);
        } else {
          log(`❌ Error: ${json.error}`);
          reject(new Error(json.error));
        }
      } catch {
        log(`❌ Invalid response: ${data.substring(0, 200)}`);
        reject(new Error("Invalid response"));
      }
    }).catch((err) => {
      log(`❌ HTTP error: ${err.message}`);
      reject(err);
    });
  });
}

async function run() {
  log("🤖 Edwin Isuzu AI Blog Daemon started.");
  log(`📅 Will publish a new buyer guide every ${INTERVAL_DAYS} days automatically.`);

  // Publish one immediately on start
  try {
    await callAutoEndpoint();
  } catch {
    log("First run failed — will retry on next cycle.");
  }

  // Then repeat every N days
  setInterval(async () => {
    try {
      await callAutoEndpoint();
    } catch {
      log("Scheduled run failed — will retry next cycle.");
    }
  }, INTERVAL_MS);
}

run();
