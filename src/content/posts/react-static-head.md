---
title: How to add things to the HTML head with React Static
date: 2021-04-07
unlisted: true
---

React Static comes with a built-in `Head` component, which allows you to add content to the HTML `<head>` element. It's powered by [React Helmet](https://github.com/nfl/react-helmet).

```jsx
import { Head } from "react-static";

export default () => {
  return (
    <div>
      <Head>
        <title>Here is the page title</title>
      </Head>

      <div>the page content</div>
    </div>
  );
};
```
