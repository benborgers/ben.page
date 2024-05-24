---
title: "How to speed up Gatsby builds on Netlify"
date: 2020-11-17
published: true
unlisted: true
---

I recently discovered that you can greatly improve the speed of Gatsby builds on Netlify, especially if you have a lot of images being optimized with `gatsby-image`, through the Netlify plugin **Gatsby Cache**.

Open your [Netlify dashboard](https://app.netlify.com) and click on the **Plugins** tab. Search for "Gatsby Cache" and click **Install**, then find your Gatsby site and install the plugin to that site.

This plugin will take effect on future builds, and it'll persist the Gatsby build cache between changes. This means that Gatsby will be able to intelligently save time, such as not re-optimizing images that haven't changed.
