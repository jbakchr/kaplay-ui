import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "kaplay-ui",
      fileName: (format) => `kaplay-ui.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // KAPLAY (and other libs) should be marked external
      external: ["kaplay"],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
