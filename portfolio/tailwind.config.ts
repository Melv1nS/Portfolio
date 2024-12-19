import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a472a',  // Dark green
          light: '#2d5a3c',    // Lighter green
          dark: '#0d2415',     // Darker green
        },
        'burnt-orange': '#bf5700', // UT Austin burnt orange
        accent: '#66bb6a',     // Light green accent
        secondary: '#f5f5f5',  // Light gray
        'off-white': '#fafafa',
      }
    }
  },
  plugins: [],
} satisfies Config;
