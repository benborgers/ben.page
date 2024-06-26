---
title: How to refetch Remix data when the tab is focused
date: 2022-01-04
unlisted: true
---

If you’re expecting a user to keep a tab of your website open for a while, you might want to fetch fresh data for the page every time the user goes back to the tab.

We could just refresh the page, but when using [Remix](https://remix.run) there’s a slicker way to swap out the data in the background without a full page reload.

Here’s the code, and I’ll explain it after:

```javascript
// app/routes/some-page.jsx

import { useEffect } from "react";
import { useLoaderData, useFetcher } from "remix";

export function loader() {
  // Loading some data for the page.
}

export default function () {
  const loaderData = useLoaderData();
  const fetcher = useFetcher();

  const data = fetcher.data || loaderData;

  const revalidate = () => {
    if (document.visibilityState === "visible") {
      fetcher.load("/some-page");
    }
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", revalidate);

    return () => document.removeEventListener("visibilitychange", revalidate);
  }, []);

  return (
    // React component using `data`.
  )
}
```

We define a loader, which will load the data that we need for the page, and a React component for what the user will see.

First, we get the loader data and create a fetcher. The loader data will be used on the initial load of the page (before the user leaves and comes back), and the fetcher will be used to refetch data when the user leaves and comes back to the tab.

Then we define a `data` variable containing the freshest data available: the fetcher’s data if it exists, otherwise the loader data that came with the page’s initial load.

Then we define what should happen when this page becomes the currently visible tab or stops being the currently visible tab: we check whether the page is in the foreground (there’s no reason to refetch data if the user just left the tab), and if it is we load the data from this route.

Then, we use `useEffect` to run this `revalidate` function every time the page’s visibility changes (either the user moves away from this tab or comes back to it) using the [`visibilitychange` event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event). We return a function from `useEffect` that will run when the user leaves the page, and cleans up by removing the event listener so it doesn’t continue to execute when we navigate to a different page.

Now, the `data` variable will have fresh data from the loader whenever the user refocuses the tab!
