"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const WHATSAPP = "254768351483";

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  const getWhatsAppMessage = () => {
    let message = "Hi Edwin, I'm interested in buying an Isuzu vehicle and would like to get more details.";
    
    if (pathname === "/about") {
      message = "Hi Edwin, I was reading about your dealership on the About page and I'm interested in purchasing an Isuzu.";
    } else if (pathname === "/vehicles") {
      message = "Hi Edwin, I'm looking at your Isuzu Vehicle Range online and I'd like to discuss pricing and options.";
    } else if (pathname?.startsWith("/vehicles/")) {
      const modelSlug = pathname.split('/').pop() || "";
      const formattedModel = modelSlug.replace(/-/g, " ").toUpperCase();
      message = `Hi Edwin, I am interested in the ${formattedModel} I saw on your website. Is it currently available for viewing/test drive?`;
    } else if (pathname === "/get-quote") {
      message = "Hi Edwin, I'm on the Get a Quote page and would like to request a custom quote for a vehicle.";
    } else if (pathname === "/contact") {
      message = "Hi Edwin, I'm reaching out from your contact page. I'd love to chat about your Isuzu vehicles.";
    }
    
    return message;
  };

  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(getWhatsAppMessage())}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Ping animation ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
      
      {/* Icon */}
      <FaWhatsapp size={32} className="relative z-10" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-white text-[#1a1a1a] text-xs font-bold px-3 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us
      </span>
    </a>
  );
}
