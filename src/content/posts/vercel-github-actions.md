---
title: How to deploy GitHub team repositories to Vercel for free
unlisted: true
date: 2024-09-25
---

Vercel has a restriction where you can’t connect GitHub repositories that are owned by a “team” to a free Vercel account — they want you to upgrade to the paid Vercel tier.

Instead, you can set up GitHub Actions that build and deploy your app on GitHub’s servers.

Create this file at `.github/workflows/deploy.yml`, which deploys your `main` branch to production on Vercel:

```yml
name: Vercel Production Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
on:
  push:
    branches:
      - main
jobs:
  prod-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          cache: "npm"
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prod --token=${{ secrets.VERCEL_TOKEN }}
```

Create this second file at `.github/workflows/deploy-pr.yml`, to deploy pull requests to Vercel as a non-production branch deploy:

```yml
name: Vercel PR Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
on:
  pull_request:
jobs:
  pr-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          cache: "npm"
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --token=${{ secrets.VERCEL_TOKEN }}
```

If a PR deploy fails, the GitHub Action will fail as well, so you can tell from any open PR whether it’s deploying properly to Vercel.

To debug a commit that’s not building properly, the developer can check the Vercel build logs linked in the GitHub Action’s output, or just run `npm run build` (or similar) locally.

These actions do require you to add three environment variables in your GitHub repository’s Settings > Secrets and variables > Actions:

- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
  - Note that to get a project ID, you need a project on Vercel. To get that project created, you can install the [`vercel` CLI](https://vercel.com/docs/cli) on your own computer, and then `vercel deploy` locally _once_ so that the project gets created.
- `VERCEL_TOKEN`

You can find these values in your Vercel dashboard.
