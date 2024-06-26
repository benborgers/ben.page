---
title: "How to add normalize.css to Gatsby"
date: 2019-10-15
unlisted: true
---

[Normalize.css](https://necolas.github.io/normalize.css/) is a set of CSS rules used to make all browsers render things consistently. Since all browsers come with their own "base" styles that can vary slightly, it's useful for making sure that your CSS styles look the same in every browser and smoothes over any inconsistencies between browsers.

To add it to your Gatsby site, first install the `normalize.css` npm package using the command line:

```bash
npm install normalize.css
```

Then, import the stylesheet to any Gatsby page you want to use it on:

```jsx
import React from "react";

import "normalize.css";

export default () => {
  return <div>the page is here</div>;
};
```

You'll need to do this on every page that you want to use normalize.css on. You can make this less tedious by adding it to the template that multiple pages use (more information can be found [in Gatsby's documentation](https://www.gatsbyjs.org/blog/2019-05-02-how-to-build-a-blog-with-wordpress-and-gatsby-part-3/#creating-a-page-template)), or by adding it to a shared component that all pages import and use.
