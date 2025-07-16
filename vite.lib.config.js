/* eslint-disable no-undef */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import fs from 'fs';

const srcDir = resolve(__dirname, 'src');
const scriptsDir = resolve(srcDir, 'scripts');

// root-level entries
const rootEntries = {
  index: resolve(srcDir, 'index.ts'),
  'index.umd': resolve(srcDir, 'index.umd.ts'),
};

// component entries
const scriptEntries = fs
  .readdirSync(scriptsDir)
  .filter((file) => file.endsWith('.ts'))
  .reduce((acc, file) => {
    const name = file.replace(/\.ts$/, '');
    acc[name] = resolve(scriptsDir, file);
    return acc;
  }, {});

const entries = { ...rootEntries, ...scriptEntries };

const getEntryFileName = (chunkInfo) => {
  return rootEntries[chunkInfo.name] ? '[name].js' : 'scripts/[name].js';
};

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    lib: {
      entry: entries,
    },
    rollupOptions: {
      external: [],
      output: [
        {
          format: 'cjs',
          dir: 'lib/cjs',
          entryFileNames: getEntryFileName,
          chunkFileNames: 'utils/[name].js',
          exports: 'named',
          preserveModules: false,
        },
        {
          format: 'es',
          dir: 'lib/esm',
          entryFileNames: getEntryFileName,
          chunkFileNames: 'utils/[name].js',
          exports: 'named',
          preserveModules: false,
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
