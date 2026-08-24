"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { VEHICLES_DATA } from "@/data/vehicles";

interface CompareContextType {
  compareIds: string[];
  addVehicle: (id: string) => void;
  removeVehicle: (id: string) => void;
  clearComparison: () => void;
  isMaxSelected: boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "isuzu_compare_list";

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as string[];
        // Filter out any IDs that no longer exist in data
        const validIds = parsed.filter(id => !!VEHICLES_DATA[id]);
        setCompareIds(validIds);
      }
    } catch (e) {
      console.error("Failed to load compare list", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage whenever list changes (after initial load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(compareIds));
    }
  }, [compareIds, isLoaded]);

  const addVehicle = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id) || prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const removeVehicle = (id: string) => {
    setCompareIds((prev) => prev.filter((item) => item !== id));
  };

  const clearComparison = () => {
    setCompareIds([]);
  };

  const isMaxSelected = compareIds.length >= 3;

  return (
    <CompareContext.Provider
      value={{
        compareIds,
        addVehicle,
        removeVehicle,
        clearComparison,
        isMaxSelected,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
