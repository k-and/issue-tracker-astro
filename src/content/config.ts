import { defineCollection, z } from 'astro:content';

const issues = defineCollection({
	type: 'content',
	schema: z.object({
		software: z.string(),
		type: z.enum(['bug', 'feature']),
		title: z.string(),
		status: z.enum(['pending', 'reported', 'acknowledged', 'resolved']),
		acknowledged: z.boolean(),
		priority: z.enum(['low', 'medium', 'high']),
		date: z.string().transform((str) => new Date(str)),
	}),
});

export const collections = {
	issues,
};