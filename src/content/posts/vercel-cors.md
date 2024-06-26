---
title: "How to allows CORS on Vercel"
date: 2020-04-29
unlisted: true
---

CORS is a browser feature that blocks HTTP requests from one domain to another, unless the destination has the proper headers set up.

I recently ran into these problems when making an HTTP request from my website to [Potion](https://github.com/benborgers/potion), an API I build for [Notion](https://notion.so) notes.

I fixed it by adding headers to my [Vercel](https://vercel.com) deployment that allowed HTTP requests from any domain.

Here's my `vercel.json` file:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "access-control-allow-origin",
          "value": "*"
        }
      ]
    }
  ]
}
```
