---
title: How to add "tab to indent" to a textarea
date: 2021-01-03
unlisted: true
---

I was building a textarea meant for writing markdown, and I wanted users to be able to hit the `tab` key and insert an indent (when nesting bullet points, for example).

This turned out to be quite straightforward, using just a bit of javascript.

I first added the text box to my HTML:

```html
<textarea></textarea>
```

And then added the behavior using javascript:

```javascript
const textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();

    textarea.setRangeText(
      "  ",
      textarea.selectionStart,
      textarea.selectionStart,
      "end"
    );
  }
});
```

This javascript adds a listener for whenever a key is pressed inside the textarea. If the `keyCode` is `9` (which is the key code for the `tab` key), we `preventDefault()` — this means preventing the browser's default behavior, which is usually leaving the textarea to go to the next element.

Now, we use `setRangeText()`, which allows us to manipulate text in the textarea. We put two spaces, simulating a tab, at the point where the cursor currently is. `setRangeText()` usually overwrites text, but by telling it to start and end at the same spot (second and third arguments), it inserts text instead. Lastly, `end` moves the cursor to the end of the inserted text, which is the behavior we want.

That's it! [Here's a CodeSandbox](https://codesandbox.io/s/textarea-tab-ivvhq?file=/index.html) demonstrating the solution.
