---
title: "How to programmatically get an image for any emoji"
date: 2021-01-01
unlisted: true
---

I wanted to be able to get a PNG image of any emoji, so I built a quick API for it.

It's called [EMOJICDN](https://emojicdn.elk.sh), and all you have to do is go to `emojicdn.elk.sh/<emoji>` to get an image of that emoji. For example (try it!):

[emojicdn.elk.sh/🐢](https://emojicdn.elk.sh/🐢)

By default, the API returns the Apple artwork for the emoji. However, you can pass in a `?style=` parameter to get another platform's artwork. A full list of supported styles is [documented here](https://github.com/benborgers/emojicdn#emoji-style).

[emojicdn.elk.sh/🐢?style=messenger](https://emojicdn.elk.sh/🐢?style=messenger)
