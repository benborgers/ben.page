---
title: How to style a checkbox with Tailwind CSS
date: 2021-12-30
published: true
unlisted: true
---

To style a checkbox, first install the [`@tailwindcss/forms` plugin](https://tailwindcss.com/docs/plugins#forms), which makes it much easier to style form elements with Tailwind CSS.

To install the plugin, run this command in your terminal:

```sh
npm install @tailwindcss/forms
```

Then, add the plugin to your Tailwind config file:

```javascript
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
```

Now, your HTML checkboxes will look a lot better by default.

You can style the colors of your checkbox using Tailwind classes:

```html
<input
  type="checkbox"
  class="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
/>
```

For example, this gives the checkbox a light red background with a darker red border. The `text-red-500` utility makes the checked checkbox a darker red, and when the checkbox is focused, there’ll be a light red ring around it.

The ring helps users who are navigating the page via the keyboard to know when this checkbox is the active element, so they can hit the space bar to check/uncheck it. However, you can remove the default ring:

```html
<input type="checkbox" class="focus:ring-0" />
```

You can also use normal Tailwind utility classes to make the checkbox a different size, more or less rounded, or anything else:

```html
<input type="checkbox" class="h-8 w-8 rounded-full shadow" />
```

You can also style a checkbox differently when it’s checked, using the `checked:` variant:

```html
<input type="checkbox" class="shadow checked:shadow-xl" />
```
