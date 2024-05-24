---
title: "How to deploy to multiple regions with Vercel"
date: 2020-03-18
published: true
unlisted: true
---

When deploying projects with [Vercel](https://vercel.com) (formerly ZEIT), you want to deploy the serverless functions as close to your users as possible.

This results in slower loading times, since the server is physically closer to your users.

In your `vercel.json` file, you can configure the region where the project is deployed:

```json
{
  "regions": ["iad1"]
}
```

The region identifier (`iad1` in the example above) comes from [the list of regions](https://zeit.co/docs/v2/network/regions-and-providers#routing). Any region marked as an **origin** will work.

To see where these locations are, use [this list](https://vercel.com/docs/edge-network/regions#routing).

_According to support as of March 8, 2020, you can only use one region in the array._
