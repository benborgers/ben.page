---
title: How to poll for fresh data on an interval with Remix
date: 2021-12-30
unlisted: true
---

Let’s say you want to refresh the data on a page of your [Remix](https://remix.run) app on a defined interval, like every 30 seconds.

One solution would be to use the [`navigate` function](https://reactrouter.com/docs/en/v6/api#usenavigate) to “navigate” to the current page, like this: `navigate(".", { replace: true })`. However, this also causes the page’s scroll position to jump to the top, which often isn’t what we want.

Instead, we can use Remix’s [`useFetcher` hook](https://remix.run/docs/en/v1/api/remix#usefetcher).

Here’s the code, and I’ll explain it afterwards:

```javascript
// app/routes/my-page.jsx

import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "remix";

export default function () {
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);

  // Whenever the loader gives us new data
  // (for example, after a form submission),
  // update our `data` state.
  useEffect(() => setData(loaderData), [loaderData]);

  const fetcher = useFetcher();

  // Get fresh data every 30 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        fetcher.load("/my-page");
      }
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, []);

  // When the fetcher comes back with new data,
  // update our `data` state.
  useEffect(() => {
    if (fetcher.data) {
      setData(fetcher.data);
    }
  }, [fetcher.data]);

  return (
    // Construct JSX view here, using `data`.
  );
}
```

- Instead of using the loader data directly from `useLoaderData`, we’re using a piece of state called `data` and keeping `data` up-to-date with the loader data. This way, we can also update `data` when we fetch new data every 30 seconds.
- When the page mounts, we create an interval that runs every 30 seconds. It checks to see whether the tab is in the foreground (no use in reloading data if the user has the tab open but it’s in the background), and then loads the current page’s data using a fetcher.
  - When the user leaves this page, React will execute the function that we return from `useEffect`. Therefore, we’re returning a function that cleans up our interval, so this doesn’t keep polling every 30 seconds even after the user goes to another page.
- When the fetcher finishes loading new data, `fetcher.data` will be updated. In reaction to this, we use another `useEffect` to update our `data` state whenever the fetcher returns new data.
  - This `useEffect` will run once when the page is mounted as well, when the fetcher hasn’t fetched any data for us. Therefore, we need to make sure `fetcher.data` actually has data before using it.

That’s it! Now, the data for this route will be re-fetched every 30 seconds (or however often you’d like), without refreshing the entire page.
