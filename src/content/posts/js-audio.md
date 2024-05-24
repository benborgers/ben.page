---
title: "How to play an audio file with JavaScript"
date: 2021-01-30
published: true
unlisted: true
---

Playing a sound with pure javascript is surprisingly easy. First, you need a URL to the audio file you want to play. We'll use this one:

```
https://www.w3schools.com/html/horse.mp3
```

Now, all it takes is two lines of code to play that sound file:

```javascript
const sound = new Audio("https://www.w3schools.com/html/horse.mp3");
sound.play();
```
