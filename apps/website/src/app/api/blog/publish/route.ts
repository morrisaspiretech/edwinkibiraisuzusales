import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { post } = await req.json();
    if (!post?.slug) {
      return NextResponse.json({ error: "Invalid post data" }, { status: 400 });
    }

    // Path to posts.ts
    const postsFile = path.join(process.cwd(), "src/data/posts.ts");
    let content = fs.readFileSync(postsFile, "utf-8");

    // Build the new post entry as a string to insert
    const newEntry = `
  {
    id: "${post.id}",
    slug: "${post.slug}",
    title: ${JSON.stringify(post.title)},
    seoTitle: ${JSON.stringify(post.title)},
    excerpt: ${JSON.stringify(post.excerpt)},
    content: \`${post.content.replace(/`/g, "\\`")}\`,
    image: "${post.image}",
    date: "${post.date}",
    category: "Buyer Guides",
    author: {
      name: "Edwin Kibira",
      role: "Isuzu Sales Specialist",
      avatar: "/logo.jpg",
    },
    pricingTable: ${JSON.stringify(post.pricingTable || [], null, 4).replace(/"([^"]+)":/g, '$1:')},
    priceFactors: ${JSON.stringify(post.priceFactors || [])},
    financing: ${JSON.stringify(post.financing || null, null, 4)},
    faqs: ${JSON.stringify(post.faqs || [], null, 4).replace(/"([^"]+)":/g, '$1:')},
  },`;

    // Insert after the opening of the BLOG_POSTS array
    content = content.replace(
      "export const BLOG_POSTS: BlogPost[] = [",
      `export const BLOG_POSTS: BlogPost[] = [${newEntry}`
    );

    fs.writeFileSync(postsFile, content, "utf-8");

    return NextResponse.json({ success: true, slug: post.slug });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
