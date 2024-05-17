import { defineCollection, z } from 'astro:content';

// currently unused
const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({image}) =>z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		offline: z.boolean().optional(),
		frontmatter: z.object({
			title: z.string(),
			description: z.string()
		}).optional()
	}),
});

const galleryEvents = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({image}) =>z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		// Transform string to Date object
		eventDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		offline: z.boolean().optional(),
		frontmatter: z.object({
			title: z.string(),
			description: z.string()
		}).optional()
	}),
});

export const collections = { blog, galleryEvents };
