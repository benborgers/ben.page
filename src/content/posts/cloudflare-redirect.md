---
title: "How to redirect one domain to another with Cloudflare"
date: 2022-02-12
unlisted: true
---

You can redirect one domain entirely to another domain using Cloudflare.

First, add an `A` record in Cloudflare that points the root of the domain (`@`) to `192.0.2.1`, which is a dummy IP address. We don’t actually care what IP address it’s pointed to, since we’re gonna be redirecting away anyway. The important part is that **Proxied** is turned on, so that Cloudflare can sit in front of the domain and redirect it before we actually get to the IP address.

![](/posts/cloudflare-redirect/image-9.png)

In this example, we’re using the domain `ben.cv`.

Next, go to **Rules** in the left sidebar and create a new Page Rule for this domain.

For the URL, put in `from.com/*`, where `from.com` is the domain you want to redirect away from. Then, set it to “Forwarding URL” with a 301 redirect.

In the destination field, put `to.com/$1`, where `to.com` is the domain you want to redirect to.

![](/posts/cloudflare-redirect/image-10.png)

An example that redirects `ben.cv` and all of its sub-paths to `benborgers.com`.

This will redirect all pages on the domain. For example:

- `from.com` → `to.com`
- `from.com/something` → `to.com/something`
- `from.com/something/else` → `to.com/something/else`
