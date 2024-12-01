---
title: FileCopy
date: 2024-11-30
---

One of my favorite assignments this semester—of my entire college career, in fact—was a recent one in [CS 117: Internet-scale Distributed Systems](https://www.cs.tufts.edu/comp/117).

It was called **FileCopy**, and the objective was to copy a folder of files from one computer to another. You could design any protocol you wanted, but the copying had to be done over a potentially-faulty network and with a potentially-faulty filesystem.

The filesystem would sometimes incorrectly report the contents of files or cause files to become corrupted. The network would drop packets, rearrange packets, or refuse to deliver them at all.

(It was quite a clever assignment under the hood—you were required to use `NASTYSOCKET` and `NASTYFILE` classes, which simulated random failures.)

It took us a couple weeks and a lot of work, but looking back, FileCopy was perhaps my favorite Computer Science assignment at Tufts so far.

All of the earlier projects I've done in other classes were a bit "fill in the blank": the designer of the project had an architecture that they wanted you to follow, and you ended up with pretty much the same thing that the had designer originally envisioned.

But FileCopy was different. You needed to end up with two programs, the client and the server, but the protocol that they spoke to each other, and how they detected and recovered from mistakes, was entirely up to you. There was a whole lot more _thinking time_ that went into this assignment that previous ones in other classes.

It felt more real, and more risky, than any of the past assignments. But in the end, with a final program in hand, it also felt a whole lot more satisfying to have gotten through it.
