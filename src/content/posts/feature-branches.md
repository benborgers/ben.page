---
title: "How to use feature branches in Git and GitHub"
date: 2020-02-17
published: true
unlisted: true
---

Git feature branches are a workflow that involves creating separate branches for each feature you want to build. When a feature is finished, it gets merged into the central `master` branch.

This enables multiple features to be built in parallel on different branches, without overlapping over each other.

It also allows you to maintain a stable `master` branch in case the feature gets thrown away or starts to ruin everything.

## Creating the branch

First make sure you're on the `master` branch (if not, run `git checkout master` to switch to it).

Then, create a new branch from `master` and switch onto it (replace `<feature_branch>`with the name you choose for your feature branch).

```bash
git checkout -b <feature_branch>
```

From here, you can do all your work as you would usually. Commit and push new changes for the feature to this new branch.

## Merging the branch to master

Once you're done with the your work on the branch and want to merge it into `master`, run these four commands:

```bash
git checkout master
git pull origin master
git merge <feature_branch_name>
git push origin master
```

1. Switch to the `master` branch
2. Make sure you have the most up-to-date changes from `master`
3. Merge your feature branch (replace `<feature_branch>` with your branch's name)
4. Push the changes to the remote host (for example, GitHub)

## Cleaning up

Afterwards, you'll probably want to delete the feature branch. These two commands first delete the branch on the remote host, then delete the branch locally.

```bash
git push -d origin <feature_branch>
git branch -d <feature_branch>
```
