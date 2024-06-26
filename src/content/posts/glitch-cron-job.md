---
title: "How to set up a cron job for your Glitch project"
date: 2020-05-03
unlisted: true
---

A cron job allows you to run some code on a schedule (every day at 9am, every hour at 10 minutes past the hour, etc).

With Glitch, you can do that by writing the code in your Glitch project, and then triggering the code to run externally.

First, set up an [Express](https://expressjs.com) route that contains the code you want to run:

```javascript
app.get("/cron", (req, res) => {
  // the code you want to run

  res.sendStatus(200); // sends an "OK" response
});
```

This means that when you go to `https://project-name.glitch.me/cron` in your browser, the code will execute.

Now, instead of opening that page manually, we'll use an external service to make an HTTP request to the `/cron` endpoint and run that code.

Go to [cron-job.org](http://cron-job.org) and sign up (it's free). Then, [view your cron jobs](https://cron-job.org/en/members/jobs/) and click the "Create" button.

Give the job a name that describes it, and put the `https://project-name.glitch.me/cron` URL as the one where a request should be made.

Configure the schedule options so it runs at the frequency you'd like, and click "Create cronjob" at the bottom of the page.

Done! Now, cron-job.org will make an HTTP request to that URL at the frequency you told them to, triggering the code in the `/cron` route to run automatically.
