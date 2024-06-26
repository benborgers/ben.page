---
title: "How to schedule a Laravel job to run daily"
date: 2021-01-29
unlisted: true
---

Laravel has a built-in scheduler, which allows you to schedule queued jobs to run at certain times.

First, create a job that can be queued, using the `artisan make:job {name}` command, which executes some code in its `handle()` method.

Now to schedule it, open Laravel's `app/Console/Kernel.php` file. In that file's `schedule()` method, you can have the job run once per day. Here are three options:

```php
// file: app/Console/Kernel.php

protected function schedule(Schedule $schedule)
{
    // Run this job every day at midnight
    $schedule->job(new App\Jobs\SomeJob)->daily();

    // Run this job every day at a certain time (here, 3 p.m.)
    $schedule->job(new App\Jobs\SomeJob)->dailyAt('15:00');

    // You can also set a time zone for the cron job
    $schedule->job(new App\Jobs\SomeJob)
        ->timezone('America/New_York')
        ->dailyAt('15:00');
}
```
