/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: "var(--theme-bg)",
          text: "var(--theme-text)",
          subtext: "var(--theme-subtext)",
          line: "var(--theme-line)",
          fill: "var(--theme-fill)",
          accent: "var(--theme-accent)",
          duo: "var(--theme-duo)",
          card: "var(--theme-card)",
        },
      },
      fontFamily: {
        serif: ["Bitter", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        neo: "4px 4px 0px 0px var(--theme-line)",
        "neo-lg": "8px 8px 0px 0px var(--theme-line)",
        "neo-sm": "2px 2px 0px 0px var(--theme-line)",
      },
      animation: {
        drift: "drift 8s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "100%": { transform: "translate(12px, -15px) rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
