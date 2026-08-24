import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/posts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FaChevronLeft, FaCalendar, FaLink, FaShareNodes } from "react-icons/fa6";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Edwin Kibira Isuzu Sales`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-[#1a1a1a]">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors mb-8">
              <FaChevronLeft size={10} /> Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#D62B2B] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded shadow-sm">
                {post.category}
              </span>
              <span className="text-white/70 text-xs font-bold flex items-center gap-1.5">
                <FaCalendar className="text-[#D62B2B]" /> {post.date}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-6">
              <div className="w-10 h-10 rounded-full border-2 border-[#D62B2B] overflow-hidden relative">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{post.author.name}</p>
                <p className="text-white/60 text-xs">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT & SIDEBAR */}
      <section className="px-4 sm:px-8 pt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#1a1a1a] prose-h2:border-l-4 prose-h2:border-[#D62B2B] prose-h2:pl-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-li:marker:text-[#D62B2B] prose-a:text-[#D62B2B] hover:prose-a:text-red-700 prose-strong:text-[#1a1a1a]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share & Source Attribution */}
            <div className="mt-16 py-8 border-t border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-xs text-gray-400">
                <span className="font-bold text-gray-500">Source: </span>
                <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#D62B2B] hover:underline inline-flex items-center gap-1">
                  isuzu.co.ke <FaLink size={10} />
                </a>
              </div>
              <Link href="/get-quote" className="bg-[#1a1a1a] text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#D62B2B] transition-colors shadow-lg">
                Request a Quote
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* Author Box */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden relative mx-auto mb-4">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <h3 className="font-black text-lg text-[#1a1a1a] mb-1">{post.author.name}</h3>
              <p className="text-[#D62B2B] font-bold text-xs uppercase tracking-widest mb-4">{post.author.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                With years of experience in the Kenyan commercial vehicle market, Edwin helps businesses find the perfect Isuzu trucks and buses to drive their growth.
              </p>
              <a href="tel:0768351483" className="block w-full bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] font-black text-xs uppercase tracking-widest py-3 rounded-xl hover:bg-[#1a1a1a] hover:text-white transition-colors">
                Contact Edwin
              </a>
            </div>

            {/* Related Posts Widget */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[3px] w-8 bg-[#D62B2B]" />
                <h3 className="text-[#1a1a1a] font-black text-sm uppercase tracking-widest">Related Reads</h3>
              </div>
              <div className="space-y-4">
                {relatedPosts.map(rp => (
                  <Link key={rp.id} href={`/blog/${rp.slug}`} className="group flex gap-4 bg-white border border-gray-100 p-3 rounded-xl hover:shadow-md transition-all">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-sm text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#D62B2B] transition-colors line-clamp-2">
                        {rp.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                        {rp.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
