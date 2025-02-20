import path, { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    lib: {
      entry: {
        main: resolve(__dirname, "src/main.ts"),
        modal: resolve(__dirname, "src/components/modal.ts"),
        global: resolve(__dirname, "src/global.ts"),
      },
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      output: [
        {
          format: "cjs",
          dir: "lib/cjs",
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.facadeModuleId?.includes("components")) {
              return "components/[name].js";
            }
            return "[name].js";
          },
          chunkFileNames: "dom/[name].js",
        },
        {
          format: "es",
          dir: "lib/esm",
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.facadeModuleId?.includes("components")) {
              return "components/[name].js";
            }
            return "[name].js";
          },
          chunkFileNames: "dom/[name].js",
        },
      ],
    },
  },
  plugins: [
    dts({
      outDir: ["lib/cjs", "lib/esm"],
      include: ["src"],
    }),
  ],
});
