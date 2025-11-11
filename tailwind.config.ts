import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxegold: "#F5C84C",
        luxeblack: "#000000",
        luxesilver: "#C0C0C0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 10px rgba(245,200,76,0.4), 0 0 20px rgba(245,200,76,0.3), 0 0 30px rgba(245,200,76,0.2)",
          },
          "50%": {
            textShadow:
              "0 0 20px rgba(245,200,76,0.8), 0 0 40px rgba(245,200,76,0.6), 0 0 60px rgba(245,200,76,0.4)",
          },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;