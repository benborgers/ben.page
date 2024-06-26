---
title: "How to remove double spaces in a string in Laravel"
date: 2021-01-30
unlisted: true
---

Here's how you can use Laravel's `Str` helper to remove double spaces from a string in PHP, using regex:

```php
use Illuminate\Support\Str;

$string = 'Here is my sentence.  There are  double spaces.';

$newString = Str::of($string)->replaceMatches('/ {2,}/', ' ');
```

This takes any part of the string that matches ` {2,}` (a space character occurring two or more times in a row) and replaces it with a single space.
