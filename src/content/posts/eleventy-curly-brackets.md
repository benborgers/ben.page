---
title: How to fix curly bracket ({{ }}) parse errors in Eleventy markdown
date: 2021-10-13
unlisted: true
---

I ran into some issues when creating an [Eleventy](https://11ty.dev) site where I had curly braces in my markdown posts (`{{ like this }}`), which were meant as part of code samples and not as dynamic variables to be evaluated by Eleventy.

To solve this, I _removed_ the templating engine that markdown is processed with. You can do this in your `.eleventy.js` configuration file like this:

```js
module.exports = function (eleventyConfig) {
  return {
    markdownTemplateEngine: false,
  };
};
```
