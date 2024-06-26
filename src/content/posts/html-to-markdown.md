---
title: How to convert HTML into Markdown with JavaScript
date: 2021-08-03
unlisted: true
---

There's plenty of libraries out there for turning markdown into HTML, but turning HTML into markdown is trickier.

Luckily I found [Turndown](https://github.com/mixmark-io/turndown), which is a fantastic JavaScript library for converting HTML into markdown.

To use it, first install Turndown:

```bash
npm install turndown
```

And then use it:

```javascript
const turndown = require("turndown");

const turndownService = new turndown();
const markdown = turndownService.turndown(
  "<p>Hello, <strong>world</strong></p>"
);
```

Calling the `.turndown()` method and passing it an HTML string will return that HTML converted into markdown syntax.

There's a bunch of [documented configuration options](https://github.com/mixmark-io/turndown#options) for Turndown. When I first used it, I found that the default markdown formatting settings were a bit strange. For example, headings are outputted in the _setext_ style (`===` on the line under the heading) instead of the _atx_ style (preceding the heading with `#`).

I used these configuration options to make Turndown's outputted markdown more what I expected:

```javascript
const turndownService = new turndown({
  headingStyle: "atx",
  hr: "---",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
});
```
