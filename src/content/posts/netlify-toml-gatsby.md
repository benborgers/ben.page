---
title: "How to set up netlify.toml for Gatsby"
date: 2019-12-18
unlisted: true
---

Netlify's configuration file, [netlify.toml](https://docs.netlify.com/configure-builds/file-based-configuration/), allows you to define various settings for how your site will be deployed on Netlify.

A basic `netlify.toml` file (placed at the root directory of your project) for a Gatsby site looks like this:

```toml
[build]
    command = "gatsby build"
    publish = "public"
[dev]
    command = "gatsby develop"
```

The first `[build]` block tells Netlify that they should run `gatsby build` on their servers whenever you publish a new version of the site, and then publish whatever Gatsby puts in the `public` folder.

The second `[dev]` block tells Netlify that it should run `gatsby develop` whenever you run `netlify dev` on the command line to develop locally. Why use `netlify dev` instead of `gatsby develop`, the normal way of starting Gatsby's development server? Running Gatsby's command through [Netlify Dev](https://www.netlify.com/products/dev/) allows you to emulate the final Netlify site more closely. This includes:

- Pulling in environment variables defined in your Netlify site dashboard
- Performing Netlify redirects you've defined
- Compiling and locally running Netlify Functions

There's a lot more you can configure in your `netlify.toml` file, such as environment variables, redirects, headers, and image compression. More information is in [Netlify's documentation](https://docs.netlify.com/configure-builds/file-based-configuration/).
