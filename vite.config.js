import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/srinivasan/" : "/",
  build: {
    outDir: "dist",
    assetsDir: "src/assets",
    rollupOptions: {
      output: {
        // Keep original names for all asset files
        assetFileNames: "src/assets/[name][extname]",
        chunkFileNames: "src/assets/[name].js",
        entryFileNames: "src/assets/[name].js",
      },
    },
  },
}));
