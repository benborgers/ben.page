---
title: "How to allow CORS on Netlify Functions"
date: 2020-04-29
unlisted: true
---

CORS is a browser feature that blocks HTTP requests from one domain to another, unless the destination has the proper headers set up.

If you run into CORS errors with Netlify functions, you can fix them by returning a header called `access-control-allow-origin` with value `*`. This allows any (signified by `*`) origin (domain name) to make an HTTP request to the function.

You can return the header using the Netlify Functions `callback` function:

```javascript
callback(null, {
  statusCode: 200,
  body: "Hello, world!",
  headers: {
    "access-control-allow-origin": "*",
  },
});
```
