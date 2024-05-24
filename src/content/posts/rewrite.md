---
title: "Website Rewrite"
date: 2022-02-13
published: true
unlisted: false
---

I’ve rewritten my personal website! That’s something I tend to do [a lot](https://benborgers.com/posts/rewriting/), but this time I wanted to do a quick rundown of the new site.

## The Look

![](/posts/rewrite/image-7.png)

New design for the homepage.

![](/posts/rewrite/image-8.png)

New design for blog posts.

I’ve kept the rose-colored accents from my blog at ben.cv, which match the 🐙 emoji that I tend to use to “brand” my website.

The title font is [Fraunces](https://fonts.google.com/specimen/Fraunces), and the text font is [Public Sans](https://fonts.google.com/specimen/Public+Sans) (a font originally developed for the United States government!).

## The Build

I rebuilt it using [Astro](https://astro.build). I originally considered [Eleventy](https://www.11ty.dev/), but I preferred Astro’s more modern templating language (which is similar to React). Styling is done using [Tailwind CSS](https://tailwindcss.com).

It’s hosted on [Netlify](https://netlify.com), and the site builds in about a minute. Previously, my builds on [Cloudflare Pages](https://pages.cloudflare.com/) took about 5 minutes.

## The Editor

The biggest thing I wanted to change for this new iteration was to move to [Ghost](https://ghost.org) as my blogging platform.

The previous iteration used just plain markdown files, which meant that I had to fire up VS Code to write. That led to me (surprise surprise) _not writing a lot of blog posts_.

Instead, I’ve been using Ghost for a personal blog for a month now, and I really like it. The editor is really simple but feels great to write in.

I merged my month of personal blog posts into this new blog, and I’ll be writing future technical blog posts in Ghost (I kept the backlog in markdown). I’m using tags in Ghost to separate between more personal blog posts (like this one!) and programming how-to articles (which aren’t very interesting to read if you haven’t explicitly searched for it and stumbled on my post).

## Overall

Overall, I’m happy with the rewrite! Hopefully the switch to Ghost means that I’ll have an easier time writing new blog posts.
