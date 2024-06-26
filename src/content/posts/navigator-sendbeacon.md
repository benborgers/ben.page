---
title: "How and why to use navigator.sendBeacon"
date: 2019-12-26
unlisted: true
---

The `navigator.sendBeacon()` method makes POST requests without waiting for a response.

It's often used for analytics and diagnostics, since it can be called right when a user closes a page and the request will still fire off.

When you call the method like this:

```jsx
navigator.sendBeacon("/api-url", JSON.stringify(payload));
```

The data is queued and sent when the browser has an opportunity to do so, without getting in the way of other actions. Therefore, it can be more efficient and reliable than the `fetch` API, which may block execution of other code and be a heavier load on the CPU.

For example, you might use `navigator.sendBeacon()` to log analytics [right as the page is closed](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event). Or, you might use it to efficiently log errors to a server when you detect them in your app, since you don't really care about the response to that request.

There's more detailed documentation about this interesting API on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon).
