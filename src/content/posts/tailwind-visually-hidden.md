---
title: How to make something visually hidden with Tailwind CSS
published: true
unlisted: true
date: 2022-05-14
---

There are times when you want to make a part of a website _visually_ hidden, but not hidden to a screen reader that someone with a vision impairment would use to browse the web.

For example, you have a button with an icon, but you also want to add a bit of text to describe that icon to someone who can’t see the icon. That way, they’ll still know what the button does.

For these situations, you can use Tailwind’s `.sr-only` class. It makes things visually hidden, but keeps them around so assistive technologies can still see them.

For example, here’s how you could label a button containing an icon:

```html
<button>
  <svg><!-- icon here --></svg>
  <span class="sr-only">Add New Task</span>
</button>
```
