---
title: "An API to get the image for any emoji"
date: 2019-12-21
unlisted: true
---

I built an API called [EMOJICDN](https://emojicdn.elk.sh) that lets you pass in any emoji and get a PNG for Apple's artwork of that emoji.

For example: [emojicdn.elk.sh/🤩](http://emojicdn.elk.sh/🤩)

It uses the Apple versions of the emojis because I think those are the most recognizable and good-looking.

## Uses

You can also use that link as the source of an img html element.

I also often use it as a quick and easy favicon:

```html
<link rel="icon" href="https://emojicdn.elk.sh/🤩" />
```

The source code for the API is [open source](https://github.com/benborgers/emojicdn), and there's more details at [emojicdn.elk.sh](http://emojicdn.elk.sh/).
