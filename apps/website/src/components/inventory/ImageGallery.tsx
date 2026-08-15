"use client";

import React, { useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { VehicleImage } from "@/types/vehicle";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa6";

interface ImageGalleryProps {
  images: VehicleImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[16/9] bg-surface flex items-center justify-center border border-primary/5">
        <span className="text-primary/20 font-bold uppercase tracking-widest">No Images Available</span>
      </div>
    );
  }

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="space-y-4">
      {/* Main Feature Image */}
      <div className="relative aspect-[16/9] bg-primary overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentIndex].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].url}
              alt="Vehicle detail view"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Overlays */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={prev}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-accent hover:text-primary transition-all shadow-xl"
          >
            <FaChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-accent hover:text-primary transition-all shadow-xl"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        <button className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-md text-white/70 hover:text-white transition-colors">
          <FaExpand size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "relative flex-shrink-0 w-32 aspect-[3/2] border-2 transition-all",
              currentIndex === index ? "border-accent scale-95" : "border-transparent opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={image.url}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
