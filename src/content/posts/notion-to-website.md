---
title: "How to turn a Notion doc into a website"
date: 2020-04-18
unlisted: true
---

**Heads up!** This post was written before Notion came out with an official API, and uses a reverse-engineering method that isn’t officially supported. Notion now has an official developer API, so you should [use that instead](https://developers.notion.com). I no longer maintain [Potion](https://github.com/benborgers/potion), which is used in this article.

---

I wrote my own reverse-engineered API for Notion, called Potion. The code is open source on [GitHub](https://github.com/benborgers/potion).

Today, we're going to use that API to turn a Notion document into a website.

There's two ways of doing it: using a **static website** (no server), or using a **Node.js server**. We'll also discuss the pros and cons of each.

## Getting the ID of your Notion doc

For both of these methods, you'll need the ID of your Notion doc.

First, make the Notion doc public using the **Share** button in the top right corner:

![](https://user-images.githubusercontent.com/30215449/105642488-03463d80-5e58-11eb-96c8-88e3e24ba1a5.png)

Then, click the **Copy page link** button and paste it somewhere. The long random string of characters in that link is the document ID:

![](https://user-images.githubusercontent.com/30215449/105642493-0b9e7880-5e58-11eb-85fe-2191ddb4ef18.png)

We'll use this ID in our code later.

## Method 1: Static website

The benefits of this approach are that you can host the website very cheaply (for example, on [Netlify](https://netlify.com)) since it's just static files. However, the webpage is empty before the javascript executes, and crawlers (like Google) need to run the javascript in order to "see" the contents.

Let's set up the skeleton of the web page:

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Notion Doc</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/style.css" />
    <script src="/script.js" defer></script>
  </head>
  <body>
    <main></main>
  </body>
</html>
```

This empty HTML page links a javascript file (at `/script.js`) and a CSS file (`/style.css`).

I also added an empty `<main>` element in the body, which is where we'll load the Notion doc into.

Then, I wrote some javascript in `script.js` that makes a request to the Potion API and fills in the `<main>` element with the result. It uses the Notion document ID you copied earlier.

```jsx
const notionDocId = "0cb628857f3c4c77bf7f9a879a6ec21d";

fetch("https://potion-api.now.sh/html?id=" + notionDocId)
  .then((res) => res.text())
  .then((text) => {
    document.querySelector("main").innerHTML = text;
  });
```

That's it! Now you have a website powered by your Notion doc. Here's the full code if you'd like to check it out: [Live demo](https://notion-to-website-static.glitch.me) and [source code](https://glitch.com/edit/#!/notion-to-website-static).

## Method 2: Node.js server

The benefits of this approach are that the HTML sent by the server fully includes the Notion document's content, so it's easy for web crawlers (like Google) to read and understand. It doesn't require any client-side javascript to run. However, you need to run a full Node.js server to host it, so this solution can't be hosted on a static file host.

I started by installing `express`, a framework for Node.js servers, and `node-fetch`, a package that replicates the `fetch` API in Node.js.

```jsx
const express = require("express");
const app = express();

const fetch = require("node-fetch");

app.listen(process.env.PORT);
```

Then, I added this Express route. It uses the Notion doc ID you copied earlier, makes a request to the Potion API, and then inserts the result of the API request in an HTML document on the server.

```jsx
app.get("/", (req, res) => {
  const notionDocId = "0cb628857f3c4c77bf7f9a879a6ec21d";

  fetch("https://potion-api.now.sh/html?id=" + notionDocId)
    .then((res) => res.text())
    .then((text) => {
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Notion Doc</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body {
                font-family: system-ui, sans-serif;
              }

              img {
                max-width: 100%;
                max-height: 70vh;
              }

              /* add your own CSS to make it look how you want */
            </style>
          </head>
          <body>
            <main>${text}</main>
          </body>
        </html>
      `);
    });
});
```

This website looks the exact same, but is generated on the server-side instead of in the browser. Here's the full code for the Node.js solution: [Live demo](https://notion-to-website-node.glitch.me) and [source code](https://glitch.com/edit/#!/notion-to-website-node).
