---
title: "How to refresh one Livewire component from another component"
date: 2020-12-20
published: true
unlisted: true
---

Sometimes you want to refresh one Livewire component in response to changes in a separate Livewire component.

For example, some data you've edited and saved in the first component needs to be shown in the second component.

For this, you can use Livewire's events system. First, define the listeners on the Livewire component you want to refresh remotely, so that sending an event called `refreshComponent` will call Livewire's magic `$refresh` method.

```php
protected $listeners = ['refreshComponent' => '$refresh'];
```

Now, in the other component, we just have to send an event called `refreshComponent` to this component.

```php
$this->emitTo('component-to-refresh', 'refreshComponent')
```

This event will be sent to the component called `component-to-refresh`, and `component-to-refresh` will reload its contents.
