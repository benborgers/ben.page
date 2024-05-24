---
title: How to redirect www subdomain with Cloudflare
date: 2022-01-23
published: true
unlisted: true
---

You can easily redirect a www subdomain with Cloudflare (like redirecting `www.example.com` to `example.com`).

First, we’ll create a dummy record in Cloudflare for the `www` subdomain, so that Cloudflare can control it.

Create an `A` record for the `www` subdomain of your domain, with the IP address `192.0.2.1`. This IP address doesn’t actually matter; what matters is that **Proxied** is turned on. This way, Cloudflare sits in front of your `www` subdomain, and we can redirect it using Cloudflare.

![](/posts/cloudflare-www/cloudflare-www.png)

Next, go to **Page Rules** for your domain in Cloudflare’s settings.

Create a rule for your `www` subdomain (for example, if my domain was `example.com`, I’d do `www.example.com`). Set the settings to “Forwarding URL” with a 301 redirect to `https://example.com/$1` (again, replace `example.com` with your domain).

![](/posts/cloudflare-www/cloudflare-www-page-rules.png)

Save this page rule. Now, your `www` subdomain will redirect to the corresponding page on your non-www (“naked”) domain!
