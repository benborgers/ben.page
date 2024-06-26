---
title: How to deploy to Laravel Vapor using GitHub Actions
date: 2021-08-14
unlisted: true
---

I recently discovered that Laravel Vapor recently updated their documentation to include [an example](https://docs.vapor.build/1.0/projects/deployments.html#deploying-from-ci) of how to deploy new versions of your app using GitHub Actions.

This allows you to have the "push to deploy" experience, so new commits are automatically deployed without you having to run a terminal command locally on your computer.

**Here's the full process I went through to get this working, including the GitHub Actions workflow I used:**

First, create an API token for Laravel Vapor by going to Laravel Vapor > your name in the top right corner > My Profile > API. Create a new API token and copy it.

Next, open the GitHub repository for the Laravel app you want to deploy. Go to Settings > Secrets, and create a new repository secret named `VAPOR_API_TOKEN` and paste your token.

Then, create a file in your project at `.github/workflows/deploy.yml`. This file will automatically be detected by GitHub. Fill the file with this:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: 8.0
          tools: composer:v2
          coverage: none
      - name: Install Composer dependencies
        run: composer install --prefer-dist --no-interaction --no-dev
      - name: Require Vapor CLI
        run: composer global require laravel/vapor-cli
      - name: Deploy Environment
        run: vapor deploy production --without-waiting
        env:
          VAPOR_API_TOKEN: ${{ secrets.VAPOR_API_TOKEN }}
```

This workflow runs on GitHub Actions every time there's a new push on the `main` branch. You can change which branch you'd like to deploy if you'd like.

Then, it takes an Ubuntu server, downloads your latest code, installs the Laravel Vapor command-line tool, and then runs `vapor deploy production --without-waiting` using the API token that we created earlier to authenticate.

You'll notice that I modified the command to use the `--without-waiting` flag, which ends the command as soon as the code is uploaded and doesn't wait for everything to deploy to AWS. This means the GitHub Action will run for less time, which means less usage on your account (and more deploys per month for free).

And that's it! Now, every time you commit to the `main` branch, GitHub actions will automatically deploy your latest code onto Laravel Vapor without any additional work.
