import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MathToolJsx/",
  // حذف external از rollupOptions
  build: {
    rollupOptions: {
      // external: ["react-router-dom"] // حذف این خط
    }
  }
});