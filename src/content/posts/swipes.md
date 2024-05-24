---
title: "I want to use all of my ridiculously many meal swipes"
date: 2022-01-16
published: true
unlisted: false
---

Tufts University requires all freshmen to be on its ✨Premium✨ meal plan, which includes 400 meal swipes per semester.

Divided out, that’s 3.5 a day. But using them all is a challenge — there’s many weekends last semester when I would eat one or two meals in Boston, and tons of mornings that I skipped breakfast. I ended the semester having only used 270 of my meal swipes, despite my best efforts.

Next semester, I want to use all of them.

At the end of last semester, I already started making lots of trips to the campus “grocery store” to buy extra granola bars, chips, and snacks to use up all of my swipes. But it was too little too late. (Also, in all honesty, I got embarrassed of how often I was going there.)

But this semester, I’m starting with a goal from the beginning. I’ve even created a page on my website to keep me on track: [benborgers.com/swipes](https://benborgers.com/swipes)

![](/posts/swipes/Screen-Shot-2022-01-16-at-12.46.27-PM.png)

The page grabs realtime data from my meal plan account, and also shows me how many swipes I should have used by now to be on track.

That way, I know exactly how many swipes I should be using to grow my excessive granola bar collection.

## The technical details

If you’re curious about how this all works:

I wrote a Node.js script that uses [Puppeteer](https://pptr.dev) to simulate a fake Google Chrome browser and log into JumboCash (Tufts’ meal plan website) using my username and password. It scrapes the number of meal swipes off the page and reports it to my website, which stores it in [Cloudflare Workers KV](https://www.cloudflare.com/products/workers-kv/).

When you load [benborgers.com/swipes](https://benborgers.com/swipes), it fetches the number of meal swipes I’ve used out of Workers KV and uses that data to construct the page.

I run the Puppeteer script every 15 minutes from 8am - 9pm using [GitHub Actions](https://github.com/features/actions) via their [cron scheduler](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#schedule).

### How it’s calculated

I move from the start of the semester to the end of the semester in 1-hour increments, adding those timestamps to an array _if_:

1.  The timestamp falls between 8am and 10pm, roughly when dining is open on campus.
2.  The timestamp is not during Spring Break.

Then I take this same array and filter down to only dates that are in the past.

I can divide the lengths of these two arrays to figure out what percentage (with a precision of one hour) we are through the semester (taking only into account time when dining is open).

Finally, I multiply that percentage by 400 swipes to get the number of swipes I should have used at this point in the semester in order to use all 400 by the end of the semester.

### The infrastructure

I wrote another blog post about how I host this project using GitHub, which you can read [here](https://benborgers.com/posts/swipes-infra).
