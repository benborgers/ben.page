---
title: How to fix LaTeX inputs wrapping in Sanity’s Portable Text editor
date: 2021-12-23
published: true
unlisted: true
---

I was having an issue with [Sanity](https://sanity.io)’s [official LaTeX plugin](https://www.sanity.io/plugins/sanity-plugin-latex-input) where inline equations were being wrapped at a certain width, and were therefore overlapping back on themselves:

![](/posts/sanity-latex-wrap/sanity-latex-wrap-before.png)

I found that this was due to some CSS that’s bundled inside Sanity Studio.

To fix this, I created a custom CSS file that I named `custom.css`, and put this CSS into that file to override the problematic styles:

```css
*[data-ui="Card"] > span > span {
  max-width: none;
}
```

Then, to tell Sanity Studio to include that CSS `custom.css` file, I referenced it in my `sanity.json` file:

```json
{
  ...
  "parts": [
    ...
    {
      "implements": "part:@sanity/base/theme/variables/override-style",
      "path": "custom.css"
    }
  ]
}
```

Now, with that custom CSS fixing the issue, the LaTeX inline inputs are the correct width!

![](/posts/sanity-latex-wrap/sanity-latex-wrap-after.png)
