---
title: "How to create a sitemap for a Gatsby site"
date: 2020-04-19
published: true
unlisted: true
---

Install the Gatsby plugin:

```bash
npm install gatsby-plugin-sitemap
```

Then, add the root URL of your site (before the part that starts with `/`) to your `gatsby-config.js`, and activate the plugin:

```javascript
// gatsby-config.js

module.exports = {
  siteMetadata: {
    siteUrl: "https://benborgers.com",
  },
  plugins: ["gatsby-plugin-sitemap"],
};
```

Done! Your sitemap will be created at `/sitemap.xml` in production builds of your Gatsby website, and will also be properly linked in the `<head>` of each page.
