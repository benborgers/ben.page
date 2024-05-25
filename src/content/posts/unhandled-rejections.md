---
title: How to get --unhandled-rejections=strict working (Node.js)
date: 2021-08-22
unlisted: true
---

Node.js has a CLI option called `--unhandled-rejections=strict`, which causes the script to completely fail instead of just throwing a warning when a JavaScript `promise` runs into an error.

I wanted this option turned on because I wanted my [Netlify](https://netlify.com) build script to completely fail if a promise rejected, so that the deployment wouldn't finish successfully (despite the error) and publish a broken site.

At first, I tried doing it like this:

```bash
node build.js --unhandled-rejections=strict
```

but that didn't work.

**To get it to work, I had to put the `--unhandled-rejections=strict` _before_ the name of the Node.js script:**

```bash
node --unhandled-rejections=strict build.js
```

Putting it in this order, the CLI argument works and a rejected promise now causes the script to stop running.
