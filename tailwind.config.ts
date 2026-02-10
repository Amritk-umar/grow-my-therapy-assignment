// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        // Dr. Maya's Santa Monica Palette
        primary: "#2C3E50",   // Deep Slate
        secondary: "#E8E2D9", // Warm Sand
        accent: "#7D8E7E",    // Sage Leaf
        background: "#F9F7F4", // Light Off-white
      },
    },
  },
  plugins: [],
};
export default config;