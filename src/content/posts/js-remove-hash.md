---
title: "How to remove hash from URL with JavaScript"
date: 2020-04-02
unlisted: true
---

You usually clear the URL hash like this:

```javascript
location.hash = "";
```

However, that leaves a `#` at the end of the URL. You can remove the `#` by adding a line of code:

```javascript
location.hash = "";
history.replaceState("", "", location.pathname);
```

The second line overwrites the URL with the current URL, minus the `#`.
