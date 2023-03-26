// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        category: z.string(),
        description: z.string().max(160, 'Short descriptions have better SEO!'),
        author: z.string(),
        publishDate: z.date(),
        language: z.enum(['en', 'de']),
        tags: z.array(z.string()),
        keywords: z.array(z.string()),
        image: z.string().optional(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'blog': blogCollection,
};