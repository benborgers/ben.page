---
title: "How to keep your Glitch project from sleeping"
date: 2020-03-18
unlisted: true
---

_Note: you might not be able to use this method (or any method) to keep your Glitch projects awake anymore, since [Glitch has blocked ping services](https://blog.glitch.com/post/ping-services)._

---

[Glitch](https://glitch.com) projects sleep after 5 minutes if they're not used.

Then, the next time you access the project, you'll see a loading screen for a few seconds:

![](https://user-images.githubusercontent.com/30215449/105642152-f88aa900-5e55-11eb-9f08-aa0bc621b5c7.png)

If you have a Glitch project that you don't want going to sleep, use [cron-job.org](https://cron-job.org).

A cron job is a task that happens at a certain interval. In this case, we're going to make a request to your Glitch project every 5 minutes so that it doesn't fall asleep.

1. Create a [cron-job.org](https://cron-job.org) account for free, and then [create a new cron job](https://cron-job.org/en/members/jobs/add/).
2. Fill out the title, URL (your Glitch project link), and schedule it for every 5 minutes.
3. Create the cron job.

![](https://user-images.githubusercontent.com/30215449/105642162-04766b00-5e56-11eb-829e-93be7ff12b5c.png)

Done! cron-job.org will make a request to your Glitch project's URL every 5 minutes, keeping the project awake for free.
