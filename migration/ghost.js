import ghost from "./ghost.json" assert { type: "json" };
import fs from "fs";
import { htmlToMdoc } from "./lib.js";

const posts = ghost.db[0].data.posts;
const posts_tags = ghost.db[0].data.posts_tags;

for (const post of posts.filter((p) => p.status === "published")) {
  const { title, slug, html } = post;
  const technical = !!posts_tags.find((pivot) => pivot.post_id === post.id);

  let mdoc = htmlToMdoc(html);

  mdoc = mdoc.replace(/!\[\]\(__GHOST_URL__(.+?)\)/g, (_, match) => {
    const filename = match.split("/").pop();

    fs.mkdirSync(`../public/posts/${slug}`, { recursive: true });
    fs.copyFileSync(
      match.replace("/content/images", "./ghost-images"),
      `../public/posts/${slug}/${filename}`
    );
    return `![](/posts/${slug}/${filename})`;
  });

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
      mdoc,
    ].join("\n")
  );
}
