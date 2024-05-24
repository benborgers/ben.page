---
title: "How to refresh data with SWR"
date: 2020-03-25
published: true
unlisted: true
---

Let's say you have a piece of data you're fetching with Vercel's [SWR package](https://github.com/vercel/swr):

```jsx
const { data } = useSWR("/posts");
```

If you want to refresh this data, you can do this by making use of other values returned by `useSWR`.

```jsx
const { data, mutate, isValidating } = useSWR("/posts");
// isValidating will be explained later
```

You can change the cached `data` for `/posts` by calling `mutate(newData)`.

However, if you just run `mutate()`, it will refresh the data for `/posts` in the background. `mutate` knows to request the `/posts` endpoint again, since that's where the `mutate` function came from.

## Bonus: isValidating

You can use `isValidating` to show to the user whether the data has been updated yet.

This value is `true` while SWR is refetching the data, and `false` once the data has been successfully returned.

You can use `isValidating` to conditionally show a message that says something like _Updating..._ while new data is being fetched.
