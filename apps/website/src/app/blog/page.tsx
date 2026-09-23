import React from "react";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/posts";
import Navbar from "@/components/layout/Navbar";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Official Isuzu Kenya Buyer Guides & 2026 Price Reports | Edwin Kibirai",
  description: "Explore in-depth 2026 Isuzu buyer guides, pricing tables, bank & SACCO financing options, and comparisons for commercial trucks, buses, and pickups in Kenya.",
  keywords: [
    "Isuzu prices Kenya", "Isuzu Kenya blog", "Isuzu buying guide Kenya", "Isuzu financing options",
    "Isuzu truck prices Kenya", "Isuzu bus price report", "Edwin Kibirai Isuzu"
  ],
  alternates: {
    canonical: "https://edwinkibiraisuzusales.onrender.com/blog",
  },
  openGraph: {
    title: "Official Isuzu Kenya Buyer Guides & 2026 Price Reports | Edwin Kibirai",
    description: "Explore in-depth 2026 Isuzu buyer guides, pricing tables, bank & SACCO financing options, and comparisons in Kenya.",
    url: "https://edwinkibiraisuzusales.onrender.com/blog",
  },
};

export default function BlogIndexPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Isuzu Kenya Guides & Price Reports 2026",
    "itemListElement": BLOG_POSTS.slice(0, 20).map((post, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://edwinkibiraisuzusales.onrender.com/blog/${post.slug}`,
      "name": post.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <Navbar />
      <BlogClient posts={BLOG_POSTS} />
    </>
  );
}
