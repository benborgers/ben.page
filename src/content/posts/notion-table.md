---
title: "Reading a Notion table with an API"
date: 2020-04-19
unlisted: true
---

**Heads up!** This post was written before Notion came out with an official API, and uses a reverse-engineering method that isn’t officially supported. Notion now has an official developer API, so you should [use that instead](https://developers.notion.com). I no longer maintain [Potion](https://github.com/benborgers/potion), which is used in this article.

---

I wrote my own reverse-engineered API for Notion, called Potion. The code is open source on [GitHub](https://github.com/benborgers/potion).

Today, we're going to use that API to read a table in Notion.

## Getting the table ID

To use the API, we need the ID of the table in Notion that we want to read.

First, make the table public using the **Share** button in the top right corner:

![](https://user-images.githubusercontent.com/30215449/105642546-659f3e00-5e58-11eb-9b4a-bc1e78ee1f49.png)

Then, click the **Copy page link** button and paste the link somewhere. The long string of characters in the link (but not after the `?`) is the Notion document ID:

![image](https://user-images.githubusercontent.com/30215449/105642549-6d5ee280-5e58-11eb-92af-a2063be272c6.png)

_The ID in this example is `2364751436224832ba85e279417ea798`._

You'll need to give this ID to the API in order to tell it which table to read from.

## Using the Potion API

Now, we'll use [Potion](https://potion-api.now.sh) to read the table.

The endpoint we want to send a GET request to is:

```
https://potion-api.now.sh/table?id=NOTION_DOCUMENT_ID
```

You can click [here](https://potion-api.now.sh/table?id=2364751436224832ba85e279417ea798) and see what the response would look like with the example ID we copied earlier, which is the ID for [this table](https://notion.so/2364751436224832ba85e279417ea798).

Here's an example for javascript using `fetch`, which is built in to the browser:

```jsx
fetch("https://potion-api.now.sh/table?id=2364751436224832ba85e279417ea798")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });
```

From here, you can use the data however you'd like. Feel free to use it to populate a website, read data for running a daily script, etc. This opens up a ton of new possibilities!
