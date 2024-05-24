---
title: How to invert Tailwind Typography custom gray theme
published: true
unlisted: true
date: 2022-05-07
---

When using the Tailwind CSS `@tailwindcss/typography` plugin, you can invert the colors by adding the `prose-invert` class in addition to the `prose` class.

But I found that `prose-invert` wasn’t working when I also added a custom grayscale color theme, like `prose-stone` for [“stone”](https://tailwindcss.com/docs/customizing-colors) gray colors rather than the default.

Eventually, I figured out that you have to make the `prose-invert` class override everything else using the `!important` specificity:

```html
<div class="prose prose-stone !prose-invert"></div>
```

Putting the `!` in front of the `prose-invert` class allows it to not be overridden by the chosen gray scale (either `prose-slate`, `prose-zinc`, `prose-neutral`, or `prose-stone`), so the colors will stay inverted in a sort of “dark mode.”

I suspect this may be a bug with Tailwind Typography, but for now adding that exclamation mark fixes it.
