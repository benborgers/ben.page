---
title: "How to change “page expired” behavior in Livewire"
date: 2022-03-07
unlisted: true
---

By default, when a user’s session expires with a [Livewire](https://laravel-livewire.com) component open on the page, Livewire shows this message:

> This page has expired. Would you like to refresh the page?

Livewire probably opts to ask first instead of just refreshing the page since the user could have unsaved content on the page that they don’t want to lose.

However, in some apps there isn’t much ability to have unsaved content on the page, and I’d just like to refresh the page without annoying the user by asking them.

To override this behavior when the page expires, Laravel provides a hook called `onPageExpired`. Put this JavaScript after Livewire has loaded (by either placing it below Livewire’s scripts in your HTML, or in a JavaScript file that’s loaded with the `defer` attribute):

```javascript
Livewire.onPageExpired((response, message) => {
  location.reload();
});
```

In this example, I just reload the page without asking the user first. Hopefully, they won’t notice that the page expired at all.

Alternatively, you could use JavaScript to do your own message through `[confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)`, or show a custom-designed dialog window that tells the user that their session has expired.
