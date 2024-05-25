---
title: "How to make textarea auto-resize with Alpine.js"
date: 2020-12-30
unlisted: true
---

You know those fancy textareas that make themselves shorter or taller depending on how much you type? That's actually really easy to do with [Alpine](https://github.com/alpinejs/alpine).

Resizing a textarea to be the height of its text turns out to be quite straightforward: first, set the textarea's height to almost nothing, then set the textarea's height to the height of the content that's not visible.

```javascript
$el.style.height = "5px";
$el.style.height = $el.scrollHeight + "px"; // e.g. 152 + 'px' = '152px'
```

_With Alpine, `$el` is a magic variable for the element with the `x-data`._

We start by setting this as a function on our Alpine component, so we can reuse this function:

```html
<textarea
  x-data="{ resize: () => { $el.style.height = '5px'; $el.style.height = $el.scrollHeight + 'px' } }"
></textarea>
```

Now, we simply tell Alpine to run this resizing function when the textarea first loads, and whenever someone types in the text box:

```html
<textarea
  x-data="{ resize: () => { $el.style.height = '5px'; $el.style.height = $el.scrollHeight + 'px' } }"
  x-init="resize()"
  @input="resize()"
></textarea>
```

And that's it! The textarea will now resize to be the height of the text you type in it. [Here's a CodeSandbox](https://codesandbox.io/s/alpine-textarea-auto-resize-ivo9l?file=/index.html) demonstrating the solution.
