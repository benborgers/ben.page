---
title: "How to read and change URL hash with JavaScript"
date: 2020-04-02
unlisted: true
---

You can read the current URL hash (the part of the URL after `#`) like this:

```javascript
const hash = location.hash;
console.log(hash);
```

And change it like this:

```javascript
location.hash = "foo";
```

You can detect whenever the hash changes like this:

```javascript
window.addEventListener("hashchange", (event) => {
  console.log("hash changed", event);
});
```
