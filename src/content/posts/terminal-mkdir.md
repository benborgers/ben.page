---
title: "Terminal create directory if it doesn't exist"
date: 2020-12-17
unlisted: true
---

If you want to create a directory using bash (in the terminal), but you don't know whether it'll already exist so you only want to create it if the directory doesn't exist yet:

```bash
mkdir -p directory
mkdir -p my/directory/here
```

You can use this with a top-level directory (the first example), or with a deeply nested directory (the second example).

The `-p` flag creates all directories necessary along the way (for example `my`, `directory`, and `here`) **if** they don't exist yet.
