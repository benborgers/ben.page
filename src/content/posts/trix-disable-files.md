---
title: "Disabling file uploads with the Trix editor"
date: 2020-05-03
published: true
unlisted: true
---

Basecamp's [Trix](https://trix-editor.org) text editor lets people upload their own files into the text they're writing, but maybe you don't want to deal with file uploads at the moment.

To disable file uploads, first remove the "file" button (it looks like a paperclip) using CSS:

```css
trix-toolbar [data-trix-button-group="file-tools"] {
  display: none;
}
```

This removes the button, but it doesn't stop people from dragging files in. For that, add this javascript that ignores file uploads whenever one is attempted:

```jsx
document.addEventListener("trix-file-accept", (event) => {
  event.preventDefault();
});
```
