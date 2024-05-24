---
title: How to migrate Google Drive from Workspace to personal
date: 2022-01-18
published: true
unlisted: true
---

I wanted to migrate the Google Drive files from a Google Workspace account to my personal Google/Gmail account. Tutorials online recommended sharing my files across accounts and then assigning my personal account as the new owner, but since it was going from a Google Workspace account to regular `@gmail.com` account, I got this error:

> Ownership can only be transferred to another user in the same domain as the current owner.

I finally figured out how to do it:

Create a [Shared Drive](https://support.google.com/a/answer/7212025?hl=en), and put all of your files into it. If you don’t have access to Shared Drives, you might have to have your Google Workspace admin activate the feature.

If you have a lot of files, it might take a bit of time for them all to move into the Shared Drive. I waited until all of my files disappeared from “My Drive”.

Then, I shared the Shared Drive with my personal account with Manager permissions. I went into my personal account, opened the Shared Drive, and then selected and dragged all of the files into My Drive (on the left side of the page) on my personal account.

After a bit of waiting for the Shared Drive to empty out, the files were migrated to my personal Google account!
