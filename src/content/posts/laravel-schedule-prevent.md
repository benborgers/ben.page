---
title: "How to prevent a Laravel schedule from running at certain times"
date: 2021-01-29
unlisted: true
---

I had a queued job that I wanted to run every thirty minutes, but only during the daytime.

Turns out that Laravel has two methods that allow you to control the times of day that a scheduled job is executed: `between` and `unlessBetween`.

```php
// file: app/Console/Kernel.php

protected function schedule(Schedule $schedule)
{
    // Only runs between 7 a.m. and 11 p.m.
    $schedule->job(new App\Jobs\SomeJob)
        ->everyThirtyMinutes()
        ->between('7:00', '23:00');

    // Runs at all times except from 2 a.m. to 8 a.m.
    $schedule->job(new App\Jobs\SomeJob)
        ->everyThirtyMinutes()
        ->unlessBetween('2:00', '8:00');
}

```

You can do the same things with either method, so it's up to you to pick whichever one feels better.
