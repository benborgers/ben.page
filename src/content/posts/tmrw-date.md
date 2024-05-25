---
title: "Date Picker Details"
date: 2022-04-11
unlisted: false
---

I was building a date picker last night, and I decided to structure it as three select boxes:

![](/posts/tmrw-date/2022-04-11-at-12.03.gif)

I’m sure there’s nicer date pickers, but this was quick and easy.

But then, I wanted to add more information to the day picker: an asterisk to indicate the current day, and the name of the weekday to make it easier to get perspective.

![](/posts/tmrw-date/2022-04-11-at-12.07@2x.png)

But now, when a date was selected, it looked a little ugly:

![](/posts/tmrw-date/2022-04-11-at-12.08@2x.png)

It just doesn’t really read like English — “April 11th Monday 2022”.

I realized that I wanted the possible options to have extra information (the asterisk and weekday name), but once a date was selected it only needed to show the number.

That’s not really possible with HTML and the built-in browser `<select>` though. So it required a bit of a hack.

First, I added a piece of text that reflects the chosen day’s number. In the demo below, the text on top is what I would want to show when the select box is closed, and on the bottom is the actual select box.

![](/posts/tmrw-date/2022-04-11-at-12.10.gif)

My first idea was that I’d make the select box hidden entirely, but trigger it to open when the user clicked on the number text. But it turns out that you can’t trigger a select box to open with code — it only opens when someone clicks on it.

So my solution was to overlay the text on top of the select box, and make the text above unclickable (with CSS, `pointer-events: none`). So when someone clicks on the text with just the number, they’re actually clicking _through_ the text and onto the select box below.

![](/posts/tmrw-date/2022-04-11-at-12.17@2x.png)

Then I made the select box underneath transparent, and set its width to be the approximate width of a two-digit day number above it.

![](/posts/tmrw-date/2022-04-11-at-12.19.gif)

So now I can have the best of both worlds! The extra information is visible when selecting a date, but not when the select box is closed.
