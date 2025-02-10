import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MathToolJsx/",
  build: {
    rollupOptions: {
      external: ["react-router-dom"]
    }
  }
});
