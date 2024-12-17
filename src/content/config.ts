import { defineCollection, z } from 'astro:content';

// Définition de la collection "blog"
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),  // Optional date with coercion
    updatedDate: z.coerce.date().optional(),  // Optional date with coercion
    heroImage: z.string().optional(),
    mesImages: z.array(z.object({
      src: z.string(),  // URL de l'image obligatoire
      alt: z.string().optional(),  // Texte alternatif de l'image, facultatif
    })).optional(),
    mesVideos: z.array(z.object({
      src: z.string(),  // URL de la vidéo obligatoire
     
    })).optional(),
  }),
});

// Export de la collection avec types et schéma validés
export type BlogPost = z.infer<typeof blog.schema>;

export const collections = { blog };
