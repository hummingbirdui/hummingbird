import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import terser from '@rollup/plugin-terser';

export default defineConfig(({ mode }) => {
  const isBundle = mode === 'bundle';

  return {
    publicDir: false,
    resolve: {
      alias: [
        // `bootstrap/js/dist/*` are UMD files. Rolldown (Vite 8) wraps them as CommonJS,
        // so their `require('@popperjs/core')` survives into the browser build and throws.
        // Point at Bootstrap's ESM sources instead so Popper becomes a real import.
        { find: /^bootstrap\/js\/dist\/(.*)$/, replacement: 'bootstrap/js/src/$1.js' },
      ],
    },
    build: {
      emptyOutDir: !isBundle,
      sourcemap: true,
      outDir: 'dist',
      minify: false,
      lib: {
        entry: path.resolve(import.meta.dirname, isBundle ? 'src/index.umd.ts' : 'src/index.ts'),
        name: 'hummingbird',
        fileName: 'hummingbird',
      },
      rolldownOptions: {
        external: isBundle ? [] : ['@popperjs/core'],
        output: isBundle
          ? [
              {
                format: 'umd',
                entryFileNames: 'hummingbird.bundle.js',
                name: 'hummingbird',
              },
              {
                format: 'umd',
                entryFileNames: 'hummingbird.bundle.min.js',
                name: 'hummingbird',
                plugins: [terser()],
              },
            ]
          : [
              {
                format: 'umd',
                entryFileNames: 'hummingbird.js',
                name: 'hummingbird',
                globals: {
                  '@popperjs/core': 'Popper',
                },
              },
              {
                format: 'umd',
                entryFileNames: 'hummingbird.min.js',
                name: 'hummingbird',
                globals: {
                  '@popperjs/core': 'Popper',
                },
                plugins: [terser()],
              },
              {
                format: 'es',
                entryFileNames: 'hummingbird.esm.js',
              },
              {
                format: 'es',
                entryFileNames: 'hummingbird.esm.min.js',
                plugins: [terser()],
              },
            ],
      },
    },
    plugins: [tailwindcss()],
  };
});
