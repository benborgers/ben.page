---
title: "Center vertically and horizontally on the page with CSS Grid"
date: 2020-10-01
unlisted: true
---

Here's how you can center this div on a page:

```html
<body>
  <div>center me</div>
</body>
```

```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center center;
}
```

These 3 lines of CSS:

- Make the body as tall as the device's screen, so centering something actually looks centered
- Indicate that you want to use CSS grid
- Place the grid's one "item" (the div) in the center vertically and the center horizontally
