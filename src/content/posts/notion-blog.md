---
title: "How to use Notion as your blog's CMS"
date: 2020-02-17
unlisted: true
---

**Heads up!** This post was written before Notion came out with an official API, and uses a reverse-engineering method that isn’t officially supported. Notion now has an official developer API, so you should [use that instead](https://developers.notion.com). I no longer maintain [Potion](https://github.com/benborgers/potion), which is used in this article.

---

This blog gets its content from [Notion](https://www.notion.so/product). I write the posts in a table in Notion, and whenever this site is rebuilt on [Vercel](https://vercel.com), the site pulls in all the posts and formats them into HTML.

To build this blog, I first reverse-engineered Notion's private API. Notion is working on a public API, but for the time being I decided to build my own API by watching Chrome's dev tools while loading a Notion doc.

This turned into an open-source project called [Potion](https://github.com/benborgers/potion), which includes hosted API endpoints that you can use.

## Setting up Notion

My blog posts are written in a full-page table in Notion:

![](https://user-images.githubusercontent.com/30215449/105618741-caa35700-5db8-11eb-8fe9-0b0710fbd16f.png)

Because of Notion's structure for tables, each row in this table is also its own Notion document. This document contains the content of each blog post.

I also have a few other fields (columns) in the table, which include the URL of the blog post, when it was published, and whether it should be made public. I can use these to transfer each blog post (each row) onto my website.

## Using the API

Now for the fun part: pulling in the blog posts from Notion.

As I mentioned earlier, building this blog relied heavily on API endpoints from my open-source project [Potion](https://github.com/benborgers/potion), specifically `potion-api.now.sh/table` for getting the list of blog posts and `potion-api.now.sh/html` for getting the HTML for each blog post.

There's more documentation in Potion's [README](https://github.com/benborgers/potion/blob/master/README.md), and if you have any questions about how to use Potion feel free to [send me an email](mailto:benborgers@hey.com).

Also make sure to set your Notion table to **public sharing** so the API can access it.

Essentially, when my site is being built, I use [`node-fetch`](https://npm.im/node-fetch) to make a request to `/table` and list out all the blog posts. It filters down to only blog posts where `fields.Published` is `true`, and then builds my site's `/blog` page to list those posts.

Then, for each published post, it takes the `id` of that row in the table and makes another request to `/html` using that page's ID. This endpoint returns fully-baked HTML of the document's contents. I now just have to insert that HTML into a template for each blog post, along with the title from the earlier `/table` call, and I can generate all the blog post pages (like the one you're looking at right now).

## Other blog posts

I've written some other blog posts on using the Potion API for Notion:

- [API to read a Notion table](/notion-table)
- [How to turn a Notion doc into a website](/notion-to-website)
