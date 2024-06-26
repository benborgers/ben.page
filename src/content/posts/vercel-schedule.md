---
title: How to re-build Vercel site on a schedule
date: 2021-07-21
unlisted: true
---

I wanted to-rebuild / re-deploy my Vercel site every hour, to pull in fresh content.

To do this, go to your Vercel dashboard and open the site that you want to re-deploy on a schedule. Then click on the **Settings** tab, **Git** on the sidebar, and scroll down to **Deploy Hooks**. Create a new hook and copy the URL.

Any time a request is made to this URL, your site will be re-built and deployed.

Next, make an account at [cron-job.org](https://cron-job.org), which allows you to have free scheduled jobs.

There, create a new cron job to execute every hour (or more/less often, if you want) and have it make a request to the Vercel hook URL that you created earlier.

Now, cron-job.org will make a request to the Vercel deploy hook every hour, triggering a new deploy for your site.
