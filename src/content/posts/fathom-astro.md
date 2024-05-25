---
title: "How to use Fathom Analytics with Astro"
date: 2022-12-29
unlisted: true
---

👋

I’ve been using Fathom Analytics for years and I absolutely love it. If you want to sign up, I have a [referral link](https://usefathom.com/ref/TUIPJE) that will give you $10 off!

In your Astro site you’ll usually have a `Layout` component, or some component that includes all the `<head>` tags so that they can be reused across all your pages.

In that component, inside the `<head>` tag, paste the Fathom tracking script.

You can find the Fathom tracking script through: **Fathom dashboard > Settings (top right) > click on site > Script settings > Embed code**.

It’ll look something like this:

```html
<script
  src="https://cdn.usefathom.com/script.js"
  data-site="YOUR_SITE_ID"
  defer
></script>
```

Paste that script into the `<head>` tag in the layout (or multiple layouts) for your Astro site.

Now, every page that uses that layout component will have Fathom tracking analytics for you!
