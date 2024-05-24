---
title: Optimizing Kiwi for scale
date: 2022-11-26
published: true
unlisted: false
---

I’ve spent the past two days trying to gain confidence that Kiwi will perform at scale (and tearing my hair out in the process).

The largest classes that Kiwi will be used in have around 350 students. At worst, these students will all have the main question-asking page open, polling for new questions from their classmates every 3 seconds.

![](/posts/kiwi-scale/image-4.png)

I hosted Kiwi on a $4/month Hetzner server, loaded up a test class section with 400 questions and 2,000 answers on a certain day, and ran a small load test of 50 users against it.

The CPU immediately spiked to 200% and stayed there, refusing to accept further responses.

All day, it was this same frustrating pattern and **I couldn’t isolate what the problem was**. With just 50 users, the server became unusable.

I worked on it all day (Thanksgiving day, no less) and ended the day with no answers. When I paid for an upgraded server with 3 CPU cores instead of 2, the CPU spiked to 250-300% when the same 50 user load test ran.

Late at night, out of frustration, I moved the hosting to [Laravel Vapor](https://vapor.laravel.com), which promises “incredible scale”.

The next morning, I fired up the project on Laravel Vapor to discover that loading that big test set of questions took **4 seconds** — unacceptably long for loading a webpage.

But throughout the day, I made two optimizations that seemed to really count. I’m not sure why they worked, but they (or some side-effect of doing them) helped tremendously.

Not loading data into PHP classes (Laravel’s has “models” that represent a row in the database), and instead using the `toBase()` function to retrieve data as raw objects and then munching it into the right shape myself with lots of loops.

- I read somewhere the “hydrating” the data from the database into lots of classes (~2,500, in my case) can be a resource-intensive process.

1. Not using Laravel Collections on large sets of data and instead using PHP’s built-in `foreach` improved things a bit.

Removing all my authorization checks (`$user->can()`). For some reason, these were slowing down my app a lot, and I was running multiple of these checks for every question and every answer to determine whether the user could edit/delete/etc that question.

- I bit the bullet and duplicated these backend authorization checks in the frontend using JavaScript instead (for example, in order to determine whether to show an edit button or not).

Taken together, these improvements brought that test dataset’s loading time down **from 4 seconds to 350 milliseconds!**

I’m super happy with that ~11x improvement. I ran a load test with 500 users and the app held up fine — now that it’s on Laravel Vapor, scaling isn’t as much of a concern.

I’m a bit more confident now that this app won’t go down when it starts to be used! But only time will tell what might happen.

🙏

_Major_ thank-you to [Jerome](https://jero.zone) for spending hours debugging this with me and supporting my descent into madness.
