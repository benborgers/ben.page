---
title: "Locked Posts on Ghost"
date: 2022-02-02
unlisted: false
---

Last night I built a feature on [Ian’s blog](https://tunnington.com) so that he can lock certain posts behind a passphrase, so more private posts aren’t publicly accessible on the internet.

I wanted to do a quick write-up of how the feature works, mostly for my own future reference but also perhaps for your curiosity.

[Ghost](https://ghost.org), the free software platform that powers this blog and Ian’s, has the concept of Memberships. People can sign up to your site (and optionally be required to pay a subscription), and then they unlock extra posts.

That’s the backbone of how this feature works: the specific posts that Ian wants to lock are set to “Members Only”, so they won’t be viewable unless you’re logged in as a member.

Ghost has default text that it shows to visitors who aren’t members yet when they try to view a members-only post (it encourages them to become a member). But we can override that text with our own (specifically by editing the `partials/content-cta.hbs` file in the theme).

I edited it to contain a form for unlocking the post:

![](/posts/locked/50567b5964d543ab79e0b8346c7e0573588f93bdce1101f8172f21fa67c3465b.png)

What a visitor sees when clicking on a locked blog post.

Now the fun part: checking the passphrase.

When you submit this form, it sends the passphrase you entered to a separate server I control, and compares the passphrase. If it’s incorrect, it redirects you back to the blog post and adds `?wrong` to the end of the URL.

This tells the page to add “Wrong passphrase, please try again” under the form.

![](/posts/locked/image-4.png)

Incorrect password.

If the passphrase is correct, we need to get you logged into the site. But instead of using one account per person (as Ghost intends), I created _one_ member account on Ian’s blog. This one account is the only account that can view all of these locked posts, since I turned off new signups.

When the correct passphrase is submitted, my server contacts Ghost and gets a temporary URL that logs you in as my own user (this uses the [Ghost Admin API](https://ghost.org/docs/admin-api/#user-authentication); the endpoint isn’t documented but you can find it in dev tools when clicking “impersonate” on a user).

This means that anyone who has the correct passphrase is redirected to a URL that will log them in as my one member account on Ian’s blog. It’s not _their_ account; it’s a shared account that everybody uses. However, this all happens in the background, so the user doesn’t even really know that they’ve logged into an account.

I also add a `redirect` query parameter to the secure URL for logging them in, and then Ian’s blog has JavaScript that knows to send them back to the blog post they were trying to view instead of the homepage.

Lastly, when you’re logged in as my one user, I add a bit of text to the top of the homepage:

![](/posts/locked/image-5.png)

This gives confirmation that you’ve unlocked the posts (which, behind the scenes, means having logged in to the shared user account), and gives you a button to “re-lock” the posts (aka log out). That button is just a `<button>` with the `data-members-signout` attribute, and Ghost handles the rest.

It’s a bit of a hack to get the experience we want, but not bad at all. All in all, I’m very happy with the solution.
