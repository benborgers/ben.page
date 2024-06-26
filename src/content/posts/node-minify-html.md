---
title: "How to minify HTML with Node.js"
date: 2020-11-27
unlisted: true
---

It's common practice to "minify" HTML, removing its extra spaces and unnecessary properties so that it's faster to load.

You can use the `html-minifier` npm package to minify HTML.

First, install the package:

```bash
npm install html-minifier
```

Now, you can use the package like this:

```javascript
const { minify } = require('html-minifier')

const originalHtml = /* html string */;

const minifiedHtml = minify(originalHtml, {
  collapseWhitespace: true,
  removeComments: true,
  collapseBooleanAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  minifyJS: true
})
```

There are lots of options for how to minify the HTML, and I've shown the ones that I usually turn on. You can see all the possible options in the [documentation](https://github.com/kangax/html-minifier).
