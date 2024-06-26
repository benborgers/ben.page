---
title: "How to log or record 404 errors in Laravel"
date: 2021-01-26
unlisted: true
---

When I moved my personal website to Laravel, I wanted to make sure that I hadn't forgotten to move some important routes. Therefore, I wanted to keep a log of all the "404 not found" errors that happened on my website.

I was originally going to listen for the error to be thrown within the app, but then found out that Laravel ignores 404 errors for you.

Instead, I settled on a hacky (but simple and effective!) solution:

You can customize Laravel's 404 error page by creating a view at `resources/views/errors/404.blade.php`. I built a simple "not found" page there, and then wrote the PHP code I wanted to run in the view within a `@php` blade directive in that view:

```php
{{-- resources/views/errors/404.blade.php --}}
@php
  $array = Cache::get('404') ?? []; $array[] = '/' . request()->path(); Cache::forever('404', $array);
@endphp
```

This code adds the current URL to an array that's stored in the cache, so I can see which URLs people are going to but that don't exist.
