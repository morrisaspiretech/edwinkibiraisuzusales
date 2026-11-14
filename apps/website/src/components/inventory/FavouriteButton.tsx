"use client";

import React from "react";
import { useFavourites } from "@/context/FavouritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

interface Props {
  vehicleId: string;
  className?: string;
}

export default function FavouriteButton({ vehicleId, className = "" }: Props) {
  const { isFavourite, toggleFavourite } = useFavourites();
  const active = isFavourite(vehicleId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavourite(vehicleId);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-transform active:scale-90 ${
        active
          ? "bg-red-50 text-[#D62B2B]"
          : "bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-50 border border-gray-100 shadow-sm"
      } ${className}`}
      aria-label={active ? "Remove from favourites" : "Add to favourites"}
      title={active ? "Saved to Favourites" : "Save to Favourites"}
    >
      {active ? <FaHeart size={14} className="text-[#D62B2B]" /> : <FaRegHeart size={14} />}
    </button>
  );
}
