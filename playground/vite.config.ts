import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "kaplay-ui": "../src",
    },
  },
});
