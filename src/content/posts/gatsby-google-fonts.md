---
title: "How to use Google Fonts with Gatsby"
date: 2020-03-29
published: true
unlisted: true
---

First, install `react-helmet-async` and `@rhysforyou/gatsby-plugin-react-helmet-async`. These allow you to add things to the `<head>` of your pages.

```bash
npm install react-helmet-async @rhysforyou/gatsby-plugin-react-helmet-async
```

Then, add the `@rhysforyou/gatsby-plugin-react-helmet-async` plugin to your [`gatsby-config.js`](https://www.gatsbyjs.org/docs/gatsby-config/) file:

```jsx
// gatsby-config.js

module.exports = {
  plugins: ["@rhysforyou/gatsby-plugin-react-helmet-async"],
};
```

You may need to restart the Gatsby development server (run `gatsby develop` again) in order to see the changes to your `gatsby-config.js` file.

Now, select a couple [Google Fonts](https://fonts.google.com), click **Embed**, and copy the **<link>** option.

![](https://user-images.githubusercontent.com/30215449/105642337-2de3c680-5e57-11eb-8dd4-67e1f0e52a57.png)

Lastly, you're ready to add this font embed code to your Gatsby page's `<head>` using `react-helmet-async`:

```jsx
// src/pages/index.js

import React from "react";
import { Helmet } from "react-helmet-async"; // make sure to import Helmet

export default () => {
  return (
    <>
      <Helmet>
        {/* copy and paste the embed from Google Fonts: */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div>the rest of the page...</div>
    </>
  );
};
```

Notice the added `/` at the end of the `<link ... />` above. You'll need to make this change to the code you copy and paste from Google Fonts.

This is because React requires tags that don't have a closing tag (such as `link`) to be self-closing, with an added `/` (for example `<img />`, not `<img>`).
