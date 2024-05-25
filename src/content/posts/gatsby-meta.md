---
title: "What meta tags you need for a Gatsby site"
date: 2020-01-01
unlisted: true
---

In almost every Gatsby site I make, I create a `<Head />` component with all the meta tags I'll need. I reuse that component on every page, passing in different titles and descriptions.

There's definitely more meta tags you could use, but I've whittled it down to this component:

```jsx
import React from "react";
import { Helmet } from "react-helmet";

export default ({ title, description, shareImage }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My Site" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={shareImage} />

      <meta property="twitter:card" content="summary_large_image" />

      <link rel="icon" href="/link/to/favicon.png" />
    </Helmet>
  );
};
```

## A couple notes

- There's some repeats (`title` and `og:title`, `description` and `og:description`), but since this is a reusable component it isn't really more work to include both.
- The `og:image` is quite important to me, because a nice share image makes the link stand out when it's shared on Twitter or elsewhere.
- The `twitter:card` tag tells Twitter to make the share image as large as possible in a tweet.
- You can also add equivalent `twitter:title` etc tags, but Twitter falls back on `og:` tags, so there's no need to include both.
