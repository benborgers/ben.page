import { type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts"> & {
  html: string;
};

export async function getPosts(
  localPosts: CollectionEntry<"posts">[]
): Promise<Post[]> {
  const json = await (
    await fetch(
      `https://ben-page-ghost.fly.dev/ghost/api/content/posts?key=${
        import.meta.env.GHOST_CONTENT_KEY
      }`
    )
  ).json();

  const ghostPosts = json.posts.map((post: any) => ({
    slug: post.slug,
    html: post.html,
    data: {
      title: post.title,
      date: new Date(post.published_at),
      unlisted: false,
      bestOf: false,
    },
  }));

  console.log(ghostPosts);

  return [...localPosts, ...ghostPosts];
}
