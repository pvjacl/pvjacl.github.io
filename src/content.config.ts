import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Chapter News
const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
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

// Gallery Events
const galleryEvents = defineCollection({
	// Load Markdown and MDX files in the `src/content/galleryEvents/` directory.
	loader: glob({ base: './src/content/galleryEvents', pattern: '**/*.{md,mdx}' }),
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
		landingEventPullDate: z.coerce.date().optional(),
		frontmatter: z.object({
			title: z.string(),
			description: z.string()
		}).optional()
	}),
});

// Chapter events
const events = defineCollection({
	// Load Markdown and MDX files in the `src/content/events/` directory.
	loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
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
		landingEventPullDate: z.coerce.date().optional(),
		frontmatter: z.object({
			title: z.string(),
			description: z.string()
		}).optional()
	}),
});

export const collections = { blog, galleryEvents, events };
