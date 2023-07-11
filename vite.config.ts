import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: 'esnext',
  }
});