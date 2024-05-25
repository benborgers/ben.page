---
title: "How to render LaTeX to HTML with Node.js"
date: 2020-12-05
unlisted: true
---

To render LaTeX as HTML, we're going to be using the `KaTeX` [npm package](https://www.npmjs.com/package/katex). First, install it:

```bash
npm install katex
```

Now, to render a string of LaTeX into HTML, we can use that package:

```javascript
const katex = require("katex");

const latexString = "e = mc^2";

const html = katex.renderToString(latexString);
```

Now, `html` will be a rendering of the LaTeX in HTML. To make it show properly, you'll need to include KaTeX's special CSS file, which styles the outputted HTML with the correct fonts and positioning. Drop this CSS file into the `<head>` of your HTML file along with the rendered LaTeX:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/katex@0.12.0/dist/katex.min.css"
/>
```

Now, opening the HTML file containing the rendered LaTeX-as-HTML string and that linked CSS file will show the LaTeX beautifully rendered.
