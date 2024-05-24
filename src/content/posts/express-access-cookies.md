---
title: "How to access cookies with Express"
date: 2020-03-18
published: true
unlisted: true
---

The best way to access cookies with an Express server is using the `cookie-parser` middleware package.

Install it:

```bash
npm install cookie-parser
```

And then add it to your server:

```jsx
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// the rest of your Express server...
```

You can then access the cookies of any request:

```jsx
app.get("/", (req, res) => {
  const cookies = req.cookies;
  const token = req.cookies.token;

  // ...etc
});
```
