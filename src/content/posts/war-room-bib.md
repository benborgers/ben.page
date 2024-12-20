---
title: War Room “Bib”
date: 2023-02-13
---

It’s been a long-standing request in [War Room](https://war.elk.sh) to be able to add a task directly into a “divider,” instead of creating it and then dragging it into the right divider.

I was thinking of ways to do it without cluttering up the interface and adding buttons around the task input.

Then, [Jerome](https://jero.zone) gave me the idea of having a menu of options that slides out under the input when you’re typing in it. I built that out and launched it on Friday, and I really like how it came out!

Here’s a video of it in action:

<video src="/posts/war-room-bib/bib_1.mp4" controls playsinline></video>

A few fun facts about its implementation:

- I call it the **“bib”** internally, because... of course.
- After you create a task, the bib closes. If you open it again, the options you’ve selected are preserved. But after five seconds, they’re cleared out to defaults.
- Clicking any of the toggles would take focus off the text input, but I manually put focus back into the text input to maintain the illusion and allow you to keep typing.
- The cyan ring around the text input isn’t actually a CSS focus style&nbsp;for the text input (since the cursor focus leaves the text input for a moment when a toggle is clicked, for example). Instead, it’s a fake focus style that shows whenever the bib is open.
- I put a transparent layer below the bib when it’s open, and clicking anywhere on that layer closes the bib again.
- This also created a perfect opportunity for a little plus button on each divider that opens the task composer pre-filled with the divider:

<video src="/posts/war-room-bib/bib_2.mp4" controls playsinline></video>
