---
title: "How to remove duplicates in an array in JavaScript"
date: 2020-05-08
unlisted: true
---

Let's say you have this array:

```javascript
const myArray = ["red", "blue", "green", "blue", "blue", "orange", "green"];
```

But you only want each item to appear once.

Here's how you turn that array into an array where each item only appears once.

```javascript
const uniqueArray = [...new Set(myArray)];
```
