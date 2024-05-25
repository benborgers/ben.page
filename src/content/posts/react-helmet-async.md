---
title: 'How to fix "componentWillMount has been renamed"'
date: 2019-12-12
unlisted: true
---

I was using the [react-helmet](https://npm.im/react-helmet) package, and noticed an error in my console saying:

> Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-async-component-lifecycle-hooks for details.

Turns out, in React 17 (the next version of React), the `componentWillMount` method will no longer work. `react-helmet` relies on this method, and therefore there's a warning when you try to use `componentWillMount` in React 16.9+.

## Solution

There's a virtually identical package called [react-helmet-async](https://npm.im/react-helmet-async), which doesn't have this error and will continue working through React 17.

Installing and replacing `react-helmet` with `react-helmet-async` everywhere in my code got rid of the warning for me.

To install, run:

```bash
npm install react-helmet-async
```

And then use the new package just as you would use `react-helmet`:

```javascript
import { Helmet } from "react-helmet-async";

// ... etc
```

## Solving it in Gatsby

If your site is built with [Gatsby](https://gatsbyjs.org/), you're probably currently using [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/). You'll need to replace this plugin with [@rhysforyou/gatsby-plugin-react-helmet-async](https://www.gatsbyjs.org/packages/@rhysforyou/gatsby-plugin-react-helmet-async).
