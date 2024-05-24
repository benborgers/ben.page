---
title: "How to password protect your Glitch site"
date: 2020-09-30
published: true
unlisted: true
---

You can password protect a Glitch site if you're writing Node.js (which means you've got a `package.json` file).

We're going to be using `express`, the default Node.js server framework that new Glitch projects use. We're also going to be using a technique called **Basic authentication**, which is built into every browser.

This is what it'll look like:

![](https://user-images.githubusercontent.com/30215449/105643146-2f63bd80-5e5c-11eb-809a-c84cfccf02f0.png)

Let's say we want to password-protect this secret admin route:

```javascript
const express = require("express");
const app = express();

app.get("/admin", (req, res) => {
  res.send("Top secret stuff here");
});
```

Here's a code snippet of how to do it, and then I'll explain how it works:

```javascript
app.get("/admin", (req, res) => {
  const reject = () => {
    res.setHeader("www-authenticate", "Basic");
    res.sendStatus(401);
  };

  const authorization = req.headers.authorization;

  if (!authorization) {
    return reject();
  }

  const [username, password] = Buffer.from(
    authorization.replace("Basic ", ""),
    "base64"
  )
    .toString()
    .split(":");

  if (!(username === "ben" && password === "my-favorite-password")) {
    return reject();
  }

  res.send("Top secret stuff here");
});
```

First, we create a function called `reject()`, which is used to prevent a person from viewing the page. This function sets a header that instructs the browser to ask for a username and password, and otherwise sends a `401 Unauthorized` error code.

If the visitor types a username and password into the prompt, it'll be sent via a header called `authorization` in the format below. However, everything after `Basic ` will be encoded in base64 format:

```
Basic myusername:mypassword
```

So first, if there's no `authorization` header, we immediately `reject()` the request as unauthorized. This can happen if the user clicks "cancel" on the login form.

Otherwise, we first take the `authorization` header and remove the portion that says `Basic ` (including the space after). We then decode it from base64 format to text using `Buffer.from()`, then turn it into a string and split the `:` separating the username and password. Since this split creates an array, we can assign the parts of the array to the variables `username` and `password`.

Lastly, we check whether the `username` and `password` are what we expect them to be. If they aren't, we `reject()` the request.

If the request has made it all the way to the end, the user has provided the correct username and password. We can finish the request by sending back any data or file, knowing that they have the correct credentials to view it.
