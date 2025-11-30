/**
 * Theme Configuration System
 * Change the color palette here and it will automatically affect the entire site!
 * 
 * How to use:
 * 1. Update the colors object with your new hex values
 * 2. The entire site will automatically reflect these changes
 * 3. No need to edit individual component files
 */

export const THEME_PALETTES = {
  // Current palette: Custom Palette
  customPalette: {
    name: "Custom Palette",
    colors: {
      // Primary colors (main brand colors)
      primary: "#D69830",           // Brown/gold - used for main buttons, accents
      primaryLight: "#FFF07A",      // Bright yellow - used for highlights, hover states
      primaryLighter: "#FFF07A",    // Bright yellow - used for text on dark backgrounds
      
      // Background colors
      bg: "#5F233F",                // Deep purple/maroon - main background
      bgDark: "#3A1425",            // Darker variant
      bgLight: "#8B3A5E",           // Lighter variant
      
      // Text colors
      textPrimary: "#FFF07A",       // Bright yellow
      textSecondary: "#FFF07A",     // Bright yellow
      textMuted: "rgba(255, 240, 122, 0.5)", // Semi-transparent yellow
      
      // Accent variations
      accent: "#D69830",            // Main accent
      accentDark: "#AB3124",        // Darker accent
      accentLight: "#F0B855",       // Lighter accent
    }
  },

  // Alternative palette: Blue and Mint
  blueMint: {
    name: "Blue and Mint",
    colors: {
      primary: "#80A1BA",           // Blue-grey
      primaryLight: "#91C4C3",      // Mint
      primaryLighter: "#B4DEBD",    // Light mint-green
      
      bg: "#1A1F2E",                // Dark blue-grey background
      bgDark: "#0F1419",            // Darker variant
      bgLight: "#2A3544",           // Lighter variant
      
      textPrimary: "#FFF7DD",       // Off-white
      textSecondary: "#91C4C3",     // Mint
      textMuted: "rgba(145, 196, 195, 0.5)", // Semi-transparent mint
      
      accent: "#80A1BA",            // Main accent
      accentDark: "#5A7A91",        // Darker accent
      accentLight: "#A0C1DA",       // Lighter accent
    }
  },

  // Alternative palette: Purple and Lavender
  purpleLavender: {
    name: "Purple and Lavender",
    colors: {
      primary: "#7B68EE",           // Medium blue-violet
      primaryLight: "#B19CD9",      // Lavender
      primaryLighter: "#E6D5F5",    // Light lavender
      
      bg: "#2D1B3D",                // Dark purple
      bgDark: "#1A0F24",            // Darker variant
      bgLight: "#3D2B4D",           // Lighter variant
      
      textPrimary: "#FFF5E6",       // Off-white
      textSecondary: "#B19CD9",     // Lavender
      textMuted: "rgba(177, 156, 217, 0.5)", // Semi-transparent lavender
      
      accent: "#7B68EE",            // Main accent
      accentDark: "#5A4AB8",        // Darker accent
      accentLight: "#9B88FF",       // Lighter accent
    }
  },

  // Alternative palette: Emerald and Sage
  emeraldSage: {
    name: "Emerald and Sage",
    colors: {
      primary: "#2D7A6F",           // Emerald
      primaryLight: "#5BA99D",      // Sage
      primaryLighter: "#A8D5CF",    // Light sage
      
      bg: "#1A3D38",                // Dark emerald
      bgDark: "#0F2420",            // Darker variant
      bgLight: "#2A5550",           // Lighter variant
      
      textPrimary: "#F5F9F8",       // Off-white
      textSecondary: "#5BA99D",     // Sage
      textMuted: "rgba(91, 169, 157, 0.5)", // Semi-transparent sage
      
      accent: "#2D7A6F",            // Main accent
      accentDark: "#1A4D47",        // Darker accent
      accentLight: "#4D9B91",       // Lighter accent
    }
  },

  // New palette: Slate and Sage
  slateSage: {
    name: "Slate and Sage",
    colors: {
      primary: "#435663",           // Slate blue
      primaryLight: "#A3B087",      // Sage green
      primaryLighter: "#FFF8D4",    // Cream
      
      bg: "#313647",                // Dark slate
      bgDark: "#1F2531",            // Darker variant
      bgLight: "#444A5C",           // Lighter variant
      
      textPrimary: "#FFF8D4",       // Cream
      textSecondary: "#A3B087",     // Sage
      textMuted: "rgba(163, 176, 135, 0.5)", // Semi-transparent sage
      
      accent: "#435663",            // Main accent
      accentDark: "#2D3E4F",        // Darker accent
      accentLight: "#556B7D",       // Lighter accent
    }
  },
};

// ACTIVE PALETTE - Change this to switch themes
// Set the active palette to a green/emerald theme for the site revamp
export const ACTIVE_PALETTE = THEME_PALETTES.emeraldSage;

// Get color value - useful for dynamic styling
export const getColor = (colorKey: keyof typeof ACTIVE_PALETTE.colors) => {
  return ACTIVE_PALETTE.colors[colorKey];
};

// Helper to get tailwind color classes - maps hex to tailwind classes
export const getTailwindColorClasses = (type: "dark" | "light" | "accent" = "dark") => {
  const palette = ACTIVE_PALETTE.colors;
  
  switch (type) {
    case "light":
      return {
        bg: "bg-amber-50",
        text: "text-amber-50",
        border: "border-amber-200",
      };
    case "accent":
      return {
        bg: "bg-amber-600",
        text: "text-amber-300",
        border: "border-amber-700",
      };
    case "dark":
    default:
      return {
        bg: "bg-stone-950",
        text: "text-stone-900",
        border: "border-stone-800",
      };
  }
};

/**
 * QUICK REFERENCE - Copy one of these to ACTIVE_PALETTE:
 * 
 * THEME_PALETTES.darkGold     // Current: Dark and Gold
 * THEME_PALETTES.blueMint     // Blue and Mint
 * THEME_PALETTES.purpleLavender // Purple and Lavender
 * THEME_PALETTES.emeraldSage  // Emerald and Sage
 * 
 * To add a new palette:
 * 1. Add a new entry in THEME_PALETTES object
 * 2. Set ACTIVE_PALETTE to your new palette
 * 3. Done! All components will automatically update
 */
