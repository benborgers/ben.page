import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getReader } from "../lib/getReader";

export const GET: APIRoute = async ({ site }) => {
  const reader = getReader();
  const posts = (await reader.collections.posts.all()).filter(
    (post) => post.entry.published && !post.entry.unlisted && post.entry.date
  );

  return rss({
    title: "Ben Borgers",
    description: "Ben Borgers’ personal website.",
    site: site!,
    items: posts.map((post) => ({
      title: post.entry.title,
      pubDate: new Date(post.entry.date!),
      link: `/${post.slug}`,
    })),
  });
};
