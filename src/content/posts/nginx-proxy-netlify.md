---
title: How to proxy a Netlify site with Nginx
published: true
unlisted: true
date: 2022-05-02
---

I wanted to proxy a path of my site to a Netlify site using Nginx.

In my example, I wanted the `/swipes` page of my website to show the Netlify site `mealswipes.netlify.app`.

First, locate your Nginx configuration file, which is probably stored on your server at `/etc/nginx/nginx.conf`. You can edit it using any editor, for example:

```sh
nano /etc/nginx/nginx.conf
```

Within the `server` block for your website, add a `location` block:

```nginx
server {
    # Other existing stuff here.

    location /swipes {
        proxy_pass https://mealswipes.netlify.app/;
    }
}
```

Then reload your Nginx server to use the new configuration.

The important part is that the Netlify URL ends in a trailing slash. Without this, you’ll see a 404 Page Not Found page from Netlify.

But with the trailing slash, the `/swipes` page of your website should now show the proxied Netlify site!
