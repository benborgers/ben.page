---
title: "How to get the last time a Gatsby site was built"
date: 2019-12-21
unlisted: true
---

If your Gatsby site pulls in data at build time, it can be helpful to show visitors when the site was last built.

This component relies on a GraphQL query to fetch the build time, and then formats it using a lightweight package called [tiny-relative-date](https://npm.im/tiny-relative-date).

Here is an abbreviated component using it (without styling):

```jsx
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import relativeDate from "tiny-relative-date";

export default () => {
  const query = useStaticQuery(graphql`
    query {
      site {
        buildTime
      }
    }
  `);

  const buildTime = new Date(query.site.buildTime);
  const buildTimeRelative = relativeDate(buildTime);

  return <p>This site was last built {buildTimeRelative}.</p>;
};
```
