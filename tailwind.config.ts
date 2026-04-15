import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Arcade palette
        ink: {
          DEFAULT: "#0a0a10",
          50: "#13131c",
          100: "#1a1a26",
          200: "#242434",
        },
        neon: {
          pink: "#ff2e63",
          cyan: "#00e5ff",
          amber: "#ffd166",
          lime: "#9bff6b",
          violet: "#b967ff",
        },
        phosphor: {
          DEFAULT: "#e6faff",
          dim: "#9fb8bf",
        },
      },
      fontFamily: {
        display: ["var(--font-press-start)", "monospace"],
        mono: ["var(--font-vt323)", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neon-pink":
          "0 0 10px rgba(255,46,99,0.6), 0 0 30px rgba(255,46,99,0.35)",
        "neon-cyan":
          "0 0 10px rgba(0,229,255,0.6), 0 0 30px rgba(0,229,255,0.35)",
        "neon-amber":
          "0 0 10px rgba(255,209,102,0.6), 0 0 30px rgba(255,209,102,0.35)",
        pixel: "4px 4px 0 0 rgba(0,0,0,0.6)",
      },
      dropShadow: {
        "glow-pink": "0 0 8px rgba(255,46,99,0.8)",
        "glow-cyan": "0 0 8px rgba(0,229,255,0.8)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        blink: "blink 1.1s steps(2,start) infinite",
        flicker: "flicker 3.5s infinite",
        scanlines: "scanlines 8s linear infinite",
        "bounce-slow": "bounce 2.2s ease-in-out infinite",
        glitch: "glitch 2.4s infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "rise-in": "riseIn 0.7s cubic-bezier(0.2,0.9,0.2,1) forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: "1",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": { opacity: "0.55" },
        },
        scanlines: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100px" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0,0)" },
          "20%": { transform: "translate(-1px, 1px)" },
          "40%": { transform: "translate(-1px, -1px)" },
          "60%": { transform: "translate(1px, 1px)" },
          "80%": { transform: "translate(1px, -1px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "scanline-overlay":
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
      },
    },
  },
  plugins: [],
};

export default config;
