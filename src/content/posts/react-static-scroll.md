---
title: How to reset scroll on route change with React Static
date: 2021-04-08
published: true
unlisted: true
---

React Static seems to have an issue where, if you click on a link a bit down on a page, it keeps you scrolled down on the next page. That's not standard behavior, but luckily it's fairly easy to fix.

First, I exported an extra function called `useLocation` from my Router component, so we can use it in a moment. By default, this component lives at `src/components/Router`.

```jsx
// src/components/Router

export { Link, Router, useLocation } from "@reach/router";
```

I created a new component in `src/App.js` called `<ScrollToTop />` that scrolls to the top of the page whenever the page changes.

```jsx
// src/App.js
import React, { useLayoutEffect } from "react";
import { Root, Routes } from "react-static";

import { Router, useLocation } from "components/Router";

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        {/* Here it is! */}
        <ScrollToTop />

        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
```

I just declared the component at the bottom of the file, and then included it in the root `App` component.

This uses the `useLocation` function that we exported from the router, and uses React's `useLayoutEffect` (which is like `useEffect` but runs after all DOM mutations for a less jarring scroll reset) to scroll to the top of the page every time the URL path changes.
