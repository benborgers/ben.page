import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      unlisted: z.boolean(),
      date: z.date(),
      bestOf: z.boolean().default(false),
    }),
  }),
};
