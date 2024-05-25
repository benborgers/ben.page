---
title: How to do rounded corners with Tailwind CSS
unlisted: true
date: 2022-06-09
---

With [Tailwind CSS](https://tailwindcss.com), you can easily create rounded corners on an element:

![](/posts/tailwind-rounded-corners/172966850-c912ec9c-f17c-4a4d-9768-ddb73d65cc49.png)

Tailwind includes these CSS classes that you can use to control how intensely rounded the corners are (these get more rounded as the list goes on):

- `rounded-sm`
- `rounded`
- `rounded-md`
- `rounded-lg`
- `rounded-xl`
- `rounded-2xl`
- `rounded-3xl`
- `rounded-full`

In addition, Tailwind includes classes for rounding just one or two corners. These follow a similar sizing scale (`md`, `lg`, etc), but include extra letters for “top”, “bottom”, “left”, or “right”. Here are some examples:

- `rounded-t` makes the **top two** corners rounded
- `rounded-bl-lg` makes the **bottom left** corner quite rounded
- `rounded-tr` makes the **top right** corner rounded

You can also combine these classes. For example, this CSS:

```html
<div class="bg-blue-500 h-24 w-24 rounded-tr-3xl rounded-br-lg"></div>
```

produces this:

![](/posts/tailwind-rounded-corners/172967271-b6b7332f-9132-44a9-b03b-dc354da81c33.png)

I’ve created a [Tailwind Play sandbox](https://play.tailwindcss.com/NOq2goqpSV) that you can use to experiment with these classes.
