---
title: How to fix Gmail iOS making text small (CSS)
date: 2023-12-19
published: true
unlisted: true
---

When testing my emails' custom CSS in Gmail on iPhone, I discovered that my 13px text was being made bigger by Gmail. Even worse, the link inside of the sentence was staying small, so the size was just inconsistent:

![](/posts/gmail-small/IMG_4351.PNG)

After a lot of trial and error, I found a solution: Gmail only does this to `<p>` tags, presumably to make text more readable on phones. If you replace it with a `<div>` instead, Gmail won't mess with your font size.
