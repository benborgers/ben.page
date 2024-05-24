---
title: How to fix Tailwind CSS’s h-screen on iOS Safari
date: 2021-12-24
published: true
unlisted: true
---

Safari on iOS behaves strangely around `100vh` heights in CSS: it defines `100vh` to include the part of the page behind the URL bar, meaning that it overflows off the page a little bit when the URL bar is showing.

This can be annoying since you think your page will be exactly as tall as the screen, but instead it overflows a bit.

Since Tailwind CSS’s `.h-screen` class uses the measurement `100vh` under the hood, it’s affected by this problem.

Luckily, there’s a solution using pure CSS. You can add this bit of extra CSS to your app to make `.h-screen` behave as you’d expect:

```css
@supports (-webkit-touch-callout: none) {
  .h-screen {
    height: -webkit-fill-available;
  }
}
```

The `@supports` media query makes sure that this CSS only affects Safari, and then instead of `100vh`, we use the browser-specific unit `-webkit-fill-available`. This is a height defined by the available space, which on iOS Safari only includes the visible area, without the area behind the URL bar.
