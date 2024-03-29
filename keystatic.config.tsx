import { config, fields, collection } from "@keystatic/core";
import { video } from "./keystatic/video-block";
import { tweet } from "./keystatic/tweet-block";
import { gallery } from "./keystatic/gallery-block";

export default config({
  ui: {
    brand: {
      name: "ben.page",
      mark: () => (
        <img
          src="https://emojicdn.elk.sh/🐙"
          style={{
            height: 20,
            transform: "translateY(-1.5px)",
          }}
        />
      ),
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
      entryLayout: "content",
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
            tweet,
            gallery,
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
