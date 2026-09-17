import React from "react";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/posts";
import Navbar from "@/components/layout/Navbar";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Official Isuzu Kenya Buyer Guides & 2026 Price Reports | Edwin Kibira",
  description: "Explore in-depth 2026 Isuzu buyer guides, pricing tables, bank & SACCO financing options, and comparisons for commercial trucks, buses, and pickups in Kenya.",
  alternates: {
    canonical: "https://edwinkibiraisuzusales.onrender.com/blog",
  },
  openGraph: {
    title: "Official Isuzu Kenya Buyer Guides & 2026 Price Reports | Edwin Kibira",
    description: "Explore in-depth 2026 Isuzu buyer guides, pricing tables, bank & SACCO financing options, and comparisons in Kenya.",
    url: "https://edwinkibiraisuzusales.onrender.com/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <BlogClient posts={BLOG_POSTS} />
    </>
  );
}
