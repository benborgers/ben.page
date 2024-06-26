---
title: "Artisan commands not working in fresh Laravel installation"
date: 2020-12-11
unlisted: true
---

I just created a new Laravel app and installed Jetstream, and when I went to run `php artisan serve` it hung and didn't do anything.

Then, I tried to run `php artisan migrate`, and it also stalled for a while before giving me an error that the database connection had timed out.

This was weird, because it was a completely fresh installation of Laravel and Jetstream with no changes made.

I eventually realized that the issue lay in the `.env` file. The new Laravel installation has a `.env` file with these values:

```
DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

The `DB_HOST` variable is no longer set to localhost, like it used to be, but my local MySQL database for development is running at `localhost:3306` (which is the same as `127.0.0.1:3306`).

To fix it, all I had to do was uncomment the first `DB_HOST` line by removing the `#`, and then remove the line that says `DB_HOST=mysql`.

Then, `php artisan serve` and `php artisan migrate` worked perfectly again.
