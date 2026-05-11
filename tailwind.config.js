/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#f5f5f5",
        silver: "#c9d1d9",
        neon: "#7cf2ff",
        graphite: "#121212",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Bricolage Grotesque'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 242, 255, 0.18)",
        panel: "0 20px 60px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 30%), linear-gradient(135deg, rgba(124,242,255,0.12), transparent 25%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
      },
    },
  },
  plugins: [],
};
