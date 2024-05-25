---
title: "How to set and delete cookies with Express"
date: 2020-03-18
unlisted: true
---

## Setting cookies

```jsx
res.cookie("token", MY_TOKEN, { maxAge: MILLISECONDS_FROM_NOW_TO_EXPIRE });
```

There's more options (other than `maxAge`) described in the [Express documentation](https://expressjs.com/en/api.html#res.cookie).

## Deleting cookies

```jsx
res.clearCookie("token");
```
