// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321/',
  srcDir: './apps',
  outDir: 'build',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    AutoImport({
      imports: ['@components/docs/Example.astro'],
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-dark',
        dark: 'github-dark',
      },
    },
  },
});
