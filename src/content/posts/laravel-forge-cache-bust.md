---
title: How to cache-bust assets on Laravel Forge
unlisted: true
date: 2022-05-08
---

When hosting on [Laravel Forge](https://forge.laravel.com), you might find that your CSS or JavaScript assets are cached by your users’ web browsers and don’t update when you redeploy.

The solution is to “cache-bust” your assets by giving each new deploy a unique version ID. So on every deploy, Laravel will change the URL of the assets, so that the cache expires.

For example, with versioning, your HTML will look like this:

```html
<link
  rel="stylesheet"
  href="/css/app.css?id=8b6f7790f026272ce6ffa9573e030ce4"
/>
```

To version your assets with Laravel Mix, add this to the end of your `webpack.mix.js` file:

```js
if (mix.inProduction()) {
  mix.version();
}
```

This turns on versioning, but only if we’re running in production (not when you’re locally developing).

Next, you’ll import assets using the `mix()` helper instead of the `asset()` helper. So replace things like this:

```html
<!-- previously, you may have had this: -->
<script src="{{ asset('js/app.js') }}" defer></script>
```

with this:

```html
<!-- replace it with this: -->
<script src="{{ mix('js/app.js') }}" defer></script>
```

That `mix()` helper knows how to correctly add the random part to the end of the URL, in order to cache-busts your assets.
