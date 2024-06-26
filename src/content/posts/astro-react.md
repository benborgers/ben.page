---
title: How to use React components in Astro
date: 2022-08-21
unlisted: true
---

In [Astro](https://astro.build) you can have some components that are in React while the rest of your site is in Astro’s own templating language (or Vue, Svelte, etc).

To get React working on an Astro site, run this command in the terminal:

```sh
npm run astro add react
```

This will install and set up the appropriate package (`@astrojs/react`) in your `astro.config.mjs` file, like this:

```js
import react from "@astrojs/react";

export default {
  // ...
  integrations: [
    // ...
    react(),
  ],
};
```

Now you can create your component, with a filename such as `src/components/Counter.jsx`. In there, write a standard React component:

```jsx
import React from "react";

export default function Counter() {
  return <div>Hello, world!</div>;
}
```

Now, you can import and use the React component in any `.astro` page:

```astro
---
import Counter from '../components/Counter.jsx'
---

<Counter client:load />
```

Where the `client:load` option is specified in the code above, there are a few options:

- `<Counter client:load />` renders the component on page load.
- `<Counter client:idle />` renders the component as soon as the browser has some free time.
- `<Counter client:visible />` renders the component only once it is scrolled into view.
- `<Counter client:media="{media query here}" />` renders the component only if the media query applies.
- `<Counter client:only="react" />` _only_ renders this component on the client, and doesn’t server-render it into static HTML.
- `<Counter />` (with no option specified) renders an HTML-only version of the component, so any click handlers or state won't work.
