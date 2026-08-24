"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FaChevronDown, FaChevronUp, FaCircleQuestion } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "How do I get 100% bank financing?",
    answer:
      "We partner with major banks across Kenya to offer up to 100% financing on our brand-new, zero-mileage Isuzu vehicles. You will need 6 months of bank statements, your KRA pin, ID copy, and business/employment documents to get pre-approved.",
  },
  {
    question: "Are all your vehicles brand new?",
    answer:
      "Yes, all vehicles sold by Edwin Kibira Isuzu Sales are brand-new, zero-mileage units directly from Isuzu East Africa, guaranteeing the highest quality and reliability.",
  },
  {
    question: "What is the warranty on a new Isuzu?",
    answer:
      "Every new Isuzu vehicle comes with a comprehensive 1-year or 100,000 km warranty (whichever comes first) backed by Isuzu East Africa, ensuring peace of mind for your business.",
  },
  {
    question: "Do you accept trade-ins?",
    answer:
      "Yes, we evaluate and accept trade-ins to help you seamlessly upgrade to a brand-new Isuzu. Our team will appraise your current vehicle and offer a competitive market rate to put towards your new purchase.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on the specific body building requirements (e.g., box bodies, matatus, specialized trucks). Standard vehicles can be delivered within a few days, while custom body building typically takes 2-4 weeks.",
  },
  {
    question: "Do you arrange for insurance?",
    answer:
      "We work closely with top-tier insurance partners to ensure your new Isuzu is fully covered before it hits the road, offering competitive comprehensive insurance packages tailored for commercial vehicles.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* ── SEO SCHEMA MARKUP ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Header */}
      <section className="bg-[#1A1A1A] pt-32 pb-20 px-6 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D62B2B] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D62B2B]/10 text-[#D62B2B] mb-6">
            <FaCircleQuestion size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Frequently Asked <span className="text-[#D62B2B]">Questions</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to know about purchasing your brand-new Isuzu, financing options, warranties, and our delivery process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="flex-1 py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-sm border transition-all duration-300 ${
                    isOpen ? "border-[#D62B2B]" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                  >
                    <span
                      className={`text-lg sm:text-xl font-bold ${
                        isOpen ? "text-[#D62B2B]" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                        isOpen ? "bg-[#D62B2B] text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 sm:p-8 pt-0 text-gray-600 text-base sm:text-lg leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 text-center shadow-lg shadow-black/5">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] uppercase tracking-tight mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Our sales team is ready to assist you with any specific queries regarding financing, body building, or fleet purchases.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#1A1A1A] text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#333] transition-colors rounded-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/loan-calculator"
                className="w-full sm:w-auto bg-[#D62B2B] text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-red-700 transition-colors rounded-lg"
              >
                Calculate Financing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
