---
title: "How to fix Tailwind CSS `ring` not working in iOS Safari"
date: 2023-02-15
unlisted: true
---

I was trying to use the Tailwind CSS [ring](https://tailwindcss.com/docs/ring-width) classes on an `<input />`, but they didn’t seem to work in iOS Safari.

Finally, I figured out that you have to add the `appearance-none` class to the input to make the ring work!

This is because iOS adds a shadow to the input by default, and the Tailwind `ring` classes use a shadow under the hood. Adding `appearance-none` removes iOS’ default styling for the input.

```html
<input class="appearance-none ring ring-cyan-400" />
```
