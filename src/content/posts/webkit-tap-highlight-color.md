---
title: "How to remove gray box when tapping a link on iOS with CSS"
date: 2020-11-26
published: true
unlisted: true
---

When you tap a link in iOS Safari, a gray highlight box appears around it. This can be jarring and might not fit with the rest of your website, so you can use CSS to remove it.

Here's how you remove it:

```css
* {
  -webkit-tap-highlight-color: transparent;
}
```

However, this might cause the user not to realize that they tapped something. I like to fix this by using javascript to fading out tapped items to 50% opacity. That way, the user realizes that the button's been tapped and that we're loading the next page.
