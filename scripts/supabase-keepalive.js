/**
 * Supabase Keep-Alive Health Script
 * Executes direct SQL queries via Prisma and REST table queries to ensure
 * Supabase registers active compute and never pauses due to inactivity.
 */
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const https = require("https");

const prisma = new PrismaClient();

const REST_PROJECTS = [
  {
    name: "Edwin Isuzu Sales (REST)",
    url: "https://oqfnxojgqyhpbwcpluhk.supabase.co/rest/v1/Car?select=id&limit=1",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZm54b2pncXlocGJ3Y3BsdWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNDE4NzUsImV4cCI6MjEwMDcxNzg3NX0.OIUXd3rg143tK18YIOpFuTRiLhh_08fIAjPB2CljyRk"
  }
];

function pingRest(proj) {
  return new Promise((resolve) => {
    try {
      let isDone = false;
      const u = new URL(proj.url);
      const req = https.get(
        {
          hostname: u.hostname,
          path: u.pathname + (u.search || ""),
          headers: {
            apikey: proj.anonKey,
            Authorization: `Bearer ${proj.anonKey}`
          }
        },
        (res) => {
          if (!isDone) {
            isDone = true;
            console.log(`[${new Date().toISOString()}] ✅ ${proj.name} REST ping status: ${res.statusCode}`);
            resolve(true);
          }
        }
      );

      req.on("error", (err) => {
        if (!isDone) {
          isDone = true;
          console.log(`[${new Date().toISOString()}] ⚠️ ${proj.name} REST ping error: ${err.message}`);
          resolve(false);
        }
      });

      req.setTimeout(10000, () => {
        if (!isDone) {
          isDone = true;
          req.destroy();
          console.log(`[${new Date().toISOString()}] ⚠️ ${proj.name} REST ping timed out`);
          resolve(false);
        }
      });
    } catch (e) {
      console.log(`[${new Date().toISOString()}] ⚠️ REST error: ${e.message}`);
      resolve(false);
    }
  });
}

async function main() {
  console.log("🚀 Starting Daily Supabase Keep-Alive Health Checks...");

  // 1. Direct Prisma SQL Query (Guarantees active PostgreSQL compute)
  try {
    const carCount = await prisma.car.count();
    console.log(`[${new Date().toISOString()}] ✅ Direct PostgreSQL Database Query Successful! Total Cars: ${carCount}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] ⚠️ Direct PostgreSQL query failed: ${err.message}`);
  } finally {
    await prisma.$disconnect();
  }

  // 2. REST API queries
  for (const proj of REST_PROJECTS) {
    await pingRest(proj);
  }

  console.log("✨ Supabase Keep-Alive finished.");
}

main();
