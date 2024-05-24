---
title: "Fix: export '__spreadArray' was not found in 'tslib'"
date: 2021-04-09
published: true
unlisted: true
---

I ran into this error when using `framer-motion`, but it looks like it affects several packages.

I was able to fix it just by running this command:

```bash
npm up
```
