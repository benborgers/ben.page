import { config, fields, collection } from "@keystatic/core";

export default config({
  ui: {
    brand: {
      name: "ben.page",
    },
  },
  storage: {
    kind: "github",
    repo: "benborgers/ben.page",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({
          label: "Date",
          defaultValue: {
            kind: "today",
          },
        }),
        published: fields.checkbox({ label: "Published" }),
        unlisted: fields.checkbox({ label: "Unlisted" }),
        cover_image: fields.image({
          label: "Cover image",
          directory: "public/posts/cover_image",
          publicPath: "/posts/cover_image",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/posts/content",
            publicPath: "/posts/content",
          },
        }),
      },
    }),
  },
});
