"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaXmark, FaMessage, FaPhone } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const WHATSAPP = "254768351483";

const vehicleOptions = [
  "Isuzu D-Max Pickup",
  "Isuzu mu-X SUV",
  "N-Series Light Truck",
  "F-Series Heavy Truck",
  "Isuzu Bus / Matatu",
  "Fleet / Multiple Vehicles",
  "General Enquiry",
];

type Step = "greeting" | "form" | "success";

/** Generates a smart, page-aware pre-filled WhatsApp message */
function getAutoMessage(pathname: string): string {
  if (pathname?.startsWith("/vehicles/")) {
    const modelSlug = pathname.split("/").pop() || "";
    const model = modelSlug.replace(/-/g, " ").toUpperCase();
    return `Hi Edwin! I saw the ${model} on your website and I'm interested. Is it available for a test drive? Please share pricing details.`;
  }
  if (pathname === "/vehicles") {
    return "Hi Edwin! I'm browsing your Isuzu vehicle range online and would like help choosing the right model. Can you assist?";
  }
  if (pathname === "/get-quote") {
    return "Hi Edwin! I'm on your website and I'd like to get a custom quote for an Isuzu vehicle. Please assist.";
  }
  if (pathname === "/contact") {
    return "Hi Edwin! I found your contact page on the website. I'd love to discuss your Isuzu vehicles.";
  }
  if (pathname === "/about") {
    return "Hi Edwin! I read about your dealership and I'm interested in purchasing an Isuzu. Can we talk?";
  }
  if (pathname?.includes("financing") || pathname?.includes("finance")) {
    return "Hi Edwin! I'm interested in Isuzu financing options. Can you walk me through how it works?";
  }
  return "Hi Edwin! I'm on your website and I'm interested in buying an Isuzu vehicle. Please assist me with pricing and availability.";
}

