import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "uiPlugin",
      fileName: "uiplugin",
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
      insertTypesEntry: true,
      rollupTypes: false,
      include: ["src/**/*.ts", "src/**/*.d.ts"],
    }),
  ],
});
