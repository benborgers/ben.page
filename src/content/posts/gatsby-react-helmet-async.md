---
title: "How to use react-helmet-async with Gatsby"
date: 2020-04-23
published: true
unlisted: true
---

When you replace `react-helmet` with `react-helmet-async`, you can use the Gatsby plugin [@rhysforyou/gatsby-plugin-react-helmet-async](https://www.gatsbyjs.org/packages/@rhysforyou/gatsby-plugin-react-helmet-async/) to make it work with Gatsby.

Just install the plugin:

```bash
npm install @rhysforyou/gatsby-plugin-react-helmet-async
```

And include the plugin in `gatsby-config.js`:

```jsx
module.exports = {
  plugins: ["@rhysforyou/gatsby-plugin-react-helmet-async"],
};
```

Now, you can use `react-helmet-async` in your Gatsby site:

```jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default () => {
  return (
    <Helmet>
      <title>Candlemaker Corner</title>
    </Helmet>
  );
};
```
