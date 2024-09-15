---
title: AI is an impediment to learning web development
date: 2024-07-21
unlisted: false
---

Some thoughts on AI and LLMs, based on being Head of Engineering for [JumboCode](/jumbocode), a club of 180 students at Tufts University that builds software for non-profits.

For context, almost all of our developers are learning web development (TypeScript, React, etc) from scratch, and have little prior experience with programming.

## Use of LLMs in JumboCode is ubiquitous

LLMs excel at writing code for web development — you can describe a frontend component that you want and get a decent React component back.

I didn’t spend the year hawk-eyeing the teams’ repositories, but when I did poke my head in, I found substantial portions that _looked_ LLM-written — that is to say, overly-commented, dissonant, and, at times, horrifying.

### _“horrifying?”_

The starkest example I came across was a Next.js project that had:

- A page written in HTML and vanilla JavaScript, loaded from the `public/` directory, completely outside of the Next.js + React system.
- Vanilla JavaScript loaded in via filesystem APIs and executed via `dangerouslySetInnerHTML`.
- API calls from one server-side API endpoint to another public API endpoint on `localhost:3000` (instead of just importing a function and calling it directly).

These don’t seem to me like classic beginner mistakes — these are _fundamental misunderstandings_ of the tools and the web platform.

LLMs will obediently provide the solutions you ask for. If you’re missing fundamental understanding, you won’t be able to spot when your questions have gone off the rails.

## Use of LLMs hinders learning of web development.

LLMs are a shortcut to get assignments done. In the process, however, you learn close to nothing.

It’s cliche, but struggling _is_ learning. The way you learn is that you try different paths, piece bits of information together, and eventually create a mental model.

LLMs don’t require you to form a mental model and allow you to skip to the end result, but in turn you won’t _have_ a mental model when you actually need one (for example, when you need to verify that your LLM has architected the code in a reasonable way).

LLMs are useful if you already have a good mental model and understanding of a subject. However, I believe that they are destructive when learning something from 0 to 1.

## You should probably just ask a person.

You’ll learn a lot more by asking a real human, like your tech lead or a member of JumboCode’s board.

They can explain something in the exact context that you need it. And, in my experience at least, humans are still better than LLMs at providing concise, proper-level explanations.

## You’ll probably still use LLMs instead of asking a person.

Asking people is hard work and requires asking questions (scary). Many folks will still ask LLMs to write large swaths of code.

This is likely worse for your learning, but I can’t stop you (and I might be wrong).

But in my opinion, if you don’t have the time to do JumboCode without deferring whole tasks to LLMs, you’re probably better off not doing JumboCode. (And no hard feelings! I just don’t think that going through the motions via LLM-generated deliverables is worth the time.)

---

## Appendix: Ben, do _you_ use LLMs?

Yes, I do! For example, I write code in [Cursor](https://cursor.so), the self-proclaimed “AI Code Editor.”

But I’m honestly glad that I learned the fundamentals of web development before LLMs became ubiquitous. I don’t know if I would have had the will and motivation to properly learn the foundations otherwise — but doing so has paid off immensely for me.

If I had used LLMs to produce work when I was first learning web development, I would not have learned web development.
