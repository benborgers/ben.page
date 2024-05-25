---
title: "How to use Tailwind with Eleventy"
date: 2020-12-28
unlisted: true
---

If you have an Eleventy site and want to add Tailwind CSS to it, first install these npm packages: `tailwindcss`, `postcss`, `postcss-cli`, `autoprefixer`, and `cssnano`.

PostCSS is a tool for outputting your Tailwind CSS file, and `postcss-cli` will allow us to run it from the terminal. `autoprefixer` and `cssnano` are plugins for PostCSS that make the CSS work in more browsers and minify the CSS.

Next, run this command to set up your Tailwind and PostCSS configuration files (which will be named `tailwind.config.js` and `postcss.config.js`):

```bash
npx tailwindcss init -p
```

In your `tailwind.config.js` file, set the `purge` property. This will allow Tailwind to remove all unused CSS when building your Eleventy site, which makes it **much** faster.

```javascript
purge: [ '_site/**/*.html' ],
```

_This is by far the easiest way I've figured out to do it. It looks through the outputted HTML files of your site in `_site`, so keep in mind that you have to generate your CSS **after** generating the Eleventy site._

Modify your `postcss.config.js` file so that it looks like this, so that you're using all the plugins we installed:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {},
  },
};
```

Last step: create your actual CSS file that will get turned into Tailwind CSS. I like to put it at `./style.css`, and fill it with this:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now you can use this command to create a "development" build of your CSS:

```bash
postcss style.css > _site/style.css
```

And this command and create a "production" build of your CSS (with all the unused classes taken out):

```bash
NODE_ENV=production postcss style.css > _site/style.css
```

In practice, I like to include these in the `package.json` scripts for my project, so I can build the CSS and develop/build the site at the same time. That part of my `package.json` looks like this:

```json
"scripts": {
  "dev": "rm -rf _site && mkdir _site && postcss style.css > _site/style.css && eleventy --serve --quiet",
  "build": "rm -rf _site && eleventy && NODE_ENV=production postcss style.css > _site/style.css"
},
```

_Notice that, when building the site in production, I'm first building the site using the `eleventy` command and then building the CSS. This allows Tailwind to look at the `_site` directory where my Eleventy site is outputted and figure out which classes I didn't use._

Now you can run the `npm run dev` command to develop your Eleventy site, and the `npm run build` command to build the site and CSS.

To use the new `style.css` file outputted, just include it in your Eleventy templates:

```html
<link rel="stylesheet" href="/style.css" />
```
