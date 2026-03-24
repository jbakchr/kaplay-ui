import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: __dirname,
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "kaplay-ui": path.resolve(__dirname, "../src"),
    },
  },
});
