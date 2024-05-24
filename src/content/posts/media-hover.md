---
title: "How to disable CSS hover styles on phones"
date: 2020-03-18
published: true
unlisted: true
---

CSS styles for hovering (like `a:hover`) can be janky and annoying on touch screen devices that don't support hovering.

You can easily fix this by wrapping your hover styles with a CSS media query that detects whether the current device has a cursor that can hover.

```css
@media (hover: hover) {
  a:hover {
    /* hover styles */
  }
}
```

Now, the styles inside that `@media` block will only be applied if the device supports hover.

The opposite of this is also possible - applying styles only to devices that do not support hovering.

```css
@media (hover: none) {
  /* styles for touchscreen devices */
}
```
