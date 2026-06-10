import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        noir: "#12090b",
        burgundy: {
          50: "#f7ecef",
          100: "#f0d7de",
          200: "#ddb2bf",
          300: "#c27f93",
          400: "#a65c74",
          500: "#8e425c",
          600: "#76344c",
          700: "#5c263b",
          800: "#421a2a",
          900: "#271015"
        },
        rosegold: {
          100: "#f6ddd1",
          200: "#ecc3af",
          300: "#dca78d",
          400: "#c98b6d",
          500: "#b77052"
        },
        champagne: "#f6efe8"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.25)",
        glow: "0 0 40px rgba(201, 139, 109, 0.35)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 30%), radial-gradient(circle at 80% 0%, rgba(183,112,82,0.22), transparent 25%), radial-gradient(circle at 50% 80%, rgba(92,38,59,0.32), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
