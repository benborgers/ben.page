---
title: Using the Netlify API to create a site from a GitHub repo
date: 2021-11-17
unlisted: true
---

I wanted to create sites in my Netlify account programmatically using Netlify’s API, but that were connected to a GitHub repository (so when I pushed a change to the repository, my site would automatically rebuild as well).

Using the Node.js client for the Netlify API, the request looks like this. I’ll explain how to get the parameters in detail afterwards.

```javascript
import NetlifyAPI from "netlify";

const client = new NetlifyAPI(process.env.NETLIFY_TOKEN);

const site = await netlify.createSite({
  body: {
    subdomain: "unique-subdomain-for-this-site",
    repo: {
      provider: "github",
      id: 123456789,
      repo: "username/repository",
      private: true,
      branch: "main",
      installation_id: 123456,
    },
  },
});
```

This is a pretty standard [`createSite`](https://open-api.netlify.com/#operation/createSite) call to Netlify’s API, but it can be a bit tricky to figure out which parameters you need under `repo`.

- `provider`: since we’re linking with a GitHub repo, this value will be `github`.
- `id` refers to the ID of the _GitHub repository_. There are multiple ways to get this:
  1. Using [GitHub’s API](https://docs.github.com/en/rest).
  2. If you plan on using the same repository every time, you can quickly get it by opening the repository on GitHub.com, doing view-source, and searching for the `octolytics-dimension-repository_id` meta tag.
- `repo` is the name of the repository you want to deploy — for example, `benborgers/cool-site`.
- `private` is a boolean that indicates whether your GitHub repository is public or private.
- `branch` indicates which branch of the GitHub repository you want this site to stay up-to-date with (usually `master` or `main`).
- `installation_id`: this requires you to have the Netlify GitHub app authorized on the GitHub account that owns the repository. If you go to [github.com/settings/installations](https://github.com/settings/installations) and don’t see Netlify on that list, deploy a site manually through the Netlify dashboard from this GitHub account first and give Netlify access to your GitHub account through their GitHub integration. Once Netlify is on that list of applications, click “Configure” next to it. The `installation_id` is the number at the end of the URL.
