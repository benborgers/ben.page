---
title: 3blue1brown.elk.sh
published: true
unlisted: false
date: 2022-05-01
---

Recently, the Tufts Math Department invited Grant Sanderson (creator of the [3Blue1Brown YouTube channel](https://youtube.com/3blue1brown)) to speak.

My dad, who’s a professor at Tufts, organized the talk. And two weeks before the talk came around, I decided to make my own extra attempt at advertising it.

I took the opportunity to [design a poster](/posters) that screamed the important information to get people’s attention:

![](/posts/3blue1brown/167007241-f995fc6b-5154-40b1-b240-ff13209b0ac4.png)

I printed and hung about 60 of these posters in the STEM-related buildings at Tufts. (Thanks to Tufts for providing $10 of free printing credit for students! I put them to good use.)

I mostly targeted bathrooms. I papered them above urinals and on the backs of stall doors, and got friends to hang them in women’s bathrooms for me as well.

![](/posts/3blue1brown/167007414-f8213eb5-2d5b-4ee4-af84-59af33961e2e.jpg)

I also put two up along the wall where people wait in line for a cafe (the more obvious one on the outside got taken down twice, but the inner one blended in successfully):

![](/posts/3blue1brown/167008236-074e20d2-7d99-4399-96d7-89fdd3231f6e.jpg)

And various other locations (although I did mostly focus on bathrooms).

![](/posts/3blue1brown/167008531-658c802b-37d3-4cb5-b986-413600d8ec76.jpg)

![](/posts/3blue1brown/167008540-377033ac-37f2-4501-9bc3-e7571b06c28b.jpg)

The QR code on the poster opens a website I built at `3blue1brown.elk.sh` (if you’re curious about the `elk.sh` part, you can [read about that here](/elk)).

My theory was that it’d be powerful to get people to add the event to their calendars so they’d remember when the day came, so the QR code allowed people to add the event to their Google or Apple calendar, or to receive text reminders as the event drew nearer.

![](/posts/3blue1brown/167008856-1079ef92-0b15-459d-8bfe-638519576a10.jpg)

For the Google Calendar invitation, I created a new calendar event using the Google Calendar API on my account and then shared it with the inputted email address. My calendar ended up looking like this:

![](/posts/3blue1brown/167008868-86b206cc-dad1-48b4-bcb4-aae73850fb69.png)

The Apple Calendar button led to a calendar event file (.ics), which on iPhones opens a prompt to add the event to the Calendar app.

And the text reminders were sent via my own phone number, using the [Shortcuts](https://apps.apple.com/us/app/shortcuts/id915249334) app to send the same message repeatedly to many recipients (similar to what I did [for Assassins](/assassins) in senior year).

## Results

In the end, a bit over 100 people added the event to their calendar or signed up for texts. The turnout for the event was fantastic—about 500 people—so my posters weren’t responsible for a huge percentage of attendees (math majors and students taking math classes were also blasted with a couple emails telling them about the event). But I like to think that the posters did some good, and the whole thing was fun to build.
