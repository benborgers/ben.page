---
title: How to run a GitHub Action on a schedule
date: 2022-01-09
unlisted: true
---

You can use GitHub Actions as a way to run a cron job script, which they’ll run for you for free (as long as you stay within the [monthly limits](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes)).

Let’s say I’m creating a GitHub Action that runs a Node.js script on a schedule. I’ll call the Action “Scheduled Job”, but you can call it whatever you’d like.

I’ll first create a file at `.github/workflows/scheduled-job.yaml` (you can replace `scheduled-job` with whatever name you’d like).

Then, here’s the contents of that file:

```yaml
name: Scheduled Job

on:
  schedule:
    - cron: "0 * * * *"
    - cron: "*/15 8-10 * * *"

jobs:
  scheduled-job:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "16"
      - run: npm install
      - run: node path-to-your-script.js
```

The `on: schedule` part tells GitHub Actions when to run this job, using [cron syntax](https://crontab.guru/).

You can define multiple schedules! In this example, I’ve instructed the job to run every hour, but also every 15 minutes for 8-10am. These times are all in UTC, and at the moment there’s no way to change the timezone for the scheduler.

Also, be aware that GitHub Actions only runs scheduled jobs on the default branch of your repository (usually `master` or `main`).
