---
title: "How to copy text with JavaScript"
date: 2020-04-18
unlisted: true
---

You can only copy text for the user if it's in an `input` or `textarea`.

```html
<input class="copy-to-clipboard" />
```

If you don't want to have a visible `input` element on the page, you can add this CSS to the input so that it still exists (in the top left corner) but isn't visible or clickable:

```css
input.copy-to-clipboard {
  opacity: 0;
  pointer-events: none; /* to ignore clicks */
  position: absolute;
  top: 0;
  left: 0;
}
```

Now that you've got the `input` element, you can use JavaScript to fill the value of the input and copy that text to the clipboard:

```jsx
const copyText = (text) => {
  const input = document.querySelector("input.copy-to-clipboard");
  input.value = text;
  input.select();
  input.setSelectionRange(0, 9999); // selects characters 0 through 9,999 in the input
  document.execCommand("copy");
  document.activeElement.blur(); // deselects the input
};
```
