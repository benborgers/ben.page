---
title: "How to make gradient text with Tailwind CSS"
date: 2021-01-22
unlisted: true
---

Tailwind now includes all the necessary utilities for easily making gradient text!

You'll just need to combine these classes:

- `bg-gradient-to-{direction}` sets the background to a gradient, you can use different classes from [the Tailwind docs](https://tailwindcss.com/docs/background-image) to make the gradient go in different directions
- `from-{color}` sets the color that the gradient is starting at, this accepts any usual Tailwind color (e.g. `from-pink-400`)
- `to-{color}` sets the color that the gradient ends at, same as above
- `text-transparent` makes the text transparent so you can see the gradient behind it
- `bg-clip-text` makes the background only appear within the text

Putting it all together, here's an example of a big gradient text headline:

```html
<h1
  class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600"
>
  Hello, world!
</h1>
```

You can see and edit this example live on [Tailwind Play](https://play.tailwindcss.com/T8EUKtz8B0).
