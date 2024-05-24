---
title: How to redirect www subdomain with Caddy
date: 2021-10-17
published: true
unlisted: true
---

If you want your `www` subdomain (like `www.example.com`) to redirect to your “bare” or “naked” domain (like `example.com`), you can tell the [Caddy](https://caddyserver.com) server to do that redirect.

To do this, you’ll edit your `Caddyfile`, which is the configuration file for Caddy. My configuration file was located at `/etc/caddy/Caddyfile` on the server.

To edit it using the `nano` text editor, I ran:

```sh
nano /etc/caddy/Caddyfile
```

Then, I modified the contents to be like this:

```
www.benborgers.com {
  redir https://benborgers.com{uri}
}

benborgers.com {
  # Your real site configuration.
}
```

The `www` redirect needs to be above your real site’s configuration, so that the redirect works.

Save that configuration and reload Caddy. Now, the `www` subdomain will redirect to the appropriate page on your `www`-less domain!
