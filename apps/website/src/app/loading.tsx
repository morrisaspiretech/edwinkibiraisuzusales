"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-primary flex items-center justify-center">
      <div className="relative">
        {/* Animated Rings */}
        <motion.div 
          className="w-24 h-24 border-2 border-accent/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-0 w-24 h-24 border-t-2 border-accent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Logo Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[10px] font-black text-accent tracking-[0.3em] uppercase opacity-50">Aspire</span>
          <div className="w-1 h-1 bg-accent rounded-full mt-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
