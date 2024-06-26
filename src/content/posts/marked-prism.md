---
title: "How to use Marked and Prism.js together"
date: 2020-10-01
unlisted: true
---

For this blog, I wanted to parse the blog posts (written in markdown) and also add syntax highlighting to the code blocks so they can have nice readable colors.

I'm using [Marked](https://github.com/markedjs/marked) to parse markdown into HTML, and [Prism](https://github.com/PrismJS/prism) to parse code blocks within that markdown.

I wrote this `parseMarkdown()` function to turn raw markdown into HTML with syntax-highlighted code blocks:

```javascript
const marked = require("marked");
const prism = require("prismjs");

require("prismjs/components/prism-markup-templating");
require("prismjs/components/prism-css");
require("prismjs/components/prism-php");
require("prismjs/components/prism-json");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-yaml");
require("prismjs/components/prism-toml");

marked.setOptions({
  highlight: (code, lang) => {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

function parseMarkdown(text) {
  return marked.parse(text);
}
```

First, we import the `marked` and `prismjs` packages.

Then, we import different Prism "components" that allow it to parse different languages. The full list of components you can import is [here](https://github.com/PrismJS/prism/tree/master/components).

Then, we tell Marked that we want to handle code highlighting differently. If the code block has a language indicated, like this:

````markdown
```javascript
// we've indicated that this code is javascript
```
````

...**and** Prism is able to parse it (tested by seeing whether it's in `prism.languages` - Prism will be able to parse languages that we imported components for), we use `prism.highlight()` to syntax-highlight the code. Otherwise, we just return the code itself.

Now, if you look at the outputted HTML from the `parseMarkdown()` function, the code blocks are invisibly split up with classes that allow you to use [any Prism CSS theme](https://github.com/PrismJS/prism-themes) to style them.
