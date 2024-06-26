---
title: How to escape quotes in HTML attributes
date: 2021-07-25
unlisted: true
---

If you use a quote mark (`"`) in an HTML attribute, it'll interfere with the quotes surrounding the attribute. For example, this isn't valid:

```html
<div data-statement="This is a "cool" blog post" />
```

To get around this, replace the quotes with `&quot;`.

You can do this in JavaScript like this:

```js
const string = `This is a "cool" blog post`;

return string.replace(/"/g, "&quot;");
```

Which results in this valid attribute:

```html
<div data-statement='This is a "cool" blog post' />
```

`&quot;` will be correctly parsed by JavaScript if you access it, for example like this:

```js
document.querySelector("div").dataset.statement;
```
