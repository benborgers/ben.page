---
title: "How to customize the Tailwind CSS 2.0 color palette"
date: 2020-11-29
unlisted: true
---

Tailwind 2.0 comes with less colors by default, but has a wider range of color palettes that you can activate if you need them.

We'll do this by "extending" the Tailwind configuration, instead of overwriting the default colors.

Create or edit a file at the root of your project called `tailwind.config.js`. In it, you need to have this:

```javascript
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        // Colors you want to add go here
        rose: colors.rose,
        cyan: colors.cyan,
      },
    },
  },
};
```

In this example, we've added rose and cyan to the Tailwind color palette. This means you can now use them as text colors, background colors, gradients, or anywhere else in Tailwind that uses colors.

Now, next time you build your CSS file, those colors will be included in all the color-related utility classes.

You can see the full list of colors that you can use in [Tailwind's documentation](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).
