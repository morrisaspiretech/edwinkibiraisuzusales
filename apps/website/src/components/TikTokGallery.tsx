"use client";

interface TikTokVideo {
  id: string;
  embedId: string;
  tag: string;
  title: string;
  description: string;
}

const VIDEOS: TikTokVideo[] = [
  {
    id: "1",
    embedId: "7675848927463165202",
    tag: "New Arrival",
    title: "Fresh Off the Lot — Brand New Isuzu Delivery",
    description:
      "A brand-new Isuzu rolls off our lot straight into the hands of a happy customer. This is what we do every day — matching Kenyans with the perfect vehicle.",
  },
  {
    id: "2",
    embedId: "7675446772679920917",
    tag: "Showroom",
    title: "Inside the Edwin Kibira Isuzu Showroom",
    description:
      "Step inside our showroom and explore the full Isuzu range — from rugged pickups to premium SUVs — all lined up and ready for you to experience.",
  },
  {
    id: "3",
    embedId: "7673221439557831957",
    tag: "Feature Spotlight",
    title: "Isuzu D-Max — Built for Kenya's Roads",
    description:
      "The Isuzu D-Max is engineered for Kenyan terrain. Whether it's city commuting or off-road adventures, this pickup delivers unmatched durability and performance.",
  },
  {
    id: "4",
    embedId: "7672472169426734357",
    tag: "Customer Delivery",
    title: "Another Happy Customer — A Proud Moment",
    description:
      "Nothing beats the joy on a customer's face when they drive away in their new Isuzu. We take pride in making every delivery a memorable occasion.",
  },
  {
    id: "5",
    embedId: "7670236623962918164",
    tag: "MU-X SUV",
    title: "The Isuzu MU-X — Kenya's Premium 7-Seater SUV",
    description:
      "Commanding presence. Premium comfort. The Isuzu MU-X is for families and executives who demand the very best — locally assembled right here in Kenya.",
  },
];

function TikTokCard({ video }: { video: TikTokVideo }) {
  // Direct link to this specific video on TikTok under Edwin's account
  const tiktokUrl = `https://www.tiktok.com/@edwinkibiraisuzusales/video/${video.embedId}`;

  return (
    <div className="group flex flex-col">
      <a
        href={tiktokUrl}
        target="_blank"
        rel="noreferrer"
        className="block relative bg-black overflow-hidden border border-white/10 group-hover:border-[#D62B2B]/60 transition-colors duration-300"
        style={{ aspectRatio: "9/16", maxHeight: "420px" }}
        aria-label={`Watch on TikTok: ${video.title}`}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

        {/* TikTok logo top-right */}
        <div className="absolute top-3 right-3 z-20 opacity-80">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white drop-shadow">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.72a8.19 8.19 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1Z" />
          </svg>
        </div>

        {/* Centered play button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-3">
          <div className="w-16 h-16 rounded-full bg-[#D62B2B] flex items-center justify-center shadow-lg shadow-[#D62B2B]/40 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">
            Watch on TikTok
          </span>
        </div>

        {/* Account badge at bottom */}
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-[#D62B2B] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.72a8.19 8.19 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1Z" />
            </svg>
          </div>
          <span className="text-white text-[10px] font-bold">@edwinkibiraisuzusales</span>
        </div>
      </a>

      {/* Card info */}
      <div className="mt-3 flex-1">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-1">
          {video.tag}
        </p>
        <p className="text-white font-bold text-sm leading-snug">{video.title}</p>
        <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  );
}

export default function TikTokGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {VIDEOS.map((video) => (
        <TikTokCard key={video.id} video={video} />
      ))}
    </div>
  );
}
