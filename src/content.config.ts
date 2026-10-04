import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const govconU = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/govcon-u' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { 'govcon-u': govconU };
