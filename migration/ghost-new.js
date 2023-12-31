import ghost from "./ghost-new.json" assert { type: "json" };
import fs from "fs";
import { htmlToMdoc } from "./lib.js";

const posts = ghost.db[0].data.posts;
const posts_tags = ghost.db[0].data.posts_tags;

for (const post of posts.filter((p) => p.status === "published")) {
  const { title, slug, html } = post;
  const technical = !!posts_tags.find((pivot) => pivot.post_id === post.id);

  fs.writeFileSync(
    `../posts/${slug}.mdoc`,
    [
      "---",
      `title: '${title}'`,
      `date: '${new Date(post.published_at).toISOString().split("T")[0]}'`,
      `published: true`,
      `unlisted: ${technical}`,
      "---",
      "",
      htmlToMdoc(html),
    ].join("\n")
  );
}
