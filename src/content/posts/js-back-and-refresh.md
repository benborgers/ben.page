---
title: "How to go back one page and refresh with JavaScript"
date: 2020-09-30
unlisted: true
---

Let's say you want to have a link that sends the user back one page, but also refreshes the page so that last page's content isn't stale.

Here's a way you can do it:

```javascript
// On button press, or something else:
document.referrer ? (window.location = document.referrer) : history.back();
```

This looks to see if we have a `referrer`, which is the last page that the user came from before this page. If there is, we navigate to that page.

If there isn't, we fall back to using `history.back()` as an alternative, which sends the user back _without_ refreshing.
