import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		offline: z.boolean().optional(),
		frontmatter: z.object({
			title: z.string(),
			description: z.string()
		}).optional()
	}),
});

export const collections = { blog };
