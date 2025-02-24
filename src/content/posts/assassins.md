---
title: "How I Sent Texts for Assassins"
date: 2022-04-06
---

At the end of senior year of high school, some friends and I ran the yearly senior tradition of _Assassins._ It’s a game where everybody pays $10 to play and is assigned a secret target, with the goal of eliminating their target with a water gun. The last person alive wins the pot of money.

I coded a dashboard for the game, since we wanted a way to keep track of who each person’s target was (especially once people started eliminating their targets and inherited their target’s target).

I also knew that I wanted to send personalized target assignments and game updates to players via text message, and to receive messages back from them.

I considered using a service to send messages using code, but then I had a different idea: what if I sent the texts through my own phone number?

I built a section of the web app that would allow me to write a message, and have certain parts of the message be replaced with the player’s name or their target’s name.

When I clicked send, it would add one record for each recipient into my database. Then, I built a [Shortcut](https://support.apple.com/guide/shortcuts/welcome/ios) on my iPhone that would read these messages out of my database one-by-one and send them from my own phone’s Messages app. After sending a message, it marked it as sent in my database so it wouldn’t get sent again.

Using this method I could compose a message on my computer and then run the Shortcut on my phone, and within ~5-10 minutes it would have sent messages to 160 different people (a bit slow, but not bad at this scale).

There was couple benefits to this strategy: first, we didn’t have to pay for sending texts since I was using my own phone number, which was great. But more importantly, it made it really easy for me to receive texts from people reporting a successful assassination, or with questions about the rules. The phone number could be used as a two-way communication stream, rather than a one-way information sending method.

But it also came with a downside: for weeks, I was _constantly_ wired in. I would go to bed late getting reported assassinations or questions from people, and dread how many texts I would have to deal with in the morning.

Since it was all coming through my personal phone, there was no turning it off.

But as the game progressed there were less and less players and it became less of a constant rush in my life.

And in the end? We were left with just two people — two friends. They split the money evenly, but not before performing a public execution by water gun in order to crown one winner:

![](/posts/assassins/ABA45BF9-0BC3-43B5-9B29-960B82258869_1_105_c.jpeg)
