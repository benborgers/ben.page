---
title: How to natively inline email CSS with Laravel
unlisted: true
date: 2024-06-16
---

There's a hack for inlining CSS in Laravel emails _without_ installing any packages: overriding the markdown theme.

(Inlining means turning a stylesheet into `style=""` attributes on every HTML element, which is better for compatibility with some email clients.)

Laravel has built-in inlining for CSS that's written as a theme for markdown emails. Since HTML is valid markdown, you can write HTML emails and call them markdown.

First, make sure you're rendering the email template as `markdown` in your Mailable:

```php
public function content(): Content
{
    return new Content(markdown: 'path.to.view');
}
```

Now, create a CSS file at this file path, and it'll be automatically applied and inlined into the HTML email:

```
resources/views/vendor/mail/html/themes/default.css
```

If you have multiple emails styled differently, you can wrap the entire email in a class and scope your CSS to that class.

It's hacky, but avoids using any external packages!
