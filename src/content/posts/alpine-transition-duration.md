---
title: "How to change transition duration with Alpine.js"
date: 2022-04-10
unlisted: true
---

[Alpine.js](https://alpinejs.dev/) includes a bunch of really handy transition helpers for quickly creating transitions for elements when they show and hide.

For example:

```html
<!-- This will scale up and fade in. -->
<div x-show="show" x-transition></div>

<!-- This will just fade in. -->
<div x-show="show" x-transition.opacity></div>
```

By default, these animations are 150 milliseconds long when entering and 75 milliseconds long when exiting.

However, you can customize them by using the `duration` modifier:

```html
<div x-show="show" x-transition.duration.400ms></div>
<div x-show="show" x-transition.opacity.duration.400ms></div>
```

Or you can even specify different durations for entering and leaving:

```html
<div
  x-show="show"
  x-transition:enter.opacity.duration.400ms
  x-transition:leave.opacity.duration.150ms
></div>
```
