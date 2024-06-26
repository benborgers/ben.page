---
title: "Easiest way to add days to a PHP DateTime"
date: 2020-12-09
unlisted: true
---

If you have a PHP `DateTime` instance and want to add a certain number of days to it, you can use the `modify` method. Here's an example:

```php
$date = new DateTime('NOW')->modify('+1 day');
```

Now, `$date` is a `DateTime` 1 day in the future from now.

You can substitute any number of days into the `modify` method, or make it a variable like this:

```php
$date = new DateTime('NOW')->modify("+{$daysToAdd} days");
```
