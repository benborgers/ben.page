---
title: How to use Shopify’s Sortable library with Livewire
date: 2021-09-16
unlisted: true
---

Shopify makes a package called Draggable ([`@shopify/draggable`](https://github.com/Shopify/draggable)), which contains a package called [Sortable](https://github.com/Shopify/draggable/tree/master/src/Sortable) which allows you to create a list of elements where you can drag-and-drop to reorder elements in that list.

Draggable is quite easy to integrate with [Livewire](https://laravel-livewire.com) and Laravel.

Let's say our Livewire component has a list of items, and we want to be able to reorder this list and then save the new order. Here's the Livewire Blade component:

```html
<div class="sortable">
  @foreach($items as $item)
  <div id="{{ $item->id }}">{{ $item->name }}</div>
  @endforeach
</div>
```

I've created a wrapping div with a class of `sortable`, and then looped through an array of items (which I called `$items` in this example) to create the child elements. I've given each child div inside the loop a unique ID, so that after we reorder the list we know which div is which.

At the **end** of our component (so this code runs after the HTML is evaluated), I'll load the Sortable script:

```html
<script src="https://unpkg.com/@shopify/draggable@latest/lib/sortable.js"></script>
```

Then underneath that, I'll add my own script tag where we can write a bit of code to make the reordering work.

```html
<script>
  const sortable = new Sortable.default(
    document.querySelectorAll(".sortable"),
    {
      draggable: ".sortable > div",
    }
  );
</script>
```

This makes all containers with the class `.sortable` (we only have one in this example) a reorderable list, and also defines that the "draggable" items inside of it are divs that are direct children of `.sortable` (that's what the CSS selector `>` means).

Now, if you refresh the page, you should be able to drag around the items inside of `.sortable`! But we still need a bit more code so Livewire can save the new order after the list has been rearranged.

Continuing the same script tag as above, add:

```html
<script>
  const sortable = ... // stuff from above

  sortable.on('sortable:stop', () => {
      setTimeout(() => {
          @this.reorder(
              Array.from(document.querySelectorAll('.sortable > div'))
                  .map(el => el.id)
          )
      }, 0)
  })
</script>
```

This registers some code that should run when the `sortable:stop` event is fired — that tells us that the user has let go of whatever they were dragging, so they've stopped sorting.

Then, it waits for 0 milliseconds. This is a hack that allows the browser to "catch its breath" and put the newly moved elements into place, before we try to record their new order.

The `@this.reorder(...)` code above executes a function in the Livewire PHP component (on the backend) that I've named `reorder`. The name is up to you, but in my component it looks a little like this:

```php
// file: SomeLivewireComponent.php

public function reorder($itemIds)
{
    //
}
```

The JavaScript takes all the sortable items on the page, turns them into an array, and then extracts their ID's (which we assigned in the HTML earlier). Then, it sends those ID's in their new order to the `reorder()` PHP function.

What you do within that `reorder()` function is up to you, but you have the item ID's in their new order. You can save the new order to the database, and then display them on the page in that new order in the future.

And now you've got drag-and-drop reordering implemented in your Livewire component!
