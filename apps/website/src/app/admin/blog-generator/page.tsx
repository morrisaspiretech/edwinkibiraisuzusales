"use client";
import React, { useState } from "react";
import { FaRobot, FaSpinner, FaCopy, FaCheck, FaWandMagicSparkles, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

const TOPICS = [
  "NMR85", "NQR81", "NLR", "NMR", "FRR 90",
  "FVR 34", "FVZ 34", "GXZ", "D-Max TFS", "D-Max TFR", "mu-X"
];

interface GeneratedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: { name: string; role: string; avatar: string };
  pricingTable: { model: string; priceRange: string; deposit: string; bestUses: string }[];
  priceFactors: string[];
  financing: { depositPercent: string; maxMonths: number; saccoAvailable: boolean; description: string } | null;
  faqs: { question: string; answer: string }[];
}

export default function BlogGeneratorPage() {
  const [selectedTopic, setSelectedTopic] = useState("NQR81");
  const [loading, setLoading] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<GeneratedPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [publishStatus, setPublishStatus] = useState<"idle" | "success" | "error">("idle");

  const generatePost = async () => {
    setLoading(true);
    setError(null);
    setGeneratedPost(null);
    setPublishStatus("idle");

    try {
      const res = await fetch("/api/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: selectedTopic }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setGeneratedPost(data.post);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const publishPost = async () => {
    if (!generatedPost) return;
    try {
      const res = await fetch("/api/blog/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ post: generatedPost }),
      });
      if (!res.ok) throw new Error("Publish failed");
      setPublishStatus("success");
    } catch {
      setPublishStatus("error");
    }
  };

  const copyCode = () => {
    if (!generatedPost) return;
    const code = JSON.stringify(generatedPost, null, 2);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-xl bg-[#D62B2B]/20 border border-[#D62B2B]/30 flex items-center justify-center">
            <FaRobot className="text-[#D62B2B]" size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight">AI Blog Engine</h1>
            <p className="text-gray-400 text-sm">Generate Google-compliant SEO buyer guides automatically</p>
          </div>
          <div className="ml-auto flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Powered by Gemini AI</span>
          </div>
        </div>

        {/* Control Panel */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Select Vehicle Model</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {TOPICS.map(topic => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  selectedTopic === topic
                    ? "bg-[#D62B2B] text-white shadow-lg shadow-red-900/30"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={generatePost}
              disabled={loading}
              className="flex items-center gap-3 bg-[#D62B2B] hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-red-900/30"
            >
              {loading ? (
                <><FaSpinner className="animate-spin" size={16} /> Generating...</>
              ) : (
                <><FaWandMagicSparkles size={16} /> Generate Post</>
              )}
            </button>
            <p className="text-gray-500 text-xs">
              AI will generate a full SEO buyer guide with pricing table, FAQs, financing info & Schema markup
            </p>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-6 text-red-400 text-sm flex items-center gap-3">
            <FaCircleXmark />
            <span><strong>Error:</strong> {error}</span>
          </div>
        )}

        {/* Generated Post Preview */}
        {generatedPost && (
          <div className="space-y-6">
            {/* Meta */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-2 block">Generated Article</span>
                  <h3 className="text-xl font-black leading-snug">{generatedPost.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{generatedPost.excerpt}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-white/5 px-2 py-1 rounded">Slug: /{generatedPost.slug}</span>
                <span className="bg-white/5 px-2 py-1 rounded">Date: {generatedPost.date}</span>
                <span className="bg-white/5 px-2 py-1 rounded">{generatedPost.pricingTable?.length || 0} price rows</span>
                <span className="bg-white/5 px-2 py-1 rounded">{generatedPost.faqs?.length || 0} FAQs</span>
              </div>
            </div>

            {/* Content Preview */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Article Content Preview</h4>
              <div
                className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-gray-400 prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: generatedPost.content }}
              />
            </div>

            {/* Pricing Table Preview */}
            {generatedPost.pricingTable?.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Pricing Table</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 px-3 text-gray-400 font-bold text-xs">Model</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-bold text-xs">Price Range</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-bold text-xs">Deposit</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-bold text-xs">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {generatedPost.pricingTable.map((row, i) => (
                        <tr key={i} className="border-b border-white/5">
                          <td className="py-2 px-3 font-bold text-white text-xs">{row.model}</td>
                          <td className="py-2 px-3 text-[#D62B2B] font-bold text-xs">{row.priceRange}</td>
                          <td className="py-2 px-3 text-gray-400 text-xs">{row.deposit}</td>
                          <td className="py-2 px-3 text-gray-400 text-xs">{row.bestUses}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* FAQs Preview */}
            {generatedPost.faqs?.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">FAQs (with JSON-LD Schema for Google)</h4>
                <div className="space-y-3">
                  {generatedPost.faqs.map((faq, i) => (
                    <div key={i} className="bg-black/30 rounded-lg p-4">
                      <p className="text-white font-bold text-sm mb-1">Q: {faq.question}</p>
                      <p className="text-gray-400 text-sm">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Publish Actions */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Publish Actions</h4>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={publishPost}
                  disabled={publishStatus === "success"}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all"
                >
                  {publishStatus === "success" ? (
                    <><FaCircleCheck /> Published!</>
                  ) : (
                    <>Publish to Site</>
                  )}
                </button>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all border border-white/10"
                >
                  {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy JSON</>}
                </button>
                <button
                  onClick={generatePost}
                  className="flex items-center gap-2 bg-[#D62B2B]/20 hover:bg-[#D62B2B]/30 text-[#D62B2B] border border-[#D62B2B]/30 px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all"
                >
                  <FaWandMagicSparkles /> Regenerate
                </button>
              </div>
              {publishStatus === "success" && (
                <p className="text-green-400 text-xs mt-3 flex items-center gap-2">
                  <FaCircleCheck /> Article published! View it at <a href={`/blog/${generatedPost.slug}`} target="_blank" className="underline">/blog/{generatedPost.slug}</a>
                </p>
              )}
              {publishStatus === "error" && (
                <p className="text-red-400 text-xs mt-3">Failed to publish. Copy the JSON and add it manually to posts.ts</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
