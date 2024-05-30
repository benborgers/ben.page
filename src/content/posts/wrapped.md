---
title: Tufts Meal Plan Wrapped
date: 2024-03-02
unlisted: false
cover_image: /posts/wrapped/cover_image.jpeg
bestOf: true
---

Two weeks ago, [Jerome](https://jero.zone) and I won [Tufts' first hackathon in 5 years](https://www.tuftsdaily.com/article/2024/02/jumbocode-hosts-first-hackathon-at-tufts-in-5-years)! We built Tufts Meal Plan Wrapped, a Spotify Wrapped for your meal plan (that also demonstrates that meal plans are a scam), and got over 500 students to use it.

## The final product

First, here's an example of the personalized reports we built:

|                            |                                             |
| -------------------------- | ------------------------------------------- |
| ![](/posts/wrapped/1.jpeg) | ![](/posts/wrapped/IMG_806CF0DA9B6E-1.jpeg) |

_Almost everybody would be better off paying "JumboCash" for meals instead of buying a meal plan. The dithered elephant was a stroke of design genius by Jerome._

|                                                        |                                                            |                                                            |
| ------------------------------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------- |
| ![](/posts/wrapped/Tufts%20Meal%20Plan%20Wrapped.jpeg) | ![](/posts/wrapped/Tufts%20Meal%20Plan%20Wrapped%202.jpeg) | ![](/posts/wrapped/Tufts%20Meal%20Plan%20Wrapped%203.jpeg) |

(Live demo: [jumbo.cash/share/y5uybwdf3aac](https://jumbo.cash/share/y5uybwdf3aac))

To generate these slides, we would pull all transactions from a student's account, by reverse-engineering Tufts' meal plan portal.

## Day 1

We came into JumboHack with this idea already, so we hit the ground running.

The initial plan was to take advantage of the fact that Tufts' meal plan management website seems to store session keys _in query parameters in the URL_. Once you log in, all subsequent URLs look something like this:

```
https://www.jumbocash.net/index.php?skey=20613b5ef40f04e15ecc5d5f56513b92&cid=233&
```

The `cid` was the ID for Tufts, and the `skey` was a session key — sending this link to someone else would allow them to get into your account. (What a wonderful system.)

Our plan was to have students paste this link into our website, so we could scrape the transaction data and then build our reports. We determined that the session key itself only lasts for 15 minutes, so we wouldn't really have long-term keys to users' accounts.

We started building a prototype around this, until I tried to send Jerome a session key for testing on his own laptop. **It didn't work.**

It turns out that, despite the poor security practice of storing session keys in the URL, this system _does_ lock session keys to the current IP address. Jerome was on Tufts' guest network, and I was on the student network. This meant that, unless our server was hosted in the same building as every user, it wouldn't work.

So we moved to our second idea: "Friend/Relative Access". The meal plan system allows you to invite up to 10 guests to your account — a feature probably intended for parents to watch their children's balance and top it up when it gets low. We could have students invite an email address that we control, parse the "you've been invited!" email, and scrape their transactions from there.

![](/posts/wrapped/2024-03-02%20at%2015.23.40@2x.png)

For the rest of Day 1, we spent 6-7 _hours_ reverse-engineering how the login system works. (Jerome did most of this, while I frantically worked in parallel to create a [Puppeteer](https://pptr.dev)-based version of the project in case that didn't work.)

It's a mess of requests bounced back and forth that are required to provision a session key and activate it. We locked ourselves out of our test accounts many, many times.

But by midnight, we had figured out which sequence of requests were necessary to create and activate a session key! We reused my code from earlier in the day to scrape an account's transactions.

## Day 2

On Day 2 we really put on the jets, since projects were due by 4:30pm.

We began by finalizing the logic for receiving a guest access email (thank you [Postmark](https://postmarkapp.com)), parsing the password in that email, logging into the student's account, and scraping their list of transactions.

From there, Jerome and I split the work of building out the visualizations that you saw in the screenshot gallery above.

- One slide with the amount of money you could have saved if Tufts didn't force you to have a meal plan and allowed you to pay cash for the _exact same food_ instead
- One slide for your most visited dining locations on campus
- One slide for your earliest and latest meals
- One slide for the average number of meal swipes you use per day of the week

We also built out a homepage in the same wacky Spotify-inspired design style, and hosted the project at [jumbo.cash](https://jumbo.cash) (Tufts' official portal is `jumbocash.net`):

![](/posts/wrapped/2024-03-02%20at%2015.31.46@2x.png)

**Our real goal for this hackathon was to create something compelling that people would want to use, and to get people to use it.** So we sped back to my apartment and printed 30 posters to put up:

![](/posts/wrapped/R0000437.JPG)

We put those posters up, recorded a video for our hackathon submission, and submitted to the hackathon right before the 4:30pm deadline.

_However_, the most important marketing effort was two anonymous posts I made on [Sidechat](https://sidechat.lol), an anonymous social media platform at Tufts. I made two posts pretending to be a student, without any hint of self-promotion, but tastefully leaving the Safari toolbar in the screenshot.

This was by far and away the most successful way we got students to use the project — each post got hundreds of upvotes and spawned half a dozen other anonymous posts (not made by us!) with people's own results.

|                                  |                                  |
| -------------------------------- | -------------------------------- |
| ![](/posts/wrapped/IMG_5328.jpg) | ![](/posts/wrapped/IMG_5329.jpg) |

_My anonymous Sidechat posts masquerading as happy customers. We totally doctored the numbers in the second screenshot to make it more interesting._

At the end of the day we presented our projects to the judges, and ended up winning General Track Winner, Most Complete, and tied for Overall Winner. And we won a pair of AirPods each!

## By the numbers

As of writing this, **503 students have gotten their Meal Plan Wrapped!** I'm quite happy with that given that Tufts has ~6,000 undergrads, of which only ~65% have a meal plan.

The site itself got 1,300 unique visitors:

![](/posts/wrapped/image.png)

The discrepancy in those numbers is likely due to:

- A difficult process for getting your Meal Plan Wrapped (inviting our email address as a guest isn't super easy)
- Not everybody checking out the site would have a meal plan (and if you try to use it without a meal plan, we send you an email saying that we unfortunately couldn't handle your account)

But altogether, quite a fun way to spend the weekend.

_Thanks to_ [_Jerome_](https://jero.zone) _for making the trip up from Brown, and to the_ [_JumboHack_](https://jumbohack.vercel.app) _organizers for putting on a great event!_
