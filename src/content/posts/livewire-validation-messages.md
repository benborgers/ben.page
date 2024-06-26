---
title: "How to customize validation messages in Livewire"
date: 2020-11-15
unlisted: true
---

Livewire allows you to write validation in a protected `$rules` property that is used whenever you call `$this->validate()` or `$this->validateOnly('propertyName')`.

If you want to show a different error message for one of the validation rules, you can use the protected `$messages` property to do it.

For example, say I have this Livewire Blade view, with a simple input and the possibility of showing an error message for that input's value:

```html
<div>
  <input wire:model="text" />

  @error('text')
  <p>{{ $message }}</p>
  @enderror
</div>
```

I could leverage the `$messages` property like this to override the default validation error for the text minimum length rule:

```php
<?php

use Livewire\Component;

class LivewireComponent extends Component
{
    public $text = '';

    protected $rules = [
        'text' => 'required|min:3'
    ];

    protected $messages = [
        'text.min' => 'Keep typing...'
    ];

    public function updated($property)
    {
        // Every time a property changes
        // (only `text` for now), validate it
        $this->validateOnly($property);
    }

    public function render()
    {
        return view('livewire-component');
    }
}
```
