---
title: How to download an image with node-fetch
date: 2021-03-28
unlisted: true
---

`node-fetch` is a great package that allows you to use the wonderful `fetch` API in server-side Node.js. It can also be used to request and download images from a URL to the local filesystem!

Here's how you do it, assuming that you have `node-fetch` already installed ( by running `npm install node-fetch`).

```jsx
const fs = require("fs"); // Built-in filesystem package for Node.js
const fetch = require("node-fetch");

const imageUrl = "https://via.placeholder.com/350x150";

fetch(imageUrl).then((res) =>
  res.body.pipe(fs.createWriteStream("./path/to/image.png"))
);
```

This downloads the image at `imageUrl` and "pipes" (downloads) it to the given path.

**Note:** Make sure that the folder you're downloading into exists already. If it doesn't, you'll want to create the folders required by doing something like:

```jsx
const fs = require("fs");

fs.mkdirSync("./path/to", { recursive: true });
```
