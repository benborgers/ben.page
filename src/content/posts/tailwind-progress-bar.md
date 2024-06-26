---
title: "How to build a progress bar with Tailwind CSS"
date: 2022-02-18
unlisted: true
---

We’re gonna build this progress bar using [Tailwind CSS](https://tailwindcss.com):

![](/posts/tailwind-progress-bar/image-14.png)

Here’s the code I used to create this bar, and I’ll explain it below.

```html
<div
  class="h-24 bg-cyan-50 rounded-xl border-4 border-cyan-800 overflow-hidden"
>
  <div class="bg-cyan-500 h-full" style="width: 87%" id="progress-bar"></div>
</div>
```

- The outer `div` has a defined height and will take up the full width of the page by default.
- I gave the outer `div` rounded corners and a border. Its background color is the light color you see on the rightmost end of the bar (the unfilled part).
- The inside `div` has a darker background color, in this case `bg-cyan-500`. The inside `div` is the filled part of the progress bar.
- The inside `div` has `h-full`, which makes its height the same as the outer `div`.
- I use a `style` attribute to set the width of the bar to a certain percentage. In practice, you could use JavaScript to change the width of the bar:

```javascript
document.getElementById("bar").style.width = `${(11 / 12) * 100}%`;
// Multiplies the decimal by 100 to get a percentage.
```

Changing the progress bar’s progress using JavaScript.

You can try out this code example on [Tailwind Play](https://play.tailwindcss.com/6QJkPsx0yK).
