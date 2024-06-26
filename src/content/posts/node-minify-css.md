---
title: "How to minify CSS with Node.js"
date: 2020-12-07
unlisted: true
---

We'll be using PostCSS to easily minify a string of CSS in a Node.js script.

First, install the necessary packages:

```bash
npm install postcss cssnano autoprefixer
```

`postcss` is what we're using the do the minifying, and `cssnano` and `autoprefixer` are _plugins_ for PostCSS that tell PostCSS how to manipulate the CSS. `cssnano` comes with a bunch of built-in techniques for making CSS smaller, and `autoprefixer` adds those `-webkit` or `-moz` prefixes where necessary to make your CSS compatible with all browsers.

Now that you've installed the npm packages, here's how you use them:

```javascript
const postcss = require("postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

// Wrapped in a function so we can use async/await
const minifyCss = async () => {
  // This CSS might be imported from a file, or anywhere else
  const css = `
    * {
      font-family: system-ui;
    }
  `;

  // We pass in an array of the plugins we want to use: `cssnano` and `autoprefixer`
  const output = await postcss([cssnano, autoprefixer]).process(css);

  // The `css` property of `output` is the minified CSS as a string
  const minifiedCss = output.css;
};

minifyCss();
```
