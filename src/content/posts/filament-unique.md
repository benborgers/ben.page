---
title: How to fix unique() for editing in Laravel Filament
unlisted: true
date: 2022-05-18
---

I created an admin panel using [Laravel Filament](https://filamentphp.com) and used the `unique()` modifier on an input, but I was unable to save subsequent changes after creation because the resource wasn’t unique to itself (another resource with the same value already existed, which was itself).

Filament’s `unique()` method comes with a way of ignoring certain models, which we can use to ignore itself.

That way, we’ll be able to save changes to a model without getting an error saying that a field is not unique.

Update your usage of the `unique()` modifier to be like this:

```diff
Forms\Components\TextInput::make('slug')
-    ->unique();
+    ->unique(ignorable: fn ($record) => $record);
```

Now, the currently-being-edited model will be ignored when checking for uniqueness.
