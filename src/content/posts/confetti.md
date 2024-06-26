---
title: "How to create confetti with JavaScript"
date: 2022-02-27
unlisted: true
---

A nice library for creating confetti on a page is [`canvas-confetti`](https://github.com/catdad/canvas-confetti). Here’s how to use it:

First, install the package from npm by running this in the terminal:

```bash
npm install canvas-confetti
```

Alternatively, you can load the package using a `<script>` tag in your HTML, like this:

```html
<script src="https://unpkg.com/canvas-confetti@1.5.1/dist/confetti.browser.js"></script>
```

That’s all! Now, all you need to trigger a burst of confetti in the middle of the screen is:

```javascript
// This is JavaScript, so either in a .js file or within <script></script>.
confetti();
```

That’s all it takes! Let’s look into some customizations we can make:

## Shooting confetti out of an element

Often, we want the confetti to originate from a specific place on the page.

Here’s an example of how we can make the confetti shoot from the center of an element on the page.

```javascript
// Let's say we want to shoot the confetti out of
// the middle of an element with id="my-element".
const element = document.querySelector("#my-element");

// Get the position of the element (in pixels) within on the page.
const { top, bottom, left, right } = element.getBoundingClientRect();

confetti({
  origin: {
    // We calculate the center of the element by
    // averaging the left/right and top/bottom pixel values.

    // The confetti() function expects measurements to be
    // given from 0 to 1, where 0 is the top/left and
    // 1 is the bottom/right of the page. Therefore we divide
    // by the the window's width or height to get a decimal
    // between 0 and 1.

    x: (left + right) / 2 / window.innerWidth,
    y: (top + bottom) / 2 / window.innerHeight,
  },
});
```

## Shoot more confetti

If we want more confetti to spray, we can adjust the `particleCount` option. We can also change how far the confetti spreads out (and therefore how much it overlaps) by adjusting the `spread` option.

```javascript
confetti({
  particleCount: 100, // Defaults to 50 particles
  spread: 60, // Defaults to 45º spread
});
```

## A different direction

By default, the confetti goes upwards. We can change the direction in which it shoots by changing the `angle` option:

```javascript
// Angle defaults to 90º, or upwards.
// 0º means shooting towards the right.
confetti({
  angle: 0,
});
```

## More options

You can see all the other options for customizing `confetti()` in [the documentation for `canvas-confetti`](https://github.com/catdad/canvas-confetti#options).
