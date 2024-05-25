---
title: "How to set a Return-Path header for Laravel mail"
date: 2021-01-27
unlisted: true
---

The `Return-Path` header in an email defines which email address should receive bounces and complaints (such as getting marked as spam). It's useful to set this header so you can monitor how many complaints you're getting, and which emails are bouncing.

You can set this header in a Laravel Mailable using the `withSwiftMessage()` method:

```php
public function build()
{
    $this->withSwiftMessage(function ($message) {
        $message->getHeaders()
                ->addTextHeader('Return-Path', 'email@example.com');
    });

    return $this
        ->view('some.view');
        // the rest of the normal mailable methods for from, subject, etc
}
```

Now, this email will have the `Return-Path` header defined, and receiving email clients will send a notification email to that address if the email bounces or is marked as spam.