export default function LiveChat() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [step, setStep] = useState<Step>("greeting");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "" });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const notifRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-open greeting bubble after 25 seconds (only once per session)
  useEffect(() => {
    const seen = sessionStorage.getItem("chat_greeted");
    if (seen) return;

    timerRef.current = setTimeout(() => {
      setShowNotif(true);
      sessionStorage.setItem("chat_greeted", "1");
      // Auto-dismiss notification bubble after 10s if not interacted
      notifRef.current = setTimeout(() => setShowNotif(false), 10000);
    }, 25000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (notifRef.current) clearTimeout(notifRef.current);
    };
  }, []);

  const openChat = () => {
    setIsOpen(true);
    setShowNotif(false);
    if (notifRef.current) clearTimeout(notifRef.current);
    setHasAutoOpened(true);
  };

  const closeChat = () => setIsOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    setIsSubmitting(true);

    // Save lead to database
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: "chat@lead.local",
          message: `[Live Chat Lead] Interested in: ${form.interest || "General Enquiry"}`,
        }),
      });
    } catch (err) {
      // Fail silently — WhatsApp redirect is more important
      console.error("Lead save failed", err);
    }

    // Build pre-filled WhatsApp message
    const message = `Hi Edwin! My name is ${form.name}. I was on your website and I'm interested in: ${form.interest || "an Isuzu vehicle"}. My phone number is ${form.phone}. Please assist me!`;
    const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    setIsSubmitting(false);
    setStep("success");

    // Redirect to WhatsApp after 1.5s
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1500);
  };

  // Instant WhatsApp URL with smart pre-filled message
  const instantWaUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(getAutoMessage(pathname))}`;

  return (
    <>
      {/* ── CHAT BUBBLE BUTTON ── */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">

        {/* Notification pop-up bubble */}
        <AnimatePresence>
          {showNotif && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="bg-white shadow-2xl rounded-2xl rounded-br-none p-4 max-w-[230px] border border-gray-100 cursor-pointer"
              onClick={openChat}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-[#D62B2B] flex-shrink-0 relative">
                  <Image src="/logo.jpg" alt="Edwin" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-[#1a1a1a]">Edwin Kibira</p>
                  <p className="text-[9px] text-green-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
                    Online Now
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-snug">
                👋 Hi! Looking for an Isuzu? I can help you find the perfect vehicle.
              </p>
              <p className="text-[10px] text-[#25D366] font-bold mt-1.5">Tap to chat on WhatsApp →</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main toggle button */}
        <motion.button
          onClick={() => (isOpen ? closeChat() : openChat())}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          {/* Ping ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
          {!isOpen && !hasAutoOpened && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D62B2B] rounded-full flex items-center justify-center text-[9px] font-black text-white z-10">
              1
            </span>
          )}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <FaXmark size={20} className="relative z-10" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <FaWhatsapp size={26} className="relative z-10" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── CHAT WINDOW ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-gray-100 flex flex-col"
            style={{ maxHeight: "560px" }}
          >
            {/* Header */}
            <div className="bg-[#075e54] px-5 py-4 flex items-center gap-3 flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#25D366] flex-shrink-0 relative">
                  <Image src="/logo.jpg" alt="Edwin" fill className="object-cover" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-[#075e54] rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-black text-sm leading-tight">Edwin Kibira</p>
                <p className="text-white/70 text-[11px]">Isuzu Sales Specialist · Online</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:0768351483"
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                  title="Call Now"
                >
                  <FaPhone size={13} />
                </a>
                <button
                  onClick={closeChat}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                  aria-label="Close chat"
                >
                  <FaXmark size={15} />
                </button>
              </div>
            </div>

            {/* WhatsApp green accent strip */}
            <div className="h-1 bg-[#25D366] flex-shrink-0" />

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 bg-[#ece5dd]">
              <AnimatePresence mode="wait">

                {/* STEP: Greeting */}
                {step === "greeting" && (
                  <motion.div
                    key="greeting"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* Agent bubble */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 flex-shrink-0 relative">
                        <Image src="/logo.jpg" alt="Edwin" fill className="object-cover" />
                      </div>
                      <div className="bg-white rounded-xl rounded-tl-none p-3.5 shadow-sm border border-gray-100 max-w-[240px]">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          👋 Habari! I&apos;m Edwin. Welcome to <strong>Edwin Kibira Isuzu Sales</strong>.<br /><br />
                          How can I help you today?
                        </p>
                      </div>
                    </div>

                    {/* ── INSTANT WHATSAPP BUTTON (PRIMARY CTA) ── */}
                    <a
                      href={instantWaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-xl px-4 py-3.5 shadow-md transition-all group"
                    >
                      <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaWhatsapp size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-black text-sm leading-tight">Chat on WhatsApp Now</p>
                        <p className="text-white/80 text-[11px] mt-0.5">Message sent instantly · No waiting</p>
                      </div>
                      <svg className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gray-300" />
                      <span className="text-[11px] text-gray-400 font-medium">or choose below</span>
                      <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {/* Quick-reply buttons (go to form) */}
                    <div className="flex flex-col gap-2">
                      {vehicleOptions.slice(0, 4).map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setForm((prev) => ({ ...prev, interest: opt }));
                            setStep("form");
                          }}
                          className="text-left bg-white border border-gray-200 text-gray-700 font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-gray-50 hover:border-[#25D366] transition-all shadow-sm"
                        >
                          {opt}
                        </button>
                      ))}
                      <button
                        onClick={() => setStep("form")}
                        className="text-left bg-white border border-gray-200 text-gray-400 font-medium text-xs px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-all"
                      >
                        Other / General Enquiry
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP: Form */}
                {step === "form" && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* Confirmation bubble */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 flex-shrink-0 relative">
                        <Image src="/logo.jpg" alt="Edwin" fill className="object-cover" />
                      </div>
                      <div className="bg-white rounded-xl rounded-tl-none p-3.5 shadow-sm border border-gray-100 max-w-[230px]">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {form.interest
                            ? `Great choice! The ${form.interest} is very popular in Kenya. `
                            : "Happy to help! "}
                          Share your details and I&apos;ll WhatsApp you the pricing right away. 🚗
                        </p>
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {!form.interest && (
                        <div>
                          <select
                            name="interest"
                            value={form.interest}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#25D366] bg-white"
                          >
                            <option value="">Which Isuzu interests you?</option>
                            {vehicleOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      )}
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name *"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#25D366] bg-white"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone / WhatsApp Number *"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#25D366] bg-white"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#25D366] text-white py-3 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1ebe5d] transition-colors shadow-md disabled:opacity-70"
                      >
                        <FaWhatsapp size={16} />
                        {isSubmitting ? "Connecting..." : "Send to WhatsApp"}
                      </button>
                      <p className="text-center text-[10px] text-gray-400">
                        Or call directly:{" "}
                        <a href="tel:0768351483" className="font-bold text-[#D62B2B]">0768 351 483</a>
                      </p>
                    </form>

                    <button
                      onClick={() => setStep("greeting")}
                      className="text-[11px] text-gray-400 hover:text-gray-600 underline underline-offset-2 w-full text-center"
                    >
                      ← Back
                    </button>
                  </motion.div>
                )}

                {/* STEP: Success */}
                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-3"
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <FaWhatsapp size={28} className="text-green-600" />
                    </div>
                    <p className="font-black text-[#1a1a1a] text-base uppercase">Opening WhatsApp!</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Your details have been sent to Edwin. Opening WhatsApp now with your message pre-filled.
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Edwin! My name is ${form.name}. Interested in: ${form.interest || "an Isuzu"}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#1ebe5d] transition-colors"
                    >
                      <FaWhatsapp size={14} /> Open WhatsApp
                    </a>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-gray-100 bg-white flex items-center justify-between flex-shrink-0">
              <span className="text-[10px] text-gray-400 font-medium">Edwin Kibira Isuzu Sales</span>
              <span className="text-[10px] text-green-600 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-pulse" />
                Online now
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
