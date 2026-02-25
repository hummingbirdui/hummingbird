import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const variantSchema = z.object({
  class: z.string(),
  desc: z.string(),
});

const classNamesSchema = z
  .object({
    component: z.array(variantSchema).optional(),
    inner: z.array(variantSchema).optional(),
    color: z.array(variantSchema).optional(),
    style: z.array(variantSchema).optional(),
    behavior: z.array(variantSchema).optional(),
    size: z.array(variantSchema).optional(),
    modifier: z.array(variantSchema).optional(),
  })
  .optional();

const docs = defineCollection({
  loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    toc: z.boolean().optional(),
    attributeComponent: z.string().optional(),
    attributeLink: z.string().optional(),
    redirects: z.boolean().optional(),
    classNames: classNamesSchema,
  }),
});

export const collections = { docs };
