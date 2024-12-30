import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this port if needed
  },
  resolve: {
    alias: {
      "@components": "/components",
      "@pages": "/pages",
      "@styles": "/styles",
      "@api": "/api",
    },
  },
});
