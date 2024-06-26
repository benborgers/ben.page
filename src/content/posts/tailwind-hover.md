---
title: "How to add Tailwind classes only when the user can hover"
date: 2022-02-07
unlisted: true
---

I recently had a situation where I wanted to have a Tailwind class only apply when the user had the ability to hover (only on a computer with a mouse, but not on a phone).

Tailwind CSS doesn’t have this ability built in, but you can add it as custom modifier (like the `sm:` modifier). Make this change in your `tailwind.config.js` file, in addition to what’s already there:

```javascript
module.exports = {
  theme: {
    extend: {
      screens: {
        "can-hover": { raw: "(hover: hover)" },
      },
    },
  },
};
```

Then, re-compile your Tailwind CSS (in some setups, you don’t have to run a separate command, because Tailwind CSS is always being re-build according to what you’re writing in the background).

Now, you’ll be able to use the modifier with any Tailwind CSS property:

```html
<div class="can-hover:blur hover:blur-none"></div>
```

The above Tailwind class means, “if the device has the ability to hover, add a blur. If it doesn’t have the ability to hover, don’t add a blur. Regardless, un-blur when the user hovers over it.”
