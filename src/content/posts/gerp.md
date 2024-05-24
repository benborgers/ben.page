---
title: "gerp"
date: 2022-04-27
published: true
unlisted: false
---

We just wrapped up our final project for [](https://benborgers.com/posts/data-structures)[CS 15](https://benborgers.com/posts/data-structures): Data Structures, which was called _gerp_. It’s based on the Linux tool `grep`, and allows searching for a specific word in a folder of text files.

I think this is the project where I learned the most this semester, by far.

Two reasons:

## Architectural Freedom

The assignment gave very little direction as to how to architect your code. The first step was to come up with a design with your partner, and to get it approved by a TA.

Since they gave so little guidance, we had full freedom to think of any possible way to store the data and then search through it again later. We weren’t constrained by matching the design they wanted — the only requirement was that our final program would function exactly the way that theirs did.

This was definitely also one of the most challenging aspects of the projects, since the training wheels were off. But I learned a ton thinking through the different possibilities for how we could architect our program.

In particular, we had to be really constrained with the memory (RAM) that our program consumed. We made liberal use of _pointers,_ a feature that allows for fine-grained memory control but that is famously confusing.

I think I became _much_ better at using pointers because of this project. We had to do deeper stuff with conserving memory than I’ve done before, so my partner and I fumbled our way through using pointers everywhere and I think we’re better for it.

## The Leaderboard

Partway through the project, the TA’s announced that they’d put together an optional leaderboard. If you chose to submit your program to the leaderboard, it’d run some tests and measure your program’s memory usage and speed. Combining those metrics, it’d create a score and rank you against other groups who had submitted their program to the leaderboard.

We had already finished our program by the time the leaderboard came out, so my partner and I excitedly submitted. But we discovered that, embarrassingly, our program was too slow to even rank on the leaderboard.

So the next day, we spent hours tearing into our code and improving it. This was after we were already done and had submitted our code once. But the leaderboard gamified the experience and tricked us into working on our program more.

With a few hours of extra work, we squeezed some extra performance out of our program and got ourselves onto the leaderboard, edging out the provided reference implementation by a bit.

But the leaderboard really tricked us into experimenting even more with our program, and tricked us into learning more about obscure ways to make our program faster.

For example, we found that sometimes using the “worse” option (an over-allocated array) is faster in practice on small datasets than the cleaner and better option ([vectors](https://www.cplusplus.com/reference/vector/vector/)).

Usually, I write code in a way that’s easiest for me. I’d rather things be understandable for future-me, rather than it being as efficient as possible.

But for the leaderboard, I had to cast those instincts aside. The only thing that mattered was how efficient our program was, and we sacrificed solutions that felt better to the human reader in favor of solutions that were a bit faster for the computer.

As a caveat, I think that having a leaderboard on every project would’ve been toxic. I think that it only worked because this was the last project, and because it was optional, so it felt like we could really pour some extra effort into this one. But if every project in this course had been made a competition, I think I would’ve burned myself out.

---

Overall, I think that CS 15’s _gerp_ was a fantastic project. I learned a lot, and most surprisingly: it was a homework assignment that I genuinely enjoyed working on.
