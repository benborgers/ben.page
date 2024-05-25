---
title: "How to update your Instagram bio with Node.js"
date: 2020-05-03
unlisted: true
---

Instagram's API is for businesses only, but the unofficial npm package [`instagram-private-api`](https://npm.im/instagram-private-api) will allow you to access Instagram's API.

First, install the package in your Node.js project:

```bash
npm install instagram-private-api
```

Then, you can use this code to update your bio:

```javascript
const { IgApiClient } = require("instagram-private-api");
const ig = new IgApiClient();

const USERNAME = "bborgers";
const PASSWORD = "hackme";

ig.state.generateDevice(USERNAME);

const main = async () => {
  await ig.simulate.preLoginFlow();
  await ig.account.login(USERNAME, PASSWORD);

  // log out of Instagram when done
  process.nextTick(async () => await ig.simulate.postLoginFlow());

  // fill in whatever you want your new Instagram bio to be
  await ig.account.setBiography(
    `It is currently ${new Date().toLocaleString()}`
  );
};

main();
// code is written in main() so that I can use async/await
```

That's how easy it is to update your Instagram bio using Node.js and some programming!

Check out [`instagram-private-api`'s GitHub repo](https://github.com/dilame/instagram-private-api) — there's a ton of cool stuff to play with.
