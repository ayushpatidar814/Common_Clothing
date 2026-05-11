import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three") || id.includes("@react-three") || id.includes("/maath/")) {
            return "three-stack";
          }
          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/gsap") || id.includes("node_modules/lenis")) {
            return "motion-stack";
          }
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react-stack";
          }
          return undefined;
        },
      },
    },
  },
});
