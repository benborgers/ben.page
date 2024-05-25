---
title: How to use Tailwind CSS with Remix
date: 2022-01-16
unlisted: true
---

This is the simplest way that I’ve found to add [Tailwind CSS](https://tailwindcss.com) v3.0 to a [Remix](https://remix.run) project.

First, install Tailwind:

```sh
npm install tailwindcss
```

and create a Tailwind config file:

```sh
npx tailwindcss init
```

We won’t be needing PostCSS for this, we’ll just be relying on what comes built-in with Tailwind.

In `tailwind.config.js`, point Tailwind to the files where you use Tailwind classes, so the classes can be properly generated based on what you use:

```js
// tailwind.config.js
content: ["./app/**/*.{jsx,tsx}"],
```

Next, create a CSS file at `app/styles/tailwind.css`. This file will be compiled into the actual Tailwind utility classes, and is also where you can put `@apply` statements:

```css
/* app/styles/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now, you’ll add two lines to the `scripts` section of your `package.json`:

```json
// package.json
"scripts": {
  "dev:css": "tailwindcss -i app/styles/tailwind.css -o app/styles/tailwind-build.css --watch",
  "build:css": "tailwindcss -i app/styles/tailwind.css -o app/styles/tailwind-build.css --minify"
}
```

Add the `dev:css` script to your existing `npm run dev` command with an `&` sign in between. This will run both commands at the same time, so running `npm run dev` will both start your Remix dev server _and_ start the Tailwind dev server. The exact command in `npm run dev` depends on your Remix hosting setup. Also, add the `build:css` command to the `npm run build` command, so your Tailwind CSS will be compiled when your app is built.

```json
// package.json
"scripts": {
  "dev": "<your-dev-command> & npm run dev:css",
  "build": "npm run build:css && <your-build-command>",
  "dev:css": "tailwindcss -i app/styles/tailwind.css -o app/styles/tailwind-build.css --watch",
  "build:css": "tailwindcss -i app/styles/tailwind.css -o app/styles/tailwind-build.css --minify"
}
```

Now, when you run `npm run dev`, you’ll notice a new file generated at `app/styles/tailwind-build.css`. When you make changes to your React files in Remix, the CSS file will be re-generated according to what Tailwind classes you’re using.

While we’re at it, add the `tailwind-build.css` file to your `.gitignore` so it doesn’t get committed to git (it doesn’t need to get committed, since it can be generated based on `app/styles/tailwind.css`).

```
# .gitignore
tailwind-build.css
```

Now, the last step! We need to import the generated Tailwind CSS file, so Remix knows to use it. Add this to your `root.jsx` file:

```javascript
// root.jsx
import tailwind from "~/styles/tailwind-build.css";

export function links() {
  return [{ rel: "stylesheet", href: tailwind }];
}
```

Now, you’ve got Tailwind CSS configured in your Remix project! `npm run dev` will now additionally start the Tailwind dev server and watch files for changes, and `npm run build` will build and minify Tailwind CSS for production and bundle it with your app.
