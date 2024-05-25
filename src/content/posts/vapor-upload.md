---
title: "How to allow uploading files to Laravel Vapor without User"
date: 2023-01-09
unlisted: true
---

The Laravel Vapor docs [tell you](https://docs.vapor.build/1.0/resources/storage.html#authorization) to create a `UserPolicy` to authorize file uploads to S3 using the `laravel-vapor` npm package. But what if you want logged-out users to be able to upload files too?

The Vapor package checks against the `uploadFile` method in `UserPolicy`, but you can override that by creating an authorization gate called `uploadFile`.

To do so, add this gate to `AuthServiceProvider.php`:

```php
// AuthServiceProvider.php

public function boot()
{
	$this->registerPolicies();

	Gate::define('uploadFiles', function ($user = null) {
		return true;
	});
}
```

The argument `$user` defaulting to `null` indicates that this gate can be run even when there is no logged-in user. And since it always returns `true`, anyone can upload files, even without being logged in to your Laravel app.
