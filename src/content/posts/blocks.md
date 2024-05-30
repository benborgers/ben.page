---
title: Blocks recap
date: 2021-05-31
unlisted: false
bestOf: true
---

_Blocks_ is a school schedule app that I created in the summer before junior year of high school, and ran for my junior and senior years.

It was born from my high school switching to a six-day rotating schedule, which would be harder to memorize.

## Build and launch

I came up with the idea at the end of sophomore year, but I shelved the idea because I thought it would be too much work. But later in the summer, a friend texted me a screenshot of their texts with someone else, who thought it was a great idea.

Seeing someone who was actually interested in an app like that motivated me a lot, and I started working that night.

I finished a rough version of the app within a week. I shared it with a friend, who sent it to some friends, and I remember it hitting 8 users. That night I hit around 200 downloads, and the next day 500.

From there, I met with my high school’s vice principal to ask him for his blessing. But midway through that meeting I realized that I didn’t want him to tell people about the app — that would make it uncool. Instead, I asked for his blessing just so peer mentors (who helped freshmen transition to high school in the first few weeks) could talk about it.

_I’m not sure whether having the vice principal share the app would’ve actually hurt its success. Oh, well._

## Junior year

The app in its first year was a Gatsby (React) app that interacted purely with local storage. Nearing winter, some people started to have their data wiped randomly by iPhone’s local storage management, which was extremely annoying and scary.

I built a simple backup server on Glitch, but anyone who put in someone else’s email address into a fresh Blocks installation would get that person’s entire schedule downloaded. This was an issue that I somehow managed to ignore.

The app chugged along until March of 2020, when we were sent home because of Covid. Two weeks into the school’s shutdown, I put up this message:

> _With remote learning, Blocks won't be super helpful for the next while._\
> _I truly appreciate you using my app this year. Blocks will be back in August._\
> _Stay safe,_\
> _Ben 🧼_

## Blocks v2

Over the summer, I carefully kept up with the proposed schedules and even attended many school board meetings on Zoom. I eventually rebuilt the app from scratch with user accounts using Laravel, and deployed it to the same domain: _blocks.elk.sh_

This year, the app has grown to almost **2,100 students and teachers using it**, with consistent 92%-94% weekly active users. The entire high school was ~2,400 students, so it had substantial adoption.

## Having fun with the platform

Realizing that I had an app that thousands of students visited every day, I ended up having some fun:

- Around Thanksgiving, I launched _Kindness_, a way to send anonymous messages of thankfulness and kindness to any other students. People ended up sending 17,000 messages in around a week.
- After Thanksgiving break, I launched the _Chick-fil-A_ tab, where you could spin to win gift cards for free Chick-fil-A that the school had won the previous spring. I hand-delivered 200 packages of cards to winners that week, getting up at 5am for a couple days to make deliveries before school and then starting again after school. I now have strong opinions about what makes a good mailbox. I also wrote [a full blog post](https://benborgers.com/posts/blocks-chick-fil-a) about this adventure.
- I finally allowed people to change the theme color of their app from the default red. You would not believe how happy this made some people.
- Around Valentine’s Day, I was going to launch another _Kindness_ tab called _Virtual Hugs_, which I eventually rebranded to _Kindness 2_. This did not go as well, and there were unfortunately nastier messages sent anonymously. I shut it down after 10,000 messages.
- I sold embroidered Blocks t-shirts, which I made myself using an embroidery machine at home. I then drove around town to deliver them.
- I launched a _Senior Info Center_ in the last three weeks of school in order to tell seniors about prom, spirit days, and other stuff that class council wanted to make sure they saw. (People don’t read emails from the school.)

## Goodbye

After my senior year, I made the difficult decision to shut the app down instead of passing it off to someone else.

I would rather go out with a bang than a whimper, ya know?

![](/posts/blocks/image.png)

Further reading: [Tips for Creating the Next Blocks](https://docs.google.com/document/d/1ZSk7KoshRKdodMv6ZbbX_FNNBvMWIRnMZVsIsM2p6nY)
