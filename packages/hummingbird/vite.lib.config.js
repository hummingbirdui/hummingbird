import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import fs from 'fs';

const srcDir = resolve(import.meta.dirname, 'src');
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

const getEntryFileName = (ext) => (chunkInfo) => {
  return rootEntries[chunkInfo.name] ? `[name].${ext}` : `scripts/[name].${ext}`;
};

export default defineConfig({
  publicDir: false,
  resolve: {
    alias: [
      // Same as vite.config.js: use Bootstrap's ESM sources, not its UMD dist files.
      { find: /^bootstrap\/js\/dist\/(.*)$/, replacement: 'bootstrap/js/src/$1.js' },
    ],
  },
  build: {
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    lib: {
      entry: entries,
    },
    rolldownOptions: {
      external: [],
      output: [
        {
          format: 'cjs',
          dir: 'lib/cjs',
          entryFileNames: getEntryFileName('cjs'),
          chunkFileNames: 'utils/[name].cjs',
          exports: 'named',
          preserveModules: false,
        },
        {
          format: 'es',
          dir: 'lib/esm',
          entryFileNames: getEntryFileName('js'),
          chunkFileNames: 'utils/[name].js',
          exports: 'named',
          preserveModules: false,
        },
      ],
    },
  },
  plugins: [
    dts({
      // vite-plugin-dts v5 (unplugin-dts) renamed `outDir` to `outDirs`;
      // `moduleFormat: 'cjs'` emits .d.cts to pair with the .cjs build.
      outDirs: ['lib/esm', { dir: 'lib/cjs', moduleFormat: 'cjs' }],
      include: ['src'],
    }),
  ],
});
