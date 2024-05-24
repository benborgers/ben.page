---
title: "How to get syntax highlighting in HTML generated by GitHub"
date: 2021-01-24
published: true
unlisted: true
---

GitHub has its own markdown renderer. Maybe you're using a package like Caleb Porzio's [GitDown](https://github.com/calebporzio/gitdown), which internally uses the GitHub API to parse markdown. Or maybe you're using the GitHub API to get the contents of an issue.

In any case, you're letting GitHub render the markdown.

GitHub's markdown renderer adds classes inside code blocks, which are used for syntax highlighting (making some parts of the code a different color than others). However, you need the right CSS file to make those different classes different colors.

Per the [github-syntax-theme-generator](https://github.com/primer/github-syntax-theme-generator) repository, you've got two options. Pick one of these two CSS files, copy and paste the line into your HTML's `<head>`, and it'll syntax highlight the markdown outputted by GitHub's API.

```html
<!-- for light background -->
<link
  rel="stylesheet"
  href="https://unpkg.com/github-syntax-light@latest/lib/github-light.css"
/>

<!-- for dark background -->
<link
  rel="stylesheet"
  href="https://unpkg.com/github-syntax-dark@latest/lib/github-dark.css"
/>
```