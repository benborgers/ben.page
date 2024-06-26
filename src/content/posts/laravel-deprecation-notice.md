---
title: "How to fix “Deprecation Notice” when using Laravel CLI"
date: 2022-03-06
unlisted: true
---

When I updated my computer’s version of PHP to version 8.1, I was getting some big “Deprecation Notice” errors in my console when I was running commands like `laravel new` or when using the Laravel CLI in other ways.

It seems like Laravel’s CLI previously used code features that are going to be deprecated, and PHP 8.1 has started warning about those soon-to-be-removed features.

However, the code for Laravel’s CLI has been updated to get rid of these warnings!

To upgrade your computer’s version of the Laravel CLI, first run:

```bash
composer self-update
```

This updates your computer’s own version of Composer, the PHP package manger (similar to npm in the Node.js ecosystem).

Next, run:

```bash
composer global update
```

This updates your global Composer packages, including the Laravel CLI.

Now if you run the Laravel CLI commands again, the warnings about deprecated features should be gone!
