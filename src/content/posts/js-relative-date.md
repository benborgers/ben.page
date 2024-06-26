---
title: "How to format relative date with Node.js"
date: 2020-04-29
unlisted: true
---

A relative date is something like "23 minutes ago", "1 day ago", or "3 months ago".

My favorite Node.js package for formatting a normal `Date` object into a nice string is [tiny-relative-date](https://www.npmjs.com/package/tiny-relative-date).

First, install the package:

```bash
npm install tiny-relative-date
```

Then, you can use it like this:

```javascript
const relativeDate = require("tiny-relative-date"); // import the package

const date = new Date(); // any javascript date object

console.log(relativeDate(date)); // this returns the relative date
```

Done! Now you've got relative dates in Node.js.
