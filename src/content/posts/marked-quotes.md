---
title: "How to get curly quotes with Marked.js"
date: 2020-11-30
unlisted: true
---

Marked.js is a library for parsing Markdown into HTML.

I personally think that curly or "smart" quotes look better in writing, like this:

```
"straight quotes"
“curly quotes”
straight apostrophe: they're
curly apostrophe: they’re
```

To turn straight quotes into curly quotes when parsing with Marked.js, use the `setOptions` function to turn "smartypants" rendering on:

```javascript
marked.setOptions({ smartypants: true });

marked.parse(/* markdown content */);
```

Now, `marked.parse` will produce HTML with intelligently replaced curly quotes.
