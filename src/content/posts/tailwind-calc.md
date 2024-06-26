---
title: "How to use calc() with Tailwind CSS"
date: 2022-02-17
unlisted: true
---

Now with Tailwind CSS v3.0 and above, you can use arbitrary CSS statements in your classes, and they’ll get generated using the [JIT (Just-In-Time) engine](https://tailwindcss.com/blog/just-in-time-the-next-generation-of-tailwind-css).

That means you can use a CSS `calc()` statement within a class, just by wrapping it inside square brackets.

The only caveat is that CSS classes can’t contain spaces. That means that you’ll just have to leave out the spaces you might normally write in a `calc` statement, for example the spaces in “`calc(100 - 36px)`”. Alternatively, you can replace the spaces with underscores (`_`), which Tailwind CSS will interpret as spaces.

Here’s an example of the two ways to use the `calc()` CSS function with Tailwind:

```html
<div class="bg-red-500 w-24 h-[calc(100vh-36px)]"></div>
<div class="bg-red-500 w-24 h-[calc(100vh_-_36px)]"></div>
```
