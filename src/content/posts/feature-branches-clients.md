---
title: "How to use Git feature branches in Netlify for clients"
date: 2020-02-17
unlisted: true
---

I recently wrote a guide on [how to use feature branches in Git](/feature-branches).

I also wanted to add that I use this technique a lot for client websites, if the client has requested a hefty change to their website that I'm not sure they'll actually like.

I create a branch for the change, code the change, and then push it to the repository on GitHub. From there, I can use [Netlify](https://netlify.com) to [deploy all branches of my repository](https://docs.netlify.com/site-deploys/overview/#branch-deploy-controls), and send the client a link with that specific branch deployed.

They can try the change live, and if they like it, I merge the feature branch into `master` (as described in my [other post](/feature-branches)).

If they don't like it, I can just delete the branch instead of spending hours undoing my work.
