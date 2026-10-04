import { defineCollection, z } from 'astro:content';

const govconU = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { 'govcon-u': govconU };
