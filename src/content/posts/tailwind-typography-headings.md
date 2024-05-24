---
title: How to style Tailwind CSS Typography headings
published: true
unlisted: true
date: 2022-05-11
---

You can separately style headings (`<h1>`, `<h2>`, etc) of text that’s styled with the Tailwind CSS Typography plugin.

With Tailwind CSS v3.0, Tailwind lets you override the headings’ styles using the `prose-headings:` prefix.

For example, if you wanted to change the font or color of your headings, you could use this combination of classes:

```html
<div class="prose prose-headings:font-serif prose-headings:text-blue-800"></div>
```

You can add any Tailwind class after `prose-headings:`, and the Tailwind will generate the CSS necessary to apply that to any `<h1>`, `<h2>`, `<h3>`, `<h4>`, or `<th>` (“table header”) elements.

You can also target specific headings instead of all of them by using the `prose-h1:`, `prose-h2:`, etc, prefixes instead of `prose-headings:`.
