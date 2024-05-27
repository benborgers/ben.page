---
title: How to build a tooltip with Tailwind CSS
unlisted: true
date: 2022-06-06
---

In this post, we’re going to create a basic tooltip using [Tailwind CSS](https://tailwindcss.com) that looks like this:

<video src="/posts/tailwind-tooltip/172287179-a7f1d46b-2f40-4215-9706-ebd7676bc03a.mp4" controls playsinline></video>

This method requires no external libraries or packages.

Here’s the simplified code for that tooltip, without opinionated styling (background color, font size, etc):

```html
<!-- Padding so you can see the tooltip. -->
<div class="p-10">
  <div class="group relative w-max">
    <button>Click me!</button>
    <span
      class="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100"
    >
      This is a button.
    </span>
  </div>
</div>
```

- The tooltip is absolutely positioned above the button using the class `-top-7`. You can mess with the value `7` to move its position.
- The whole thing is wrapped in the `group` class, which allows us to use `group-hover:` — that means that when anything in the “group” is hovered (the “group” only includes the button, because the span is absolutely positioned outside of the group), the span will show.
- I used opacity instead of `hidden` and `group-hover:block` so we could have a nice fade-in with `transition-opacity`.
- I used `pointer-events-none` on the tooltip, which means that the mouse cannot interact with it at all — the tooltip’s text can’t be selected, etc.
  - If you want the tooltip’s text to be selectable, you still want to use this class when the tooltip isn’t showing so the text isn’t selectable while invisible. In that case, use the two classes `pointer-events-none group-hover:pointer-events-auto`.
- I used `w-max` multiple times so elements, like the button’s area that can be hovered, would be exactly the necessary width.

If you want to play with this code in a sandbox, including the slightly styled version in the video above, I created [a sandbox on Tailwind Play](https://play.tailwindcss.com/QM5A7FpFKL).
