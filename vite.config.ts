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
      name: "DocboxUI",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        dir: "dist",
        entryFileNames: "[name].[format].js",
        chunkFileNames: "[name].[format].js",
        exports: "named",
      },
      external: (id) => {
        return [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "@emotion/react",
          "@emotion/styled",
          "@emotion/cache",
          "@mui/material",
          "@mui/system",
        ].some((pkg) => id === pkg || id.startsWith(pkg + "/"));
      },
    },
  },
  plugins: [react()],
});
