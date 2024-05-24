---
title: Remove quotes around blockquote with Tailwind Typography
date: 2024-01-02
published: true
unlisted: true
---

[Tailwind CSS Typography](https://tailwindcss.com/docs/typography-plugin) (`.prose`) adds quotation marks around `blockquote` elements by default. If you don't want them, you can remove them in two ways:

## By modifying your Tailwind config

```javascript
// part of tailwind.config.js

theme: {
  extend: {
    typography: {
      'no-quotes': {
        css: {
          'blockquote p:first-of-type::before': { content: 'none' },
          'blockquote p:last-of-type::after': { content: 'none' },
        },
      },
    },
  },
},
```

Then, you can use this new "no-quote" variant like this:

```html
<div class="prose prose-no-quotes">
  <!-- your content -->
</div>
```

## Using a Tailwind class

Alternatively, you can do the same thing directly in your CSS classes, like this:

```html
<div
  class="
    prose
    before:[&_blockquote_p:first-of-type]:content-none
    after:[&_blockquote_p:last-of-type]:content-none
  "
>
  <!-- your content -->
</div>
```

And boom! No more quotes around your `blockquote` elements.
