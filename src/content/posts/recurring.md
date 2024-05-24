---
title: "How Recurring Tasks in War Room Work"
date: 2022-01-25
published: true
unlisted: false
---

I just built a feature into [War Room](https://benborgers.com/posts/war-room) that allows people to define recurring tasks, which are re-added to their to-do list every day. For example, a task could be automatically added to your to-do list at midnight on weekdays.

![](/posts/recurring/image-8.png)

War Room’s interface for creating recurring tasks.

Building a recurring tasks feature is an interesting challenge. I wanted to explain, in broad strokes, the solution I chose:

## The first instinct

My first instinct would have been to save this data directly into the database: the task, its repeating time, and which days are enabled.

Then, I could run a piece of code every hour that pulls out all the tasks that match the current hour and day, and then add those to people’s to-do lists.

However, this solution presents a couple problems:

1.  The code might not be executed at _exactly_ the hour; instead, there’s a chance it gets executed at 3:01am (for example). In this case, scheduled tasks for 3:00am would never be executed, since my code never executed at exactly 3:00am.
    1. However, you might already see a solution: what if we just look for tasks that are scheduled for, say, the last round hour? So when the code executes anytime between 3am and 3:59am, we look for tasks that are meant to be executed at 3am.
    2. However, this solution still has a resilience problem:
2.  What if my server has issues, and goes down for an extended period of time? Let’s say War Room’s servers go down at 1am and aren’t fixed until I wake up and notice at 8am. Ideally, I’d like the 3am recurring tasks to still be added — late is better than never, and the users might not even notice that the tasks got added late.
    1. However, with this solution, if my server comes back online at 8am, all the tasks that should have been added while it was down are lost.

## The solution I went with

Firstly, I decided to store the task’s schedule in what’s called **cron** format. It’s a clever way of storing schedule information using five phrases with spaces in between:

```
*    *    *    *    *
-    -    -    -    -
|    |    |    |    |
|    |    |    |    |
|    |    |    |    +----- day of week, 0 (Sun) - 6 (Sat)
|    |    |    +---------- month, 1 - 12
|    |    +--------------- day of month, 1 - 31
|    +-------------------- hour, 0 - 23
+------------------------- min, 0 - 59
```

Does that kinda make sense?

I store the recurring task’s options as a cron statement, so “every weekday at 4am” is stored in War Room’s database as:

```
0 4 * * 1,2,3,4,5
```

Then, when you first create or edit a recurring task, I calculate the “next execution time”. I parse this cron statement and figure out when the next time is that this statement comes true — the next time that this task should be added to your to-do list.

Then, I execute a bit of code every hour that grabs all the recurring tasks whose “next execution time” is in the past. Ideally, that’s in the recent past (for example, the code executes at 3:01am and we’re grabbing tasks that were supposed to be added at 3:00am), but this will also catch the problem where the server goes offline. A task that should’ve been added at 3am will be caught when the server comes back online at 8am, because its execution time (3am) is still in the past.

After adding the task to the correct user’s to-do list, I re-calculate the next execution time. This way, it won’t be added again next hour, since the next execution time is pushed into the future.

## Other fun bits

There’s some other fun challenges about building this feature:

1.  The time that the task repeats is stored in UTC, but displayed on your end in your local time zone (that’s why the list starts at 7pm in Eastern time zones — that’s midnight UTC).
2.  War Room keeps track of your most recent time zone, so that when you type `$date` in a recurring task it can be replaced with the correct current date depending on which time zone you’re in.
3.  Recurring tasks are only executed for users that’ve been active on War Room in the past week, so I don’t fill the database with thousands of tasks for someone who doesn’t use the app anymore.
