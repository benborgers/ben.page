---
title: "How to detect when an object changes in JavaScript"
date: 2020-04-02
unlisted: true
---

You can use a JavaScript feature called a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to define how properties of an object are read and set.

The `Proxy` takes a target (the object that the `Proxy` is wrapping), and a handler (which defines how the `Proxy` should act).

Here's an example:

```javascript
const sourceObject = {};

const handler = {
  get: (target, key) => {
    if (typeof target[key] === "object" && target[key] !== null) {
      return new Proxy(target[key], handler);
    }

    return target[key];
  },
  set: (target, prop, value) => {
    target[prop] = value;
    console.log("A change was made!");
    return true;
  },
};

const object = new Proxy(sourceObject, handler);
```

In the `get` method of the `Proxy`'s handler, we check whether what we're returning is of type `object` (an array, object, etc). If it is, we wrap it in a new `Proxy` using the same handler as itself.

This is to ensure that all changes go through this `Proxy`, and the `console.log` statement runs for every change.

If we didn't wrap objects returned from the `get` method in another `Proxy`, this kind of "deeper" change would not result in a `console.log`:

```javascript
// continuing example from above

object.list = []; // "A change was made!"
object.list.push("foo"); // no console.log statement
```
