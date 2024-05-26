---
title: How to change authenticated redirect with Laravel 11
unlisted: true
date: 2024-05-26
---

Laravel's `guest` middleware only allows non-authenticated users to reach a certain route, and authenticated users are redirected elsewhere.

Before Laravel 11, this was handled by the `RedirectIfAuthenticated` middleware, which by default redirected to the URL defined as `RouteServiceProvider::HOME`.

With Laravel 11, `RedirectIfAuthenticated` is no longer exposed to you, and `RouteServiceProvider` no longer exists.

Instead, you can define the intended route by calling `RedirectIfAuthenticated::redirectUsing`, for example in your `AppServiceProvider`'s `boot` method:

```php
use Illuminate\Auth\Middleware\RedirectIfAuthenticated;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        RedirectIfAuthenticated::redirectUsing(fn () => route('dashboard'));
    }
}
```
