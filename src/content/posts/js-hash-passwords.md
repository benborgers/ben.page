---
title: "How to hash passwords in Node.js"
date: 2020-05-08
unlisted: true
---

Hashing passwords before saving them to the database is extremely important for security.

A _hash_ is an algorithm that scrambles up a password in a way that cannot be reversed, but happens the same way each time.

When a user signs up, you should take their password, hash it, and then store the resulting "hash". This means that you never store their actual password in plain text. Later, if you need to check whether the password they provided is correct, you can hash what they send you and compare the outcome with what you saved. If the two hashes are the same, the user provided the same password both times.

The most popular library for hashing passwords in Node.js is [`bcrypt`](https://www.npmjs.com/package/bcrypt). First install the package:

```bash
npm install bcrypt
```

and then include it in Node.js so you can use it:

```javascript
const bcrypt = require("bcrypt");
```

When you first receive the password and want to store it in the database:

```javascript
const SALT_ROUNDS = 10;
// "Salt rounds" controls how long it takes to hash a password.
// Increasing this by 1 doubles the time it takes to hash a password.
// Higher number means more security, but it'll be slower.

const hashedPassword = await bcrypt.hash(realPassword, SALT_ROUNDS);
// Store hashedPassword in your database
// Never store realPassword in case your database gets exposed
```

When checking whether the password you received is the correct one, using the `bcrypt.compare` method:

```javascript
/*
 * providedPassword is what the user claims is their password
 * for example through a login form
 *
 * Retrieve hashedPassword from database.
 */
const passwordIsCorrect = await bcrypt.compare(
  providedPassword,
  hashedPassword
);
// Returns true if they match, false if they don't
```
