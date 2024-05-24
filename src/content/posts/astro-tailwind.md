---
title: How to use Tailwind CSS with Astro
date: 2022-08-24
published: true
unlisted: true
---

[Astro](https://astro.build) has first-class support for [Tailwind CSS](https://tailwindcss.com), so it's really easy to add Tailwind to your Astro website.

To add Tailwind, run this command in the terminal:

```
npm run astro add tailwind
```

That will install and set up the appropriate package (`@astrojs/tailwind`) in your `astro.config.mjs` file, like this:

```js
import tailwind from "@astrojs/tailwind";

export default {
  // ...
  integrations: [
    // ...
    tailwind(),
  ],
};
```

Now, just restart the dev server and Tailwind will be included in your site and working! You can start using Tailwind classes in your `.astro` and React/Vue/Svelte/etc files.

The terminal command above also created a `tailwind.config.cjs` configuration file, which you can use to customize Tailwind CSS as is standard.
