---
title: How to install "psql" command for PostgreSQL on macOS
date: 2021-04-23
unlisted: true
---

You can really install the `psql` command for Postgres if you have [Homebrew](https://brew.sh) installed.

Just run these two commands:

```bash
brew install postgresql
brew services start postgresql
```

Now, the `psql` command will work locally on your Mac.
