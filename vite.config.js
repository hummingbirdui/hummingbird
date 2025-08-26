/* eslint-disable no-undef */
import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import terser from '@rollup/plugin-terser';

export default defineConfig(({ mode }) => {
  const isBundle = mode === 'bundle';

  return {
    publicDir: false,
    build: {
      emptyOutDir: !isBundle,
      sourcemap: true,
      outDir: 'dist',
      minify: false,
      lib: {
        entry: path.resolve(__dirname, isBundle ? 'src/index.umd.ts' : 'src/index.ts'),
        name: 'hummingbird',
        fileName: 'hummingbird',
      },
      rollupOptions: {
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
