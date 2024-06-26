---
title: How to customize Tailwind Typography plugin
date: 2021-04-09
unlisted: true
---

You can customize the styles applied by the `@tailwindcss/typography` plugin in your `tailwind.config.js` file:

```jsx
// tailwind.config.js

module.exports = {
	theme: {
		extend: {
			typography: theme => ({
				DEFAULT: {
					css: {
						color: theme('colors.blue.500'),
						textDecoration: 'none'
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
}
```

The `theme` helper function lets you access values from your Tailwind config. I find it helpful to reference the [default Tailwind config](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js) when using this helper.

It's also helpful to reference the [default Tailwind typography config](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js) to figure out what you want to override.
