import { config, fields, collection } from "@keystatic/core";
import { video } from "./keystatic/video-block";

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
        date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
        published: fields.checkbox({ label: "Published" }),
        unlisted: fields.checkbox({ label: "Unlisted" }),
        cover_image: fields.image({
          label: "Cover image",
          directory: "public/posts",
          publicPath: "/posts",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/posts",
            publicPath: "/posts",
          },
          componentBlocks: {
            video,
          },
        }),
      },
    }),
    photos: collection({
      label: "Photos",
      slugField: "id",
      schema: {
        id: fields.text({ label: "ID" }),
        date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
        photo: fields.image({
          label: "Photo",
          directory: "public/photos",
          publicPath: "/photos",
        }),
        caption: fields.text({ label: "Caption" }),
      },
    }),
  },
});
