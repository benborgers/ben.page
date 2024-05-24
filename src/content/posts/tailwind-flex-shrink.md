---
title: How to prevent a flex item from shrinking with Tailwind CSS
date: 2021-09-30
published: true
unlisted: true
---

I had an issue where I had a flexbox (`.flex` with Tailwind) layout for two elements, but once the screen got narrower one element (in my case, an SVG) would get squished by the other element.

I wanted that one element to keep its original size and not get smaller when the other element squeezed it.

I was able to fix the problem by applying Tailwind's `.flex-shrink-0` class to the element that was becoming smaller!

The markup looked a bit like this:

```html
<div class="flex">
  <svg class="flex-shrink-0"></svg>
  <p>...</p>
</div>
```
