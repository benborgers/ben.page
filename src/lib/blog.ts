import { type CollectionEntry } from "astro:content";
import smartquotes from "smartquotes";

export type Post = CollectionEntry<"posts"> & {
  html: string | null;
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
    // Tiny optimization to use smart quotes.
    // When I use smartquotes.string on the entire body, it breaks image src's.
    html: post.html
      ? post.html.replace(
          /<(p|li)>(.*?)<\/(p|li)>/gs,
          (_match: string, tag: string, content: string) =>
            `<${tag}>${smartquotes.string(content)}</${tag}>`
        )
      : null,
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
