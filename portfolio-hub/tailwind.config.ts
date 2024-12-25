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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lapis-lazuli': "#006494",
        'prussian-blue': '#13293D',
        'alice-blue': '#E8F1F2',
        'celestial-blue': "#1B98E0",
        'platinum': '#E5E5E5',
        'oxford-blue': '#14213D',
        'amber': '#FFBF00'
      },
    },
  },
  plugins: [],
} satisfies Config;
