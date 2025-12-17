/* eslint-disable no-undef */
// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { loadEnv } from 'vite';
import { getBasePath } from './deploy-config.js';
import { remarkBasePath } from './apps/libs/remark.ts';
const { PUBLIC_STAGING_SITE_URL, PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

const isDev = process.env.NODE_ENV === 'development';
const isStaging = process.env.NODE_ENV === 'staging';
const site = isDev ? 'http://localhost:4321/' : isStaging ? PUBLIC_STAGING_SITE_URL : PUBLIC_SITE_URL;
const base = getBasePath(isDev);

export default defineConfig({
  site: site,
  base: base,
  srcDir: './apps',
  outDir: 'build',
  vite: {
    plugins: [tailwindcss()],
    logLevel: 'error',
  },

  integrations: [
    AutoImport({
      imports: [
        '@components/docs/Example.astro',
        '@components/docs/HbTable.astro',
        '@components/docs/HbAlert.astro',
        '@components/docs/ClassTable.astro',
        '@components/docs/TwClasses.astro',
        {
          './apps/libs/config.ts': ['getVersionedPath'],
        },
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [[remarkBasePath, base]],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        {
          pre(node) {
            return {
              type: 'element',
              tagName: 'div',
              properties: { class: 'grid' },
              children: [node],
            };
          },
        },
      ],
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
