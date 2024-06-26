---
title: "How to fix CORS errors on Glitch"
date: 2020-03-23
unlisted: true
---

CORS is a security measure that stops a web page on one domain from fetching resources from another domain.

However, sometimes you do want to do this: for example, your website (on one domain) is pulling data from the backend on [Glitch](https://glitch.com), which has another domain (like `your-project.glitch.me`).

Fixing this issue falls into two categories: you control the server you're fetching from (for example, you're fetching a resource from your own Glitch project), or you don't control the server you're fetching from (it's someone else's website). Here's how to fix both:

## Scenario 1: You control the server

If you're trying to fetch a resource from your own server (like your own Glitch project), but you're getting blocked by CORS errors, you need to tell your server to allow fetching from other domains.

You can do this really easily if you're using the popular [Express](https://expressjs.com) Node.js framework, which is the most popularly used on Glitch.

First, install the npm package `cors` either by adding it on Glitch in your `package.json` file, or by running this command in the console:

```bash
npm install cors
```

Then, import it and use it in your Express app:

```jsx
const express = require("express");
const app = express();

const cors = require("cors"); // importing the `cors` package
app.use(cors()); // tells Express to use `cors`, and solves the issue

app.listen(3000); // tells Express which port to listen on
```

This should open your server up to requests from other domains, fixing the CORS issue.

## Scenario 2: You don't control the server

If you're fetching resources from some other server that you don't control, you can't install and run code on that server like in Scenario 1.

Instead, you can use a _proxy server_, which is a server that sits in between your website and the resource you're trying to access.

My recommendation is the free service [cors-anywhere](https://cors-anywhere.herokuapp.com/), which will fetch the resource for you and then return it with the proper CORS configuration to allow you to access it.

Essentially, it's a middleman that grabs what you want, and then turns around and gives it to you.

Follow the instructions on the [cors-anywhere](https://cors-anywhere.herokuapp.com/) site to learn how to use it to make requests to any website without running into CORS errors.
