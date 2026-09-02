import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Edwin Kibira Isuzu Sales",
  description: "Our privacy policy explains how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-[#1A1A1A] pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Privacy <span className="text-[#D62B2B]">Policy</span>
          </h1>
          <p className="text-lg text-white/70">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto prose prose-red prose-lg text-gray-700">
          <p>
            At <strong>Edwin Kibira Isuzu Sales</strong>, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
          </p>
          
          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">2. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., arranging a test drive or vehicle purchase).</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">3. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">4. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of processing of your personal data.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Email: edwinkibiracfg@gmail.com</li>
            <li>Phone: 0768 351 483</li>
          </ul>
        </div>
      </section>
</main>
  );
}
