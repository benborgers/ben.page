---
title: "How to style the currently active link in Gatsby"
date: 2020-02-06
unlisted: true
---

In Gatsby, you using the `<Link>` component to create links to other pages on your Gatsby site.

It's fairly common to highlight the currently active page in a site navigation bar, to show a visitor where in the navigation they are. Gatsby's `<Link>` component provides a built-in way to style a link that points to the current page.

## Add CSS to the currently active class

```jsx
<Link
  to="/about/"
  activeStyle={{
    color: "blue",
    fontWeight: 700,
  }}
>
  About
</Link>
```

## Add a CSS class to the currently active link

```jsx
<Link to="/about/" activeClassName="active">
  About
</Link>
```
