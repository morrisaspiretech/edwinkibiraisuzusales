"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { VEHICLES_DATA } from "@/data/vehicles";
import CompareCheckbox from "./CompareCheckbox";
import FavouriteButton from "./FavouriteButton";

interface Props {
  v: {
    id: string;
    img: string;
    title: string;
    category: string;
    spec: string;
  };
}

export default function FeaturedVehicleCard({ v }: Props) {
  const vehicleData = VEHICLES_DATA[v.id];
  const price = vehicleData?.price;
  const priceLabel = price?.unitPrice ?? price?.chassisPrice ?? null;
  const priceSuffix = price?.withBodyPrice && !price?.unitPrice ? ` – ${price.withBodyPrice} w/body` : "";

  return (
    <div className="group bg-white rounded-xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
      <Link href={`/vehicles/${v.id}`} className="absolute inset-0 z-0"></Link>
      
      <div className="relative aspect-[16/10] bg-gradient-to-b from-[#f8f8f8] to-white p-4 z-10 pointer-events-none">
        <Image
          src={v.img}
          alt={v.title}
          fill
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-black text-[#D62B2B] uppercase tracking-widest shadow-sm">
          {v.category}
        </div>
        <div className={`absolute top-3 right-3 px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest shadow-sm text-white ${
          vehicleData?.availability === 'Order Only' ? 'bg-amber-500' :
          vehicleData?.availability === 'Limited Stock' ? 'bg-orange-500' :
          'bg-green-600'
        }`}>
          {vehicleData?.availability || 'In Stock'}
        </div>
        <div className="absolute top-12 right-3 pointer-events-auto">
          <FavouriteButton vehicleId={v.id} />
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1 bg-white border-t border-gray-50 z-10 pointer-events-none">
        <h3 className="text-sm font-black text-[#1a1a1a] uppercase mb-1.5 group-hover:text-[#D62B2B] transition-colors line-clamp-1">{v.title}</h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">{v.spec}</p>
        {priceLabel && (
          <div className="mb-3 flex items-baseline gap-1.5">
            <span className="text-[#D62B2B] font-black text-sm tabular-nums">{priceLabel}</span>
            {priceSuffix && <span className="text-[9px] text-gray-400 font-semibold">{priceSuffix}</span>}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-3 pointer-events-auto">
          <CompareCheckbox vehicleId={v.id} />
          <Link href={`/vehicles/${v.id}`} className="w-6 h-6 rounded-full bg-gray-50 group-hover:bg-[#D62B2B] flex items-center justify-center transition-colors">
            <FaChevronRight size={10} className="text-gray-400 group-hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
