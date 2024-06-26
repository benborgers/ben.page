---
title: How to embed Reform in a React app
date: 2021-10-13
unlisted: true
---

[Reform](https://reform.app) allows you to [embed a form on your website](https://docs.reform.app/article/5-embedding-reform-on-your-own-website), but the provided method of loading the script using a `<script>` tag won’t always work when navigating from another page of a React app using client-side navigation.

Instead, this is how I load the embedded form on a page of a React app:

```jsx
import React, { useEffect } from "react";

export default function PageWithForm() {
  useEffect(() => {
    const el = document.createElement("script");
    el.src = "https://embed.reform.app/v1/embed.js";
    document.head.appendChild(el);

    el.onload = () => {
      window.Reform("init", {
        url: "https://forms.reform.app/...",
        target: "#my-reform",
      });
    };
  }, []);

  return <div id="my-reform"></div>;
}
```

The `useEffect()` function runs as soon as the page loads, and creates a script element in the `<head>` to load the Reform script.

Once this script is done loading (which we detect using the script tag’s `onload` event), we load the form into the div with ID `my-reform`.
