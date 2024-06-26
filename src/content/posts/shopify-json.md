---
title: How to get Shopify storefront data without authentication
unlisted: true
date: 2022-05-09
---

Shopify has a Storefront API that lets you get public information about your store, but it requires authentication and is a somewhat-involved GraphQL API.

Instead, there’s an alternative (“hidden”) API: all you have to do is to add `.json` to the end of a URL!

Imagine that your Shopify site is at `example.com`. You could get JSON data about your products in your store via this URL:

```
example.com/products.json
```

Or you could get data about your store’s collections via this URL:

```
example.com/collections.json
```

You can even get data for a specific collection or specific product:

```
example.com/collections/:collection_id.json
example.com/products/:product_id.json
```

Most pages that you can navigate to on your Shopify site can be extracted as API data by adding `.json` to the end of the URL.

This can be super useful if you’re building a “headless” Shopify site and want a simple API to get data from your site without needing to use authentication tokens or a GraphQL API.
