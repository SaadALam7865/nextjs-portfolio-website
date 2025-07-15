"use client";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#ff007f",
        neonBlue: "#00f0ff",
        neonGreen: "#00ff00",
        brightYellow: "#ffff00", // Bright yellow color added
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        neon: "0 0 10px #ff007f, 0 0 20px #ff007f",
        neonBlue: "0 0 10px #00f0ff, 0 0 20px #00f0ff",
        neonGreen: "0 0 10px #00ff00, 0 0 20px #00ff00",
        neonYellow: "0 0 10px #ffff00, 0 0 20px #ffff00",
      },
      animation: {
        glow: "glow 1.5s ease-in-out infinite",
        bounceSlow: "bounce 2s infinite",
        "rotate-scale": "rotateScale 3s ease-in-out infinite", // Spinning and scaling animation
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: `1` },
          "50%": { opacity: `0.5` },
        },
        rotateScale: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(360deg) scale(1.2)" }, // Rotates and scales up
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
