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
      emptyOutDir: !isBundle, // Only empty on first build
      sourcemap: true,
      outDir: 'dist',
      minify: false,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'Hummingbird',
        fileName: 'hummingbird',
      },
      rollupOptions: {
        // Only externalize dependencies for non-bundle builds
        external: isBundle ? [] : ['@popperjs/core'],
        output: isBundle
          ? [
              // Bundle builds - include all dependencies
              {
                format: 'umd',
                entryFileNames: 'hummingbird.bundle.js',
                name: 'Hummingbird',
              },
              {
                format: 'umd',
                entryFileNames: 'hummingbird.bundle.min.js',
                name: 'Hummingbird',
                plugins: [terser()],
              },
            ]
          : [
              // Regular builds - external dependencies
              {
                format: 'umd',
                entryFileNames: 'hummingbird.js',
                name: 'Hummingbird',
                globals: {
                  '@popperjs/core': 'Popper',
                },
              },
              {
                format: 'umd',
                entryFileNames: 'hummingbird.min.js',
                name: 'Hummingbird',
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
