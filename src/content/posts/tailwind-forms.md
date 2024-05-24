---
title: How to add @tailwindcss/forms to an existing app
published: true
unlisted: true
date: 2022-06-03
---

[Tailwind CSS](https://tailwindcss.com) has this great package called [`@tailwindcss/forms`](https://github.com/tailwindlabs/tailwindcss-forms) that pre-styles form inputs for you.

But what if you want to add that package to an existing project, without globally affecting the existing form inputs?

First, install the plugin:

```bash
npm install @tailwindcss/forms
```

Now, register the plugin in the `plugins` array in your `tailwind.config.js` file, specifying a `strategy` of `class`:

```js
// tailwind.config.js

plugins: [
  require("@tailwindcss/forms")({
    strategy: "class",
  }),
];
```

Setting `strategy: "class"` means that inputs won’t be globally styled by default. Instead, you’ll be able to slowly opt in to new inputs that you want to be styled by the Forms plugin.

You can opt in by adding a specific class to new form inputs in your app. For most inputs it’s `form-input`, but there’s also `form-checkbox`, `form-select`, etc. The full list of classes to reference is [here](https://github.com/tailwindlabs/tailwindcss-forms#using-classes-to-style).
