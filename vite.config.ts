import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: true,
    sourcemap: true,
    outDir: "dist",
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Hummingbird",
      fileName: "hummingbird",
    },
    rollupOptions: {
      output: [
        {
          format: "umd",
          entryFileNames: "hummingbird.js",
          name: "Hummingbird",
        },
        {
          format: "umd",
          entryFileNames: "hummingbird.min.js",
          name: "Hummingbird",
          plugins: [terser()],
        },
      ],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: [path.resolve(__dirname, "src/*")],
    }),
    tailwindcss(),
  ],
});
