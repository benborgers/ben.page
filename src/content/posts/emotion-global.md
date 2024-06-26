---
title: "How to add global CSS to Gatsby with Emotion"
date: 2020-04-02
unlisted: true
---

By default, CSS you add with [Emotion](https://emotion.sh) is scoped to the component where it was added.

To add global CSS, use the `Global` component provided by Emotion:

```jsx
import React from "react";
import { css, Global } from "@emotion/core";

export default () => {
  return (
    <Global
      styles={css`
        * {
          font-family: Helvetica, sans-serif;
        }
      `}
    />
  );
};
```

The CSS written in the `styles` prop of `Global` will be injected globally into your Gatsby site.
