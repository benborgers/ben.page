---
title: "How to make indented bullet points discs in CSS"
date: 2020-11-23
unlisted: true
---

By default, indented bullet points become dots and squares instead of solid bullets.

I wanted all the bullet points to stay as solid discs, because I think that it looks better:

![image](https://user-images.githubusercontent.com/30215449/105643407-b1a0b180-5e5d-11eb-84d7-f47b9c16a299.png)

First, here's the HTML for indented bullet points:

```html
<ul>
  <li>one</li>

  <ul>
    <li>one a</li>
  </ul>

  <li>two</li>
</ul>
```

Then, you can use this CSS to style every bullet point as a solid circle (a "disc"):

```css
li {
  list-style-type: disc;
}
```

Done! Now, ever bullet point will be the same solid disc, even if it's indented.
