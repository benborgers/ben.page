---
title: "How to make an arrow with pure Tailwind CSS"
date: 2022-03-23
unlisted: true
---

You can create an arrow with pure Tailwind CSS by adding these CSS classes to a `div`:

- `h-0` and `w-0`
- `border-x-8` and `border-x-transparent`
- `border-b-8` and `border-b-blue-600`

This creates a small triangle in color `blue-600` that looks like this:

![](/posts/tailwind-arrow/image-7.png)

You can swap out the `blue-600` for any other color to change the color of the triangle.

To get a differently sized or proportioned arrow, you can tweak the widths of the borders, like this (note that the transparent border doesn’t need to be the same width as the colored one):

```html
<div
  class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600"
></div>
```

To get an arrow that points left or right, you can use `border-y-8` and `border-y-transparent` instead. Moving the visible border (in these examples, it’s `border-b`) changes the direction in which the arrow points — the arrow always points _away_ from the side with the border.

Why does this CSS trick work? [Here’s a CodePen that demonstrates why it works](https://codepen.io/chriscoyier/embed/preview/lotjh?default-tabs=css%2Cresult&height=300&host=https%3A%2F%2Fcodepen.io&slug-hash=lotjh).

Lastly, I’ve created [a playground on Tailwind Play](https://play.tailwindcss.com/BNW4VNbP5K) with some examples of triangles that you can try out.
