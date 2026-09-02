import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/posts";
import Navbar from "@/components/layout/Navbar";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Blog & Industry News | Edwin Kibira Isuzu Sales",
  description: "Read the latest news, guides, and reviews about Isuzu commercial vehicles and the Kenyan motor industry from Edwin Kibira.",
};

export default function BlogIndexPage() {
  const featuredPost = BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* HEADER */}
      <section className="bg-[#1A1A1A] pt-32 pb-16 px-4 sm:px-8 border-b-4 border-[#D62B2B]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Isuzu <span className="text-[#D62B2B]">Buyer Guides</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Expert pricing guides, financing options, and in-depth reviews to help you make the best commercial fleet decisions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* FEATURED POST */}
          {featuredPost && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[3px] w-12 bg-[#D62B2B]" />
                <h2 className="text-[#1a1a1a] font-black text-xl uppercase tracking-widest">Featured Article</h2>
              </div>
              
              <Link href={`/blog/${featuredPost.slug}`} className="group block bg-white rounded-xl shadow-lg shadow-black/5 overflow-hidden hover:shadow-xl transition-all border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[300px] lg:h-auto w-full overflow-hidden">
                    <Image 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#D62B2B] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded shadow-sm">
                      {featuredPost.category}
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-4">
                      <span className="flex items-center gap-1.5"><FaCalendar className="text-[#D62B2B]" /> {featuredPost.date}</span>
                      <span className="flex items-center gap-1.5"><FaUser className="text-[#D62B2B]" /> {featuredPost.author.name}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-[#1a1a1a] leading-tight mb-4 group-hover:text-[#D62B2B] transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#D62B2B] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                      Read Article <FaArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* LATEST POSTS GRID */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[3px] w-12 bg-[#D62B2B]" />
              <h2 className="text-[#1a1a1a] font-black text-xl uppercase tracking-widest">Latest Updates</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all flex flex-col">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[11px] text-gray-500 font-medium mb-3">
                      <span className="flex items-center gap-1.5"><FaCalendar className="text-[#D62B2B]" /> {post.date}</span>
                    </div>
                    <h3 className="text-lg font-black text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#D62B2B] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#D62B2B] font-bold text-xs uppercase tracking-wider mt-auto group-hover:gap-3 transition-all">
                      Read More <FaArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </section>
</div>
  );
}
