"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { VEHICLES_DATA } from "@/data/vehicles";

interface FavouritesContextType {
  favouriteIds: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
  toggleFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
  clearFavourites: () => void;
  count: number;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "isuzu_favourites";

export function FavouritesProvider({ children }: { children: React.ReactNode }) {
  const [favouriteIds, setFavouriteIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as string[];
        const valid = parsed.filter(id => !!VEHICLES_DATA[id]);
        setFavouriteIds(valid);
      }
    } catch (e) {
      console.error("Failed to load favourites", e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favouriteIds));
    }
  }, [favouriteIds, isLoaded]);

  const addFavourite = (id: string) => {
    setFavouriteIds(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  const removeFavourite = (id: string) => {
    setFavouriteIds(prev => prev.filter(item => item !== id));
  };

  const toggleFavourite = (id: string) => {
    setFavouriteIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isFavourite = (id: string) => favouriteIds.includes(id);

  const clearFavourites = () => setFavouriteIds([]);

  return (
    <FavouritesContext.Provider value={{
      favouriteIds,
      addFavourite,
      removeFavourite,
      toggleFavourite,
      isFavourite,
      clearFavourites,
      count: favouriteIds.length,
    }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (!context) throw new Error("useFavourites must be used within FavouritesProvider");
  return context;
}
