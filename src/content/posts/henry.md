---
title: Building henrynitzberg.com
date: 2022-12-01
unlisted: false
---

As the first website that uses Superadmin, I built my roommate a portfolio for his art! It’s live at [henrynitzberg.com](http://henrynitzberg.com).

![](/posts/henry/image-5.png)

To get it working smoothly, I made [a few changes](https://benborgers.com/posts/superadmin-styled) to Superadmin:

Being able to do one-off pages, instead of a collection of entries.

- I used this for a “Site Basics” page where Henry can update his profile picture, bio, etc.
- An image upload block (for the portfolio images).

Being able to drag and drop to reorder items in a collection.

- For Henry to be able to rearrange the images in his portfolio.
- Instead of having a “Publish” button, Superadmin waits until you haven’t made any edits for 1 minute and triggers a rebuild of the site automatically.
