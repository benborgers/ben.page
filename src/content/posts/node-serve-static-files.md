---
title: "How to serve static files with Node.js"
date: 2020-12-03
published: true
unlisted: true
---

If you have a folder of static files and want to serve them using Node.js, you can use a package called `serve-handler`.

First, install the package:

```bash
npm install serve-handler
```

Then, here's an example of how to use it to create a static file server:

```javascript
const serveHandler = require("serve-handler");
const http = require("http"); // comes pre-installed with Node.js

http
  .createServer((req, res) =>
    serveHandler(req, res, {
      public: "path/to/folder", // folder of files to serve
    })
  )
  .listen(8000);
```

Now, if you run this Node.js script, you'll have a static file server at `localhost:8000` for the `path/to/folder` directory.

There are more options for `serve-handler` (other than `public`) in [the documentation](http://npm.im/serve-handler).
