import { defineCollection, z } from 'astro:content';

// Définition de la collection "blog"
const blog = defineCollection({
  type: 'content', // Indique que c'est une collection de contenu
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),  // Champ date optionnel avec coercition
    updatedDate: z.coerce.date().optional(),  // Champ date mis à jour optionnel
    heroImage: z.string().optional(),  // Chemin de l'image principale, facultatif
    mesImages: z.array(
      z.object({
        src: z.string(),  // URL de l'image (obligatoire)
        alt: z.string().optional(),  // Texte alternatif (facultatif)
      })
    ).optional(),
    mesVideos: z.array(
      z.object({
        src: z.string(),  // URL de la vidéo (obligatoire)
      })
    ).optional(),
  }),
});

// Export de la collection et des types
export type BlogPost = z.infer<typeof blog.schema>;
export const collections = { blog };

