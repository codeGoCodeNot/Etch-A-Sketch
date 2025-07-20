import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    port: 3000,
    open: true, // opens browser on `npm run dev`
  },
  build: {
    outDir: "dist",
  },
});
