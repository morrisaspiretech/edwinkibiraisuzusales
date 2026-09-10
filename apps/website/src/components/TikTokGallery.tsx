"use client";

import { useState } from "react";
import Image from "next/image";

interface TikTokVideo {
  id: string;
  embedId: string;
  tag: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

const VIDEOS: TikTokVideo[] = [
  {
    id: "1",
    embedId: "7675848927463165202",
    tag: "New Arrival",
    title: "Fresh Off the Lot — Brand New Isuzu Delivery",
    description:
      "A brand-new Isuzu rolls off our lot straight into the hands of a happy customer. This is what we do every day — matching Kenyans with the perfect vehicle.",
    thumbnailUrl: "/tiktok/1.jpg",
  },
  {
    id: "2",
    embedId: "7675446772679920917",
    tag: "Showroom",
    title: "Inside the Edwin Kibira Isuzu Showroom",
    description:
      "Step inside our showroom and explore the full Isuzu range — from rugged pickups to premium SUVs — all lined up and ready for you to experience.",
    thumbnailUrl: "/tiktok/2.jpg",
  },
  {
    id: "3",
    embedId: "7673221439557831957",
    tag: "Feature Spotlight",
    title: "Isuzu D-Max — Built for Kenya's Roads",
    description:
      "The Isuzu D-Max is engineered for Kenyan terrain. Whether it's city commuting or off-road adventures, this pickup delivers unmatched durability and performance.",
    thumbnailUrl: "/tiktok/3.jpg",
  },
  {
    id: "4",
    embedId: "7672472169426734357",
    tag: "Customer Delivery",
    title: "Another Happy Customer — A Proud Moment",
    description:
      "Nothing beats the joy on a customer's face when they drive away in their new Isuzu. We take pride in making every delivery a memorable occasion.",
    thumbnailUrl: "/tiktok/4.jpg",
  },
  {
    id: "5",
    embedId: "7670236623962918164",
    tag: "MU-X SUV",
    title: "The Isuzu MU-X — Kenya's Premium 7-Seater SUV",
    description:
      "Commanding presence. Premium comfort. The Isuzu MU-X is for families and executives who demand the very best — locally assembled right here in Kenya.",
    thumbnailUrl: "/tiktok/5.jpg",
  },
];

function TikTokCard({ video, isActive, onClick }: { video: TikTokVideo, isActive: boolean, onClick: () => void }) {
  return (
    <div className="group flex flex-col h-full cursor-pointer" onClick={!isActive ? onClick : undefined}>
      <div className="block relative bg-[#0a0a0a] overflow-hidden border border-white/10 group-hover:border-[#D62B2B]/60 transition-colors duration-300 rounded-lg h-[480px]">
        {isActive ? (
          <iframe
            src={`https://www.tiktok.com/embed/v2/${video.embedId}`}
            className="absolute inset-0 w-full h-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={video.title}
          />
        ) : (
          <>
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              fill
              className="object-cover object-center opacity-80"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

            <div className="absolute top-3 right-3 z-20 opacity-80">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white drop-shadow">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.72a8.19 8.19 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1Z" />
              </svg>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-3">
              <div className="w-16 h-16 rounded-full bg-[#D62B2B] flex items-center justify-center shadow-lg shadow-[#D62B2B]/40 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">
                Play Video
              </span>
            </div>

            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#D62B2B] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.72a8.19 8.19 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1Z" />
                </svg>
              </div>
              <span className="text-white text-[10px] font-bold">@edwinkibiraisuzusales</span>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 flex-1 flex flex-col">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-1">
          {video.tag}
        </p>
        <p className="text-white font-bold text-sm leading-snug">{video.title}</p>
        <p className="text-gray-400 text-xs mt-2 leading-relaxed flex-1">
          {video.description}
        </p>
      </div>
    </div>
  );
}

export default function TikTokGallery() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {VIDEOS.map((video) => (
        <TikTokCard 
          key={video.id} 
          video={video} 
          isActive={activeVideoId === video.id}
          onClick={() => setActiveVideoId(video.id)}
        />
      ))}
    </div>
  );
}
