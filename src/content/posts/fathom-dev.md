---
title: "How to disable Fathom Analytics in development environment"
date: 2022-12-29
unlisted: true
---

👋 I’ve been using Fathom Analytics for years and I absolutely love it. If you want to sign up, I have a [referral link](https://usefathom.com/ref/TUIPJE) that will give you $10 off!

Often you want to block yourself from being counted in your own page views while you develop your site.

One way to do this is to paste `fathom.blockTrackingForMe()` in your JavaScript console. However, you’ll have to remember to do this for each browser you develop in, and the setting will be removed if you clear your local storage.

Instead, you can use the `data-included-domains` setting that the Fathom tracking script provides.

If your website is under `example.com` and `www.example.com`, you can modify your Fathom script to look like this:

```html
<script
  src="https://cdn.usefathom.com/script.js"
  data-site="YOUR_SITE_ID"
  data-included-domains="example.com,www.example.com"
  defer
></script>
```

_Note that you have to add both the “root” domain and the www subdomain if your site uses both._

Now, the script will only track page views on your production domains, and not in your local development environment.
