"use client";
import React, { createContext, useContext, useMemo } from "react";
import { ACTIVE_PALETTE } from "@/lib/theme-config";

interface ThemeContextType {
  colors: typeof ACTIVE_PALETTE.colors;
  palette: typeof ACTIVE_PALETTE;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(
    () => ({
      colors: ACTIVE_PALETTE.colors,
      palette: ACTIVE_PALETTE,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

/**
 * Tailwind Color Mapping System
 * Maps theme colors to tailwind classes for easier component building
 */
export const THEME_COLORS = {
  // Primary (green / emerald)
  primary: "from-emerald-600 to-emerald-500",
  primaryHover: "hover:from-emerald-700 hover:to-emerald-600",
  primaryLight: "from-emerald-300 to-emerald-200",

  // Background
  bg: "bg-stone-950",
  bgDark: "bg-emerald-950",
  bgLight: "bg-emerald-900/30",
  bgLighter: "bg-emerald-900/20",

  // Text
  textPrimary: "text-emerald-50",
  textSecondary: "text-emerald-300",
  textMuted: "text-emerald-200/70",
  textMutedLight: "text-emerald-100/70",

  // Borders
  border: "border-emerald-900/30",
  borderLight: "border-emerald-800/40",
  borderHeavy: "border-emerald-700/50",

  // Accents
  accent: "bg-emerald-600",
  accentHover: "hover:bg-emerald-700",
  accentText: "text-emerald-400",
  accentBorder: "border-emerald-700",

  // Gradients
  gradientGold: "from-emerald-600 via-emerald-500 to-emerald-400",
  gradientText: "from-emerald-300 via-emerald-200 to-emerald-100",

  // Special
  card: "border-emerald-800/40 bg-emerald-900/20",
  cardHover: "hover:bg-emerald-900/30 hover:border-emerald-700/60",
  input: "bg-emerald-950/40 border-emerald-800/50 text-emerald-50 placeholder-emerald-300/40 focus:border-emerald-600",

  // Difficulty badges
  easy: "bg-emerald-600",
  medium: "bg-emerald-500",
  hard: "bg-red-700",
};

/**
 * Export this for use in components:
 * import { THEME_COLORS } from '@/components/theme-provider';
 * 
 * Usage:
 * <div className={`bg-gradient-to-r ${THEME_COLORS.gradientGold}`}>
 */
