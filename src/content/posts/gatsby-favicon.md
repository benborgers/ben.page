---
title: "How to add a favicon with Gatsby"
date: 2020-05-06
unlisted: true
---

To add a favicon to your Gatsby site, you need to be able to add code to the `<head>` of your page.

For that, you can use [`react-helmet`](https://github.com/nfl/react-helmet) (developed by the National Football League, by the way).

To use `react-helmet` in Gatsby, install the package and a Gatsby plugin to make it work:

```bash
npm install react-helmet gatsby-plugin-react-helmet
```

Then, add `gatsby-plugin-react-helmet` to your `gatsby-config.js` file:

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    // other plugins, if you have them
  ],
};
```

Now, on your Gatsby page (for example `src/pages/index.js`), use `react-helmet` to add the meta tag for a shortcut icon.

```jsx
import React from "react";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="icon" href="/link/to/favicon.png" />
      </Helmet>

      <div>Hello, world!</div>
    </React.Fragment>
  );
};
```
