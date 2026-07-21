import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061521",
          900: "#0A1F33",
          800: "#12304A",
          700: "#173D5F"
        },
        emerald: {
          400: "#38D996",
          500: "#10B981",
          700: "#047857"
        },
        gold: {
          300: "#F8D57E",
          400: "#D9A441",
          500: "#B98222"
        }
      },
      boxShadow: {
        premium: "0 24px 70px rgba(2, 12, 27, 0.16)",
        glow: "0 0 42px rgba(16, 185, 129, 0.24)"
      },
      fontFamily: {
        sans: ["Inter", "Aptos", "Segoe UI", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
