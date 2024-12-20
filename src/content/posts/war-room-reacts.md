---
title: "An emoji picker epiphany"
date: 2022-01-17
---

I created this app called [War Room](https://benborgers.com/posts/war-room) where my friends and I can see each other’s to-do lists, and completed tasks go on a public feed for all your friends to see. You can react to people’s completed tasks with emojis, but for a while I’ve been frustrated with how slow the emoji picker is.

You see, I load the emojis as images using [another project of mine](https://emojicdn.elk.sh), because I’m picky and prefer Apple’s art for emojis instead of using whatever the user’s default operating system emojis look like.

Because of this, loading all the emojis the user can pick takes **substantial time** — loading that many images is no easy feat.

Tonight, I had a breakthrough on how to make this page a bit faster:

## Solution part 1 of 2: stop loading so many pictures of emojis goddammit

For reference, here’s what the page looks like:

![](/posts/war-room-reacts/image-2.png)

It’s a beautiful buffet of emojis to choose from! Wonderful.

But let me paint a picture of how the browser loads this page, especially on iffy wifi:

1.  The web browser realizes that it has to load 1,810 images (sorry web browser) and starts loading them, albeit a bit slowly.
2.  The user starts to type a search query, which filters down the list to a couple dozen images.
3.  The browser is still trying to load the massive list of images, but the user only cares about a dozen or so of them. But the user still has to wait for the browser to load all the images in order, until the specific ones that have been searched show up.

Thinking about that process, the solution was fairly simple: don’t show the whole list of emojis when the page loads! I’m guessing that _most_ people want to search something instead of browsing through several thousand options. And if they _do_ want to browse, I’ve added a button to reveal all of the emojis:

![](/posts/war-room-reacts/image-4.png)

This way, we only load images for what the user has searched for. There’s no need to load an image of every single emoji, unless the user really wants to browse them all.

## Solution part 2 of 2: tricking your brain

Part 1 was about improving actual speed, and part 2 is about improving _perceived_ speed.

You see the little piece of text up there that says **“x emojis”**? I added that so people wouldn’t see a blank screen of emojis that hadn’t loaded yet and think that there were no results.

But what if we could trick your brain into thinking that the emojis were already kinda there, before they’re actually loaded? That’s the idea of _placeholders_.

I made a second improvement: if the app knows that an emoji should be there but isn’t loaded yet, its place is held with a little gray shadow:

![](/posts/war-room-reacts/image-5.png)

Your brain sees that and subconsciously feels like _something_ loaded really fast, when in reality that emoji hasn’t loaded yet.

Is this a tiny improvement that will go mostly unnoticed? Yes.

But is it fun to be intentional about these kinds of details? Also yes.
