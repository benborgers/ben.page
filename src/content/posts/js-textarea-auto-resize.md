---
title: "How to make auto-resizing textarea with JavaScript"
date: 2020-12-30
published: true
unlisted: true
---

Here's how to make one of those fancy textareas that gets shorter and taller depending on how much text is in it, using pure javascript.

First, all you need is a plain HTML text box:

```html
<textarea></textarea>
```

Next, in the javascript, we're going to write a function that makes the textarea the correct height based on how much text is in it. It first makes the text box very short, and then makes it as tall as the content that is _not visible_.

```javascript
const textarea = document.querySelector("textarea");

const resize = () => {
  textarea.style.height = "5px";
  textarea.style.height = textarea.scrollHeight + "px"; // e.g. 152 + 'px' = '152px'
};
```

Now, all we have to do is run this function once the page loads, and run it again every time someone types into the text box:

```javascript
resize(); // run once immediately

textarea.addEventListener("input", resize);
```

And that's it! The text box will now change height to accommodate how much text you type into it. [Here's a CodeSandbox](https://codesandbox.io/s/js-textarea-auto-resize-yz0k8?file=/index.html) demonstrating the solution.
