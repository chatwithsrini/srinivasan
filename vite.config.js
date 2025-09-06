import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/srinivasan/" : "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // Simple naming strategy to avoid MIME type issues
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name].mjs",
        entryFileNames: "assets/[name].mjs",
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "production"
    ),
  },
  server: {
    fs: {
      strict: false,
    },
  },
}));
