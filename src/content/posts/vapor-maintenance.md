---
title: "How to customize the Laravel Vapor maintenance view"
date: 2020-12-30
unlisted: true
---

If you want to take a Laravel Vapor app down temporarily, you run this command from within the app:

```bash
vapor down production # this is for environment called "production"
```

To bring it back up, you run:

```bash
vapor up production
```

While it's down, Vapor will show a general maintenance mode page. A lot of tutorials tell you to customize this by writing a view at `resources/views/errors/503.blade.php`. However, this **isn't the case for Laravel Vapor**.

On Vapor, you customize this by putting a file called `503.html` at the root of your application (not in the `resources/views/` folder — at the root, outside any folders).

Inside this self-contained file, write the plain HTML that you want to be shown when your app is in maintenance mode.
