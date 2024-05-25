---
title: "How to get current URL in Livewire component"
date: 2021-01-01
unlisted: true
---

In Laravel, you can get the current URL by running `url()->current()`. However, Livewire kind of breaks this — after subsequent Livewire requests, the "current URL" will be equal to the internal Livewire URL, not the actual page's URL.

An easy fix for this is to save the current URL when the component first loads, using the `mount` method. Here's a piece of the Livewire component:

```php
public $currentUrl;

public function mount()
{
    $this->currentUrl = url()->current();
}
```

Now, you can use `$currentUrl` in your Livewire component instead of `url()->current()`, and it will work as expected.
