/**
 * Supabase Keep-Alive Ping
 * Sends daily lightweight REST pings to keep Supabase projects active and prevent auto-pause.
 */
const https = require("https");

const PROJECTS = [
  {
    name: "Edwin Isuzu Sales Supabase",
    url: "https://oqfnxojgqyhpbwcpluhk.supabase.co/rest/v1/",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZm54b2pncXlocGJ3Y3BsdWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNDE4NzUsImV4cCI6MjEwMDcxNzg3NX0.OIUXd3rg143tK18YIOpFuTRiLhh_08fIAjPB2CljyRk"
  },
  {
    name: "Mars POS Supabase",
    url: "https://rlvqzzhghacmsoirooni.supabase.co/rest/v1/",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdnF6emhnaGFjbXNvaXJvb25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3MjI4NzMsImV4cCI6MjEwMDI5ODg3M30.ndhO29_OzqIlenqTFqsGOSExWifgFmlYg5-bZjeKCvo"
  }
];

function pingProject(proj) {
  return new Promise((resolve) => {
    const u = new URL(proj.url);
    const req = https.get({
      hostname: u.hostname,
      path: u.pathname,
      headers: {
        "apikey": proj.anonKey,
        "Authorization": `Bearer ${proj.anonKey}`
      }
    }, (res) => {
      console.log(`[${new Date().toISOString()}] ✅ ${proj.name} keep-alive ping status: ${res.statusCode}`);
      resolve(true);
    });

    req.on("error", (err) => {
      console.log(`[${new Date().toISOString()}] ⚠️ ${proj.name} ping failed: ${err.message} (Project may currently be paused in dashboard)`);
      resolve(false);
    });

    req.setTimeout(8000, () => {
      req.destroy();
      console.log(`[${new Date().toISOString()}] ⚠️ ${proj.name} ping timed out`);
      resolve(false);
    });
  });
}

async function main() {
  console.log("Starting Supabase Keep-Alive Health Checks...");
  for (const proj of PROJECTS) {
    await pingProject(proj);
  }
  console.log("Supabase Keep-Alive finished.");
}

main();
