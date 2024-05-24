---
title: "How to use KaTeX with Eleventy"
date: 2020-12-30
published: true
unlisted: true
---

When building this blog using Eleventy, I had some equations that I wanted to have rendered as LaTeX. I wrote them directly into the markdown of the posts, surrounded by two dollar signs:

```markdown
One equation is $​$e = mc^2$$.
```

I found some ways to do this online that involved extending the markdown renderer, but I honestly really didn't understand them. Finally, I just pulled together my own solution using Eleventy's [filters](https://www.11ty.dev/docs/filters/) to modify content.

First, go to the layout for your blog posts, and pipe the page's contents through a `latex` filter that we'll create in a moment:

```html
{# before: #} {​{ content | safe }} {# after: #} {​{ content | latex | safe }}
```

Now, we have to create that `latex` filter. First, install the KaTeX package to render math equations:

```bash
npm install katex
```

and import it in your `.eleventy.js` file:

```javascript
const katex = require("katex");
```

Now, we can write the `latex` filter in your `.eleventy.js` file:

```javascript
eleventyConfig.addFilter("latex", (content) => {
  return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
    const cleanEquation = equation.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

    return katex.renderToString(cleanEquation, { throwOnError: false });
  });
});
```

What this does is it registers a new Eleventy filter called `latex`, which will affect the `content` of our page.

We take the content of the page and use a regex to replace every occurrence of `$$something$​$`. We're using `\$` to escape the dollar sign, because `$` has a special meaning in regex but we want the actual dollar sign character (not its special meaning).

When rendering markdown to HTML, Eleventy likes to change characters like `>` to `&gt;`, etc. This stops those characters from rendering as actual HTML. However, here we want to turn these characters _back_ into what they were before, since we might've used the `>` or `<` characters in our equations.

We use KaTeX's `renderToString` method to render this equation so it looks like an actual equation, and replace the `$​$something$$` with that rendered KaTeX HTML.

Finally, add this CSS file to your layout's `<head>`. It loads the necessary fonts and CSS to display the equations.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/katex@latest/dist/katex.min.css"
/>
```

And that's it! Now, any LaTeX written in your markdown in the format `$​$equation here$$` will be beautifully rendered on the page.
