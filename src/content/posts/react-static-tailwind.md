---
title: How to use Tailwind CSS with React Static
date: 2021-04-09
unlisted: true
---

First, install all the necessary dependencies:

```bash
npm install tailwindcss autoprefixer postcss postcss-cli
```

Tailwind is by itself a plugin for PostCSS, and PostCSS is a tool for transforming CSS. To create a PostCSS configuration file, run :

```bash
npx tailwindcss init -p
```

This will create both a `postcss.config.js` and `tailwind.config.js` file. The PostCSS config file will be set up to use the `autoprefixer` plugin too (which we installed at the beginning), which will add browser-specific prefixes to your CSS so it works in all browsers.

In your `tailwind.config.js` file, set the `purge` option to point to your React components. This will allow Tailwind to remove the CSS classes you didn't use to make the final CSS file smaller in production. If your React components are in the `src/` directory, for example:

```jsx
// excerpt from tailwind.config.js
purge: ["./src/**/*.js"];
```

Next, fill out your CSS file. Some React Static templates have the CSS file at `src/app.css`, so we'll replace the contents of that file with this:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

When this file goes through PostCSS, those three `@tailwind` directives will be replaced with the full Tailwind CSS framework.

We're nearing the end here! We need to add commands for building this CSS file, both in development and production. We'll use the PostCSS CLI (which we installed earlier) for that, and modify the following two commands in your `package.json`:

```json
// excerpt from package.json
"start": "NODE_ENV=development postcss src/app.css > dist.css && react-static start",
"build": "NODE_ENV=production postcss src/app.css > dist.css && react-static build"
```

It's important to define `NODE_ENV`, because that determines whether Tailwind will "purge" all your unused classes.

Those commands output the built version of `src/app.css` to a file called `dist.css`. You'll see it in your project's folder after running either of those commands.

We don't really want that file to be uploaded to Git, so we'll add it to our `.gitignore` file so it doesn't get committed. This is optional, and only if you're using Git for version control.

```bash
# excerpt from .gitignore file
dist.css
```

Lastly! We want to actually use that outputted `dist.css` file. In your `src/App.js` component, there's a line that imports the `./app.css` file. However, that's the un-built CSS file — the fully processed and built one lives at `dist.css`. So switch that import line in `src/App.js` to this:

```jsx
import "../dist.css";
```

And that's it! Now you have Tailwind CSS working with a React Static website, both in development and production.
