---
title: How to send NextAuth.js emails with Amazon SES
date: 2021-04-23
unlisted: true
---

[NextAuth.js](https://next-auth.js.org) wants you to use an SMTP connection string when using their ["Email" authentication provider](https://next-auth.js.org/providers/email).

It took me a while to figure out how to get an SMTP connection string for Amazon Simple Email Service, but once I did I wrote this quick guide: [How to send email through Amazon SES with SMTP](/ses-smtp).

Follow that guide to set up NextAuth.js like this:

```javascript
providers: [
  Providers.Email({
    server: "smtp://username:password@email-smtp.us-east-1.amazonaws.com:587",
    from: "system@example.com", // A domain you've set up in Amazon SES' console
  }),
];
```
