---
title: "How to avoid running out of disk space with a database on Glitch"
date: 2020-02-19
unlisted: true
---

Since originally writing this blog post, I've since found that the best way to solve a problem like this is to add the database file(s) to your `.gitignore` file.

This tells git not to keep a record of changes to your database, which avoids clogging up your disk space with local git history.
