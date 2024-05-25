---
title: "How to do a wavy underline with Tailwind CSS"
date: 2022-02-15
unlisted: true
---

Tailwind CSS has the necessary utility classes to do a wavy text underline, like this:

![](/posts/tailwind-wavy/image-11.png)

All you need to do is add the usual `underline` class, and then add the `decoration-wavy` class in addition.

For example, these classes produce the image above:

```html
<p class="underline decoration-wavy decoration-cyan-400 text-xl font-bold">
  Hello, world!
</p>
```
