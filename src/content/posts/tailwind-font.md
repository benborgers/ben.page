---
title: How to customize font in Tailwind CSS
date: 2021-03-30
published: true
unlisted: true
---

Tailwind CSS comes with default `.font-sans`, `.font-serif`, and `.font-mono` classes. But sometimes, you want to add your own font family, or customize one of the existing classes.

You can do this with your `tailwind.config.js` file using the **extend** functionality.

```jsx
// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  variants: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        cursive: ["cursive"],
      },
    },
  },
};
```

The `sans` line overwrites Tailwind's `.font-sans` class with your own font at the front, but then falls back to the Tailwind stack if your custom font doesn't load. The `cursive` line creates a new class called `.font-cursive` that has that font stack.

Now, next time you rebuild your Tailwind CSS file, those changes will be made to the font classes.

Notice that font names that contain a space must have additional quotes around them.
