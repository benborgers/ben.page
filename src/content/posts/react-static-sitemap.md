---
title: How to get absolute URLs in a React Static sitemap
date: 2021-04-07
unlisted: true
---

When I first generated used `react-static-plugin-sitemap`, it outputted a sitemap (at the URL `/sitemap.xml`) with URLs that are relative, meaning that they only start with `/`.

Sitemaps aren't supposed to have relative URLs, they're supposed to have full URLs (which start with `http://` or `https://` and include the domain).

This problem arises because React Static doesn't know which domain your site is going to be published at. You can fix this by adding a property to the object exported by `static.config.js`:

```jsx
// static.config.js

export default {
  siteRoot: "https://example.com",
};
```

Now, the URLs in `sitemap.xml` will have the full domain in them.
