---
title: "How to schedule a Laravel job to run hourly"
date: 2022-03-06
published: true
unlisted: true
---

Laravel has a built-in scheduler, which allows you to schedule queued jobs to run at certain times.

First, create a job that can be queued, using the `artisan make:job {name}` command, which executes some code in its `handle()` method.

Now to schedule it, open Laravel’s `app/Console/Kernel.php` file. In that file’s `schedule()` method, you can have the job run once per hour. Here are a few possibilities:

```php
// file: app/Console/Kernel.php

protected function schedule(Schedule $schedule)
{
    // Run this job every hour.
    $schedule->job(new App\Jobs\SomeJob)->hourly();

    // Run this job a certain number of minutes past the hour.
    // In this example, it runs at 30 minutes past every hour.
    $schedule->job(new App\Jobs\SomeJob)->hourlyAt(30);

    // You can also run the job not hourly, but every
    // two, three, or four hours.
    $schedule->job(new App\Jobs\SomeJob)->everyTwoHours();
    $schedule->job(new App\Jobs\SomeJob)->everyThreeHours();
    $schedule->job(new App\Jobs\SomeJob)->everyFourHours();
}
```
