/**
 * MASTER COLOR CONFIGURATION
 * 
 * ⭐ THIS IS THE ONLY FILE YOU NEED TO CHANGE! ⭐
 * 
 * To change your site's color palette:
 * 1. Paste your 4 hex colors below in the COLOR_MAP
 * 2. Save the file
 * 3. The entire site automatically updates!
 * 
 * Example color palettes you can use:
 * 
 * PALETTE 1 - Dark and Gold (Current):
 * #C07F00, #FFD95A, #FFF7D4, #4C3D3D
 * 
 * PALETTE 2 - Blue and Mint:
 * #80A1BA, #91C4C3, #B4DEBD, #1A1F2E
 * 
 * PALETTE 3 - Purple and Lavender:
 * #7B68EE, #B19CD9, #E6D5F5, #2D1B3D
 * 
 * PALETTE 4 - Emerald and Sage:
 * #2D7A6F, #5BA99D, #A8D5CF, #1A3D38
 */

export const COLOR_MAP = {
  // PRIMARY/ACCENT COLOR - Used for main buttons, primary accents
  // Your most prominent color
  primary: "#D69830",
  
  // SECONDARY/HIGHLIGHT COLOR - Used for highlights, secondary accents
  // Your brightest or most vibrant color
  secondary: "#FFF07A",
  
  // LIGHT/TEXT COLOR - Used for text on dark backgrounds
  // Your lightest color
  light: "#FFF07A",
  
  // DARK/BACKGROUND COLOR - Used for main background
  // Your darkest color
  dark: "#5F233F",
};

/**
 * TAILWIND CLASS MAPPING
 * Based on COLOR_MAP above, these tailwind classes are used throughout the site:
 * 
 * Dark Background: bg-stone-950 (maps to dark color)
 * Primary Text: text-amber-50 (maps to light color)
 * Primary Color: from-amber-600 to-yellow-600 (maps to primary)
 * Secondary Color: text-amber-300 (maps to secondary)
 * Accents: border-amber-900, bg-amber-900 (maps to primary/secondary)
 * 
 * The mapping is:
 * - Primary #C07F00 → Tailwind: amber-600
 * - Secondary #FFD95A → Tailwind: amber-300/yellow-300
 * - Light #FFF7D4 → Tailwind: amber-50
 * - Dark #4C3D3D → Tailwind: stone-950
 */

/**
 * HOW TO ADD YOUR OWN PALETTE:
 * 
 * Step 1: Find 4 colors you like
 * Step 2: Update the COLOR_MAP values above with your hex codes
 * Step 3: Map them to the closest Tailwind colors:
 *    - Darkest → bg-stone-950 or bg-slate-950 or bg-gray-950
 *    - Lightest → text-amber-50 or text-yellow-50 or text-gray-50
 *    - Primary → from-blue-600 or from-purple-600 or from-emerald-600 etc
 *    - Secondary → text-blue-300 or text-purple-300 or text-emerald-300 etc
 * Step 4: Update all component files with the new Tailwind classes
 * 
 * COMMON TAILWIND COLOR MAPS:
 * 
 * DARK → BG COLORS (choose one):
 * Stone: bg-stone-950
 * Slate: bg-slate-950
 * Gray: bg-gray-950
 * 
 * LIGHT → TEXT COLORS (choose one):
 * Amber: text-amber-50
 * Yellow: text-yellow-50
 * Stone: text-stone-50
 * Gray: text-gray-50
 * 
 * PRIMARY → GRADIENT START:
 * Blue: from-blue-600
 * Purple: from-purple-600
 * Emerald: from-emerald-600
 * Cyan: from-cyan-600
 * Rose: from-rose-600
 * 
 * SECONDARY → GRADIENT END / TEXT ACCENT:
 * Blue: to-cyan-600 / text-blue-300
 * Purple: to-pink-600 / text-purple-300
 * Emerald: to-teal-600 / text-emerald-300
 * Cyan: to-sky-600 / text-cyan-300
 * Rose: to-pink-600 / text-rose-300
 */

// QUICK REFERENCE TABLE FOR TAILWIND COLORS:
export const TAILWIND_REFERENCE = {
  backgrounds: {
    darkest: ["bg-stone-950", "bg-slate-950", "bg-gray-950"],
    dark: ["bg-stone-900", "bg-slate-900", "bg-gray-900"],
    medium: ["bg-stone-800", "bg-slate-800", "bg-gray-800"],
  },
  text: {
    lightest: ["text-amber-50", "text-yellow-50", "text-stone-50"],
    light: ["text-amber-100", "text-yellow-100", "text-stone-100"],
    muted: ["text-amber-200/70", "text-yellow-200/70", "text-stone-200/70"],
  },
  colors: {
    primary: [
      "from-amber-600",
      "from-blue-600",
      "from-purple-600",
      "from-emerald-600",
      "from-rose-600",
      "from-cyan-600",
    ],
    secondary: [
      "to-yellow-600",
      "to-cyan-600",
      "to-pink-600",
      "to-teal-600",
      "to-pink-600",
      "to-sky-600",
    ],
  },
};
