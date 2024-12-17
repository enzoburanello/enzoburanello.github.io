import { defineCollection, z } from 'astro:content';

// Standalone schema definition
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date().optional(), // Optional date with coercion
  updatedDate: z.coerce.date().optional(), // Optional date with coercion
  heroImage: z.string().optional(),
  mesImages: z.array(
    z.object({
      src: z.string(), // Image URL (required)
      alt: z.string().optional(), // Alternative text (optional)
    })
  ).optional(),
  mesVideos: z.array(
    z.object({
      src: z.string(), // Video URL (required)
    })
  ).optional(),
});

// Use the schema in the collection definition
const blog = defineCollection({
  type: 'content',
  schema: blogSchema,
});

// Export types
export type BlogPost = z.infer<typeof blogSchema>;
export const collections = { blog };
