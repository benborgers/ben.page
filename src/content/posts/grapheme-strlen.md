---
title: How to count emojis only as one character with PHP strlen
unlisted: true
date: 2022-05-07
---

If you’re using PHP’s `strlen` or `mb_strlen` functions, some emojis will still be counted as multiple characters because of the way that unicode encodes emojis.

Instead, you can use the `grapheme_strlen` function, which counts all emojis only as one character. It counts a string’s length in “grapheme” units, which are “the smallest functional unit of a writing system.”

PHP documentation for `grapheme_strlen` can be found [here](https://www.php.net/manual/en/function.grapheme-strlen.php).
