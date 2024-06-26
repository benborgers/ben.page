---
title: How to create a frosted glass effect with Tailwind CSS
unlisted: true
date: 2022-06-08
---

Here’s an example of the “frosted glass” effect we’ll be creating using [Tailwind CSS](https://tailwindcss.com):

<video src="/posts/tailwind-frosted-glass/172743847-d3163b2b-0b1e-4c08-9032-f6aefb2a8a1b.mp4" controls playsinline></video>

To achieve this effect, add the following Tailwind classes to a `div`:

```html
<div class="backdrop-blur bg-white/50"></div>
```

The `backdrop-blur` class blurs elements behind the `div`. You can decrease the intensity of the blur by replacing it with a class like `backdrop-blur-sm`, or increase the intensity using a class like `backdrop-blur-md` ([more options are in the Tailwind documentation](https://tailwindcss.com/docs/backdrop-blur)).

The `bg-white/50` class sets the background color to white, but with 50% opacity. That has the effect of “lightening” the blurred content behind the `div`. (Note that the `/50` syntax requires Tailwind v3.0+.) You can play with the opacity value by changing it to anything between `0` and `100`.

I’ve created a [Tailwind Play sandbox](https://play.tailwindcss.com/RWFzqiQQUj) that shows how you could use this effect for a nav bar.
