# Contributing to NextPatterns

First off, thank you for considering contributing to NextPatterns! It's people like you that make NextPatterns such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, [make one](https://github.com/your-username/NextPatterns/issues/new)! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

### Fork & create a branch

If this is something you think you can fix, then [fork NextPatterns](https://github.com/your-username/NextPatterns/fork) and create a branch with a descriptive name.

A good branch name would be (where issue #38 is the ticket you're working on):

```sh
git checkout -b 38-add-amazing-new-feature
```

### Get the test suite running

Make sure you're able to run the tests successfully.

```sh
pnpm test
```

### Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first 😸

### Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with NextPatterns's master branch:

```sh
git remote add upstream git@github.com:your-username/NextPatterns.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 38-add-amazing-new-feature
git rebase master
git push --force-with-lease origin 38-add-amazing-new-feature
```

Finally, go to GitHub and [make a Pull Request](https://github.com/your-username/NextPatterns/compare)

### Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing and merging, check out this guide on [merging vs. rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing).

## How to report a bug

When you file a bug, please be sure to include the following:

*   A descriptive title
*   A detailed description of the bug
*   Steps to reproduce the bug
*   Your environment (OS, browser, etc.)
*   Any relevant screenshots or code snippets

## How to suggest a feature

When you suggest a feature, please be sure to include the following:

*   A descriptive title
* a detailed description of the feature
*   Any relevant mockups or examples

## Code review process

The code review process is as follows:

1.  A maintainer will review your PR.
2.  If the PR is approved, it will be merged into the `main` branch.
3.  If the PR needs changes, the maintainer will leave comments on the PR.

We appreciate your contributions and thank you for your time!
