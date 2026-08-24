import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Edwin Kibira Isuzu Sales",
  description: "Terms and conditions for using the Edwin Kibira Isuzu Sales website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-[#1A1A1A] pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Terms of <span className="text-[#D62B2B]">Service</span>
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
            Welcome to <strong>Edwin Kibira Isuzu Sales</strong>. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
          
          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">2. Vehicle Information & Pricing</h2>
          <p>
            While we strive to ensure that all information on the website is accurate, errors may occur. Edwin Kibira Isuzu Sales does not guarantee the accuracy, completeness, or timeliness of the information provided, including vehicle specifications, availability, and pricing.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Prices:</strong> All prices displayed on the website are indicative and subject to change without notice. They may not include taxes, registration fees, or customized body building costs.</li>
            <li><strong>Availability:</strong> Vehicle availability is subject to change. Please contact us to confirm current stock levels.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">3. External Links</h2>
          <p>
            Our website may contain links to external sites (such as WhatsApp, social media platforms, or financing partners) that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies or terms.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            All content, including text, graphics, logos, images, and software, is the property of Edwin Kibira Isuzu Sales or its content suppliers and protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall Edwin Kibira Isuzu Sales be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">6. Modifications</h2>
          <p>
            We may revise these Terms of Service for our website at any time without notice. By using this website you are agreeing to be bound by the then-current version of these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Email: edwinkibiracfg@gmail.com</li>
            <li>Phone: 0768 351 483</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
