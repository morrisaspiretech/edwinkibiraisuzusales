/**
 * Google Questions & AI Answer Engine Optimization (AEO/GEO) Sync Script
 * Generates and syncs high-ranking Google Q&A guides into the blog dataset,
 * and pushes new URLs to Google and IndexNow search bots immediately.
 */

const fs = require("fs");
const path = require("path");

const POSTS_FILE = path.join(__dirname, "../apps/website/src/data/posts.ts");
const QA_FILE = path.join(__dirname, "../apps/website/src/data/google-qa-database.ts");

function extractQAData() {
  // Read and compile QA items directly
  const content = fs.readFileSync(QA_FILE, "utf-8");
  // Simple extraction or direct require via transpilation/regex
  // Since we know the database format, let's parse the structured items
  return require("./qa-items.json");
}

function runSync() {
  console.log("==========================================================");
  console.log("🤖 EDWIN KIBIRA - GOOGLE Q&A & AI SEARCH ENGINE SYNC CRON");
  console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
  console.log("==========================================================\n");

  let postsContent = fs.readFileSync(POSTS_FILE, "utf-8");

  // Read the QA database items
  const qaData = require("./qa-items.json");
  let addedCount = 0;
  let updatedCount = 0;

  for (const item of qaData) {
    const slugCheck = `slug: "${item.slug}"`;
    if (postsContent.includes(slugCheck)) {
      console.log(`ℹ️ [EXISTS] ${item.title}`);
      updatedCount++;
      continue;
    }

    const newPost = `
  {
    id: "${item.id}",
    slug: "${item.slug}",
    title: ${JSON.stringify(item.title)},
    seoTitle: ${JSON.stringify(item.title)},
    excerpt: ${JSON.stringify(item.metaDescription)},
    content: ${JSON.stringify(item.articleHtml)},
    image: "${item.heroImage}",
    date: "${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}",
    category: "${item.category}",
    author: {
      name: "Edwin Kibira",
      role: "Isuzu Sales Specialist",
      avatar: "/logo.jpg",
    },
    pricingTable: ${JSON.stringify(item.pricingTable, null, 6)},
    priceFactors: ${JSON.stringify(item.priceFactors, null, 6)},
    financing: ${JSON.stringify(item.financing, null, 6)},
    faqs: ${JSON.stringify(item.faqs, null, 6)},
  },`;

    postsContent = postsContent.replace(
      "export const BLOG_POSTS: BlogPost[] = [",
      `export const BLOG_POSTS: BlogPost[] = [${newPost}`
    );
    addedCount++;
    console.log(`✅ [ADDED] ${item.title}`);
  }

  if (addedCount > 0) {
    fs.writeFileSync(POSTS_FILE, postsContent, "utf-8");
    console.log(`\n💾 Successfully wrote ${addedCount} new comprehensive Q&A guide(s) to posts.ts!`);
  } else {
    console.log("\n👍 All Google Q&A guides are up to date in the blog dataset.");
  }

  // Trigger search engine indexing push
  console.log("\n🚀 Triggering Search Engine Indexing Robot...");
  try {
    require("./seo-index-robot.js");
  } catch (err) {
    console.error("Indexing push error:", err.message);
  }
}

// Generate JSON cache and run
const { GOOGLE_QA_DATABASE } = require("../apps/website/src/data/google-qa-database.ts") || {};
// Fallback if ts node isn't registered: create json
runSync();
