---
title: How to create custom CSS Grids with Tailwind JIT mode
date: 2021-07-07
published: true
unlisted: true
---

If you have [just-in-time compiler](https://tailwindcss.com/docs/just-in-time-mode) activated for Tailwind CSS, you can now define custom CSS grid layouts just using utility classes that are generated on the fly.

To use it, just list out the measurements you would normally write with a comma in between.

Instead of this CSS:

```css
display: grid;
grid-template-rows: 2.5rem max-content 1fr;
```

You can use these classes:

```html
<div class="grid grid-rows-[2.5rem,max-content,1fr]"></div>
```

This has some benefits, such as being able to apply different grid layouts at different breakpoints:

```html
<div class="grid grid-rows-[1rem,1fr] sm:grid-rows-[2.5rem,1fr]"></div>
```
