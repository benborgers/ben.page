---
title: 'How to fix "PostCSS plugin tailwindcss requires PostCSS 8"'
date: 2020-11-19
unlisted: true
---

I just upgraded to Tailwind 2.0 from Tailwind 1.0, and got the error "PostCSS plugin tailwindcss requires PostCSS 8" when I tried to rebuild my CSS bundle.

I was using Laravel Mix to compile the assets, but this solution should work for any situation where you get this error.

Since PostCSS 8 is new, many tools still use PostCSS 7. Tailwind maintains a `compat` channel that works with PostCSS 7, which is completely identical to the flagship PostCSS 8 version.

To install it, first uninstall the default modules you might've installed:

```bash
npm uninstall tailwindcss postcss autoprefixer
```

Then, install specific versions of these modules:

```bash
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

You'll notice that you're installing the `compat` version of Tailwind.

And just like that, your Tailwind CSS build should work again!
