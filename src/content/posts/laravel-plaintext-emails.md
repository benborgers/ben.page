---
title: "Sending plaintext emails in Laravel without a Mailable"
date: 2021-02-02
unlisted: true
---

Sometimes you just want to send a simple email from within a Laravel controller or somewhere else, without having to create a whole "mailable" class.

In these cases, you can use the `Mail::raw` method:

```php
use Illuminate\Support\Facades\Mail;

Mail::raw('Hello there!', function ($message) {
    $message->from('mail@example.com', 'From Name');
    $message->to('recipient@gmail.com');
    $message->subject('You’ve got mail');
});
```
