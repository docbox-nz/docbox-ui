import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
    },
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/material",
        "@mui/system",
        "@emotion/react",
        "@emotion/styled",
        "@emotion/cache",
      ],
    },
  },
  plugins: [react()],
});
