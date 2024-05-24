---
title: "How to add Fathom Analytics to Gatsby"
date: 2019-10-21
published: true
unlisted: true
---

[Fathom](https://usefathom.com/ref/TUIPJE) offers simple and privacy-focused analytics that you can use for your Gatsby site.

Using the new hosted Fathom script, you can just drop this snippet into the `<head>` of every Gatsby page you want to track. (You can use a package like [react-helmet](https://npm.im/react-helmet) with [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/) to insert things into the HTML head).

```html
<script
  src="https://cdn.usefathom.com/script.js"
  spa="auto"
  site="ABCDEF"
  defer
></script>
```

Make sure to change the `site` code to your site ID. You can also use your [Fathom custom domain](https://usefathom.com/support/custom-domains) instead of the default `src`.

With Fathom's new tracking script, the `spa="auto"` attribute will make it automatically work with Gatsby, so you no longer need to use a Gatsby plugin to help Fathom detect when the page changes.
