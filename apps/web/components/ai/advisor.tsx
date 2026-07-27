"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, User, Sparkles, X, MessageSquareCode } from "lucide-react";
import { useState } from "react";

export default function AIAdvisor() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Hello! I'm your Aspire Intelligence assistant. I can help you with real-time KRA CRSP valuations, import duty calculations, or finding the perfect vehicle in our verified inventory. How can I assist you today?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { role: 'user', content: input }]);
        setInput("");

        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                content: "I've processed your query using our 2025 KRA data engine. Based on current market velocity in Nairobi, I recommend looking at 2018-2019 models for the best duty-to-value ratio. Would you like a detailed tax breakdown?"
            }]);
        }, 1200);
    };

    return (
        <>
            {/* Professional Concierge Toggle */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-12 right-12 z-[100] group"
            >
                <div className="relative bg-white border border-slate-200 p-4 rounded-[2.5rem] shadow-2xl flex items-center gap-4 hover:border-primary transition-all active:scale-95 group-hover:shadow-primary/10">
                    <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <MessageSquareCode size={22} />
                    </div>
                    <div className="text-left pr-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Support</p>
                        <p className="text-sm font-bold text-slate-900">AI Advisor</p>
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 40 }}
                        className="fixed bottom-32 right-12 z-[100]"
                    >
                        <div className="pro-card w-[450px] overflow-hidden flex flex-col h-[650px] shadow-2xl border-primary/5 bg-white rounded-[2.5rem]">
                            {/* Header */}
                            <div className="bg-primary p-8 text-white relative h-48 flex flex-col justify-end overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-12 translate-x-12 blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full translate-y-12 -translate-x-12 blur-2xl" />

                                <div className="relative z-10 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                                <Sparkles className="text-amber-400" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold tracking-tight">Aspire Intelligence Advisor</h3>
                                                <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-60">Connected to Global Market Data</p>
                                            </div>
                                        </div>
                                        <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                            <X size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Intelligence Feed */}
                            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-white selection:bg-primary/20">
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                    >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${msg.role === 'ai' ? 'bg-primary/5 border-primary/10 text-primary' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                                            {msg.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
                                        </div>
                                        <div className={`max-w-[80%] p-5 rounded-[1.5rem] text-sm font-medium leading-relaxed ${msg.role === 'ai' ? 'bg-slate-50 text-slate-700 rounded-tl-none' : 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20'}`}>
                                            {msg.content}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Command Interface */}
                            <div className="p-6 bg-slate-50 border-t border-slate-100">
                                <div className="bg-white border border-slate-200 rounded-2xl p-1.5 flex items-center gap-1 focus-within:border-primary transition-all shadow-sm">
                                    <input
                                        type="text"
                                        placeholder="How can I help you today?"
                                        className="bg-transparent border-none outline-none flex-1 text-sm font-medium py-3 px-4 placeholder:text-slate-300 text-slate-800"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    />
                                    <button
                                        onClick={handleSend}
                                        className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/80 transition-all shadow-md shadow-primary/20 active:scale-95"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
