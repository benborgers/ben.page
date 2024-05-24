---
title: "How to change the underline color with Tailwind CSS"
date: 2022-02-14
published: true
unlisted: true
---

Now with Tailwind CSS v3, you can change the color of the underline for underlined text.

The classes for making this are all of the form `decoration-{color}`.

_Sidenote: they’re named this way because the `underline` class in Tailwind technically sets the CSS property `text-decoration: underline`. For example, Tailwind also has a `line-through` class, which sets `text-decoration: line-through` (crossing something out). So the `decoration-{color}` classes can also be used to change the color of the strikethrough line._

For example, you could make the underline under a piece of text red:

```html
<p class="underline decoration-red-500">Hello, world!</p>
```

Whatever colors work normally with Tailwind CSS will also work here. You can also take a look at Tailwind’s documentation for a [full list of possible colors](https://tailwindcss.com/docs/customizing-colors).
