---
title: How to send email through Amazon SES with SMTP
date: 2021-04-24
unlisted: true
---

First, you'll need to create your SMTP credentials for AWS Simple Email Service (SES):

- On the old SES console, there's an **SMTP Settings** link on the left side.
- On the new SES console, the link is under **Account dashboard** on the left sidebar.

Go through the steps to create new SMTP credentials, and copy them down somewhere.

The fully formed SMTP connection string looks like this:

```
smtp://username:password@email-smtp.us-east-1.amazonaws.com:587
```

There are three variables that you should replace in this string:

- `username` and `password`, which are the SMTP credentials you copied down earlier.
- `us-east-1`, which you should replace with the region that you're sending emails from ([this page has a list of the endpoints](https://docs.aws.amazon.com/general/latest/gr/ses.html)).
