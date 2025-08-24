// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'http://localhost:4321/',
  srcDir: './apps',
  outDir: 'build',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    AutoImport({
      imports: ['@components/docs/Example.astro', '@components/docs/HbTable.astro'],
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          test: ['h2', 'h3', 'h4', 'h5', 'h6'],
          properties: {
            className: ['heading-anchor no-underline'],
            'aria-label': 'Link to section',
          },
          content: [],
        },
      ],
    ],
  },
});
