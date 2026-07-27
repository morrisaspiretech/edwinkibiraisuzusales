"use client";

import React, { useState, useEffect, useRef } from "react";
import { Upload, X, Star, Move, Image as ImageIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface UploadedImage {
  id: string;
  url: string;
  isPrimary: boolean;
  isUploading?: boolean;
}

interface ImageUploadProps {
  onImagesChange: (images: { url: string; isPrimary: boolean }[]) => void;
  initialImages?: { url: string; isPrimary: boolean; id?: string }[];
}

const ImageUpload = ({ onImagesChange, initialImages = [] }: ImageUploadProps) => {
  const [images, setImages] = useState<UploadedImage[]>(() => {
    return initialImages.map(img => ({
      id: img.id || Math.random().toString(36).substr(2, 9),
      url: img.url,
      isPrimary: img.isPrimary,
      isUploading: false
    }));
  });
  const isInitialMount = useRef(true);

  // Sync images to parent via effect (avoids setState-during-render warning)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    onImagesChange(images.map(img => ({ url: img.url, isPrimary: img.isPrimary })));
  }, [images]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
      
      for (const file of files) {
        const id = Math.random().toString(36).substr(2, 9);
        
        // Add optimistic placeholder
        setImages((prev: UploadedImage[]) => [...prev, {
          id,
          url: URL.createObjectURL(file),
          isPrimary: prev.length === 0,
          isUploading: true
        }]);

        try {
          const formData = new FormData();
          formData.append('file', file);

          const response = await fetch(`${apiUrl}/api/admin/upload`, {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error || 'Upload failed');
          }

          const { url: publicUrl } = await response.json();

          setImages((prev: UploadedImage[]) =>
            prev.map((img: UploadedImage) => 
              img.id === id ? { ...img, url: publicUrl, isUploading: false } : img
            )
          );
        } catch (error) {
          console.error("Upload error:", error);
          setImages((prev: UploadedImage[]) => prev.filter((img: UploadedImage) => img.id !== id));
        }
      }
    }
  };

  const removeImage = (id: string) => {
    setImages((prev: UploadedImage[]) => {
      const filtered = prev.filter((img: UploadedImage) => img.id !== id);
      if (filtered.length > 0 && !filtered.some((img: UploadedImage) => img.isPrimary)) {
        filtered[0].isPrimary = true;
      }
      return filtered;
    });
  };

  const setPrimary = (id: string) => {
    setImages((prev: UploadedImage[]) =>
      prev.map((img: UploadedImage) => ({
        ...img,
        isPrimary: img.id === id
      }))
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <img src={image.url} alt="Upload preview" className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
              <button 
                onClick={() => setPrimary(image.id)}
                className={cn(
                  "p-2 rounded-full transition-all",
                  image.isPrimary ? "bg-accent text-primary" : "bg-white/20 text-white hover:bg-white/40"
                )}
              >
                <Star size={16} fill={image.isPrimary ? "currentColor" : "none"} />
              </button>
              <button 
                onClick={() => removeImage(image.id)}
                className="p-2 bg-red-500/80 text-white rounded-full hover:bg-red-500 transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {image.isPrimary && (
              <div className="absolute top-2 left-2 bg-accent text-primary text-xs font-extrabold px-2.5 py-1 uppercase rounded-sm border border-primary/10 shadow-sm">
                Primary View
              </div>
            )}
          </div>
        ))}

        <label className="aspect-[4/3] border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 bg-slate-50/50 hover:bg-white hover:border-accent transition-all cursor-pointer group">
          <div className="p-3 bg-white rounded-full shadow-sm text-slate-400 group-hover:text-accent transition-colors">
            <Upload size={20} />
          </div>
          <span className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">Add Photos</span>
          <input type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
        </label>
      </div>

      {images.length > 0 && (
        <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-400">
            <ImageIcon size={18} />
            <span className="text-xs font-bold uppercase">{images.length} Photos Selected</span>
          </div>
          <button 
            onClick={() => setImages([])}
            className="text-xs font-extrabold text-red-500 uppercase hover:text-red-700 transition-colors tracking-widest"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
