---
title: Why I Love Tailwind CSS
unlisted: false
date: 2022-07-07
---

I’m a really big fan of [Tailwind CSS](https://tailwindcss.com), a framework for styling websites.

It took me a couple tries to get into Tailwind. I’d seen it around, but finally around two years ago I tried it again and it stuck.

I think that the intimidating thing for me was always memorizing the names of the classes. In general, I think that the memorization is the biggest learning curve. The names of CSS properties were already in my head, so it seemed silly to need to memorize another syntax. But the syntax eventually entered my head, and now I love it. (I’ve since realized that there’s an official VS Code extension that adds autocomplete for the classes, which helps with memorization and is very handy.)

Okay, so some reasons that I love it:

## I can style things super quickly

Since I can write HTML and CSS in the same view right next to each other, I can style things super quickly. I don’t need to flip between an HTML file and a CSS file, so I can style as I go, which feels really fast for me.

## No naming classes

Maybe I’m bad at naming, but naming classes is a real pain every once in a while. Not needing to give classes names and then style them separately eliminates that.

## Dead CSS is automatically deleted

Sometimes I delete HTML without realizing that I’m leaving dead CSS that used to style that HTML. Since Tailwind styles are encapsulated in the class on the element that I’m deleting, deleting the HTML also deletes the CSS with it.

## Colors come pre-picked

Tailwind’s [color palette](https://tailwindcss.com/docs/colors) comes fully loaded with a full range of lots of colors. I know it’s lazy to just use the pre-configured colors, but it speeds things up too.

I used to try to avoid using new colors because I knew that I’d have to pick them, and then maybe even pick variations of them. Now, if I want a green color for a confirmation icon, there’s no extra work involved in having multiple shades of green available.

## There’s strong consistency between projects

Every Tailwind project that I have uses the same API, so I don’t have to remember whether I named the class `no-scroll` or `lock-scroll` or `no-scrolling`. The consistency between projects makes it a lot easier to switch between them and make changes without constantly referencing my past naming.

## Responsive styling

Tailwind’s `sm:`/`md:`/etc prefixes make it really, really easy to make things responsive, and it co-locates your mobile styles with your desktop styles. In a big CSS file, I’d often have desktop styles for most of it and then media queries towards the bottom, which put styles for the same elements quite far apart.

Also, even if you create your own custom utility classes, it’s hard to replicate this responsive prefix feature and you have to end up writing custom CSS within media queries anyway.

## Tailwind Typography

Tailwind’s [Typography plugin](https://tailwindcss.com/docs/typography-plugin) is _so good_. I used to just hack around on styles for blog posts until it looked good, and then inevitably I was missing something (like I’d add in a quote and it’d look terrible) so I’d have to add more styles.

Typography has solved it once and for all, and now it feels silly to spend time writing CSS for a blog’s content when I could just use this plugin and tweak it a bit if necessary.

---

I get it — it doesn’t feel like writing real CSS, and there’s a somewhat steep learning curve. But _for me_, it’s made me way faster at styling websites. The muscle memory is super strong, and I’ve found that to be invaluable.
