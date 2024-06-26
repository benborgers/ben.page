---
title: "How to fix “No matching version found for @remix-run/dev”"
date: 2023-01-03
unlisted: true
---

I was trying to create a new [Remix](https://remix.run) app using `npx create-remix@latest`, but kept running into this error:

```
No matching version found for @remix-run/dev@1.9.0.
```

When I tried to install `@remix-run/dev` by itself using npm, I got this error:

```
No versions available for undefined
```

Turns out the problem was that I still had the private npm repository for Remix configured, from back when they weren’t open source.

To remove that, I had to run this in the terminal:

```bash
npm config delete @remix-run:registry
```

After that, `npx create-remix@latest` worked perfectly.
