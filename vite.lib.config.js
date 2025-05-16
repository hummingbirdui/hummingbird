/* eslint-disable no-undef */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        modal: resolve(__dirname, 'src/scripts/modal.ts'),
        dropdown: resolve(__dirname, 'src/scripts/dropdown.ts'),
        global: resolve(__dirname, 'src/global.ts'),
      },
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      output: [
        {
          format: 'cjs',
          dir: 'lib/cjs',
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.facadeModuleId?.includes('scripts')) {
              return 'scripts/[name].js';
            }
            return '[name].js';
          },
          chunkFileNames: 'dom/[name].js',
        },
        {
          format: 'es',
          dir: 'lib/esm',
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.facadeModuleId?.includes('scripts')) {
              return 'scripts/[name].js';
            }
            return '[name].js';
          },
          chunkFileNames: 'dom/[name].js',
        },
      ],
    },
  },
  plugins: [
    dts({
      outDir: ['lib/cjs', 'lib/esm'],
      include: ['src'],
    }),
  ],
});
