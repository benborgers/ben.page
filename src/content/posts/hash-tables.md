---
title: "Hash Tables [explained for anyone]"
date: 2022-04-16
published: true
unlisted: false
---

In [CS 15](https://benborgers.com/posts/data-structures), we recently learned about a way of storing data called _hash tables_. We’re now working on an assignment that uses them — a search tool for finding a word across thousands of books. I wanted to make an attempt at explaining how hash tables work, without assuming computer science knowledge.

So in programming languages, we have a concept of a list of things. Let’s say I’m trying to store a bunch of users for my app. I could store them all in a list, where each item in the list is a user (maybe with their ID number, email address, birthday, etc).

Let’s say I want to retrieve a user, and I know their ID number — I want user #27. I’d go through the list one-by-one, checking whether each user in the list had ID #27.

But this isn’t very efficient. I have to go through the entire list one-by-one, checking each one. If I’m storing a large number of users, it isn’t efficient to check every single user.

So what if I stored the users in my list in sequential order according to their ID number? The user with ID #1 would be first in my list, the user with ID #2 second, and the user with ID #27 would be twenty-seventh in my list.

Then, if I knew I wanted to retrieve the information belonging to user #27, I’d be able to jump straight to the twenty-seventh spot in my list. That’s a lot faster than going through every user one-by-one and checking for a match! I can immediately jump straight to the user whose information I want.

But what if I wanted to file each user’s information according to their email address, instead of their user ID? After all, I probably have a user’s email address but not their user ID.

This presents a problem: I can’t store `bob@example.com`’s information in the `bob@example.com`th spot in a list.

Enter: _hash functions_. Hash functions are a type of mathematical function that takes any phrase and converts it into a number. They’re very complicated to invent, but people make these hash functions and the rest of us can use them.

The most important part of a hash function is that it **spits out the same number every time we give it the same phrase**. So if I give `bob@example.com` to my hash function and that functions spits out `7673492023`, then `bob@example.com` should _always_ cause the hash function to spit out `7673492023`. Same input, same output.

So now, if I want to store `bob@example.com`’s data, I store it in the `7673492023`th spot in my array. And if I want to retrieve his user data, I give “`bob@example.com`” to the same hash function, get `7673492023` again, and know where to instantly find his user data.

Perfect! One problem though: the hash function spits out large numbers (like `7673492023`), and having a list that long would be wasteful since most of the spots would lie empty.

So instead of using `7673492023`, we set a reasonable size for our list (let’s say 100) and use the mathematical _modulo_ operation. Modulo gives us the remainder when one number is divided by another (so any number modulo 100 is between 0 and 99, since the remainder can’t be 100).

`7673492023` modulo 100 gives us `23`, so we store the user data in the 23rd spot in our list instead — and we end up using less space to store the whole list, since it isn’t ridiculously long (only 100 spots long).

There’s bound to be _collisions_ though. What if the hash function on `bob@example.com` spits out `7673492023`, and the hash function on `sue@example.com` spits out `1300287523`? Two different numbers, but since our list is only 100 long, both numbers modulo by 100 give us `23`. We’ll be trying to store two things in spot `23`.

The solution: make every spot in the list another list! So at spot `23` we store a sub-list that contains `bob@example.com`’s data and `sue@example.com`’s data. When we want to find either one’s data, we run their email address through the hash function, modulo by 100, jump to spot `23`, and then go through the sub-list at spot `23` to find the correct user’s data.

However, there’s a formula for calculating whether your list is too short for the data it contains and more spots need to be added (in this example, expanding above 100 spots).

If you expand your list as necessary, you’ll have minimal collisions, which will keep each spot in the list containing only ~1 user’s data — therefore keeping things efficient, since you can jump straight to a spot in the list and not have a long sub-list to go through at that spot.
