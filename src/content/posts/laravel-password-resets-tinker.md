---
title: "How to manually generate Laravel password resets"
date: 2020-08-01
unlisted: true
---

Instead of sending password resets via email, you can also generate one whenever you'd like using Laravel Tinker on the command line (even in production) and send it manually.

First, run `php artisan tinker` to open up Laravel Tinker. Then, use this command to generate a password reset token for the `User` with ID `1`.

```php
app('auth.password.broker')->createToken(User::find(1))
```

This returns a token and adds it (hashed) to the `password_resets` table of your database.

To use it, use this path (if your app was set up using Laravel Breeze or Laravel Jetstream):

```
/reset-password/{token}?email={email}
```

_(If you’re using the older Laravel scaffolding, the link will be `/password/reset/{token}?email={user_email_address}`.)_

To get this working in production on Laravel Vapor, I ran this command:

```bash
php artisan tinker --execute "error_log(app('auth.password.broker')->createToken(App\User::find(1)))"
```

The command wasn't actually returning the token in production until I wrapped it with `error_log`.
