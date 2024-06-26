---
title: "How to detect if your PWA is installed"
date: 2020-11-14
unlisted: true
---

You might want to show a different UI in your progressive web app depending on whether the app's "downloaded" (added to the user's home screen) vs. when it's not.

You have to detect this in two different ways: one for iOS, and one for Android. Here's how to do it in javascript:

```javascript
function isInstalled() {
  // For iOS
  if (window.navigator.standalone) return true;

  // For Android
  if (window.matchMedia("(display-mode: standalone)").matches) return true;

  // If neither is true, it's not installed
  return false;
}
```

You can now call this function `isInstalled()` in your app's javascript to see whether the user has added the app to their home screen yet.
