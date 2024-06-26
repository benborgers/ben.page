---
title: "How to add falling snow to a website with JavaScript"
date: 2021-02-01
unlisted: true
---

I wanted to add a snowing animation to my website, but I didn't want to code it myself. Instead, I found a nice package called [let-it-go](https://github.com/EastSun5566/let-it-go) to do it for me.

Just install the package:

```shell
npm i let-it-go
```

And then start the confetti:

```javascript
import { LetItGo } from "let-it-go";

new LetItGo({
  color: "#94a3b8",
  /* color is optional (the snow is white by default),
       but since my website was white I needed gray snow for contrast */
});
```

There's more options for stopping and styling the snow in the [let-it-go docs](https://github.com/EastSun5566/let-it-go).
