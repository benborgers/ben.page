import { type CollectionEntry } from "astro:content";

const getPostDate = (post: CollectionEntry<"posts">) => {
  if (post.data.date === null) {
    throw new Error("Post displayed on /blog has no date");
  }

  return post.data.date;
};

export default getPostDate;
