---
title: "How to use JSON-LD to improve SEO on a developer blog"
date: 2020-01-06
published: true
unlisted: true
---

I want the title, description, and publish date to be really clear when Google looks at my blog posts. After some searching, I decided to add metadata to my articles in the JSON-LD format.

JSON-LD is a specific set of data that you often add to the `<head>` of your blog post, which hidden metadata about your page.

I did a bunch of fiddling with Google's [structured data testing tool](https://search.google.com/structured-data/testing-tool/), and finally landed on adding this to the blog post template of my Gatsby blog:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to use JSON-LD to improve SEO on a developer blog",
    "image": "https://benborgers.com/assets/json-ld.png",
    "publisher": {
      "@type": "Organization",
      "name": "Ben Borgers",
      "url": "https://benborgers.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://benborgers.com/assets/index.png",
        "width": "1200",
        "height": "630"
      }
    },
    "url": "https://benborgers.com/posts/json-ld/",
    "datePublished": "2020-01-06T00:00:00.000Z",
    "dateCreated": "2020-01-06T00:00:00.000Z",
    "dateModified": "2020-01-06T00:00:00.000Z",
    "description": "Adding data to your developer blog in the JSON-LD format, like the title, description, share image, author, and date published, can make it easier for Google to parse and index your articles.",
    "author": {
      "@type": "Person",
      "name": "Ben Borgers",
      "url": "https://benborgers.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://benborgers.com/posts/"
    }
  }
</script>
```

Most of the lines are fairly self-explanatory:

- Defining that the page is a blog post (type "BlogPosting")
- Defining the title, description, and share image for the page
- Recording dates when the blog post was published, created, and modified

Google's testing tool also complained that I didn't have an author and a publisher, so I added both.

The `mainEntityOfPage` property defines what this page is an "entity", or part, of. In my case, these blog posts are a part of my larger blog.

Adding this script tag to the blog post template of my Gatsby blog has allowed Google to more easily parse and index my articles.
