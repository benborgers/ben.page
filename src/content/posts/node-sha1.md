---
title: How to sha1 hash with Node.js
date: 2021-03-28
unlisted: true
---

You don't need to install external packages to hash a string using the SHA-1 hashing method.

Node.js comes with a built-in package called `crypto` that you can use. Here's a simple way:

```jsx
const crypto = require("crypto");

const str = "This is the string I want to hash.";
const hash = crypto.createHash("sha1").update(str).digest("hex");
```

The resulting `hash` is `str`, hashed using SHA-1 to create a shorter string that is fairly unique to the original string.
