---
title: "How to remove double spaces in a string in JavaScript"
date: 2021-01-30
unlisted: true
---

Here's how you can use regex in JavaScript to remove double spaces:

```javascript
const string = "Here is my sentence.  There are  double spaces.";

const newString = string.replace(/ {2,}/g, " ");
```

This regex replaces any two or more spaces in a row with a single space.
