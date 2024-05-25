import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z
      .object({
        title: z.string(),
        unlisted: z.boolean(),
      })
      .and(
        z
          .object({
            date: z.date(),
          })
          .or(
            z.object({
              noDate: z.boolean(),
            }),
          ),
      ),
  }),
};
