---
title: "How to attach a database to a Laravel Vapor deployment"
date: 2020-09-30
published: true
unlisted: true
---

You can attach an Amazon RDS database to a Laravel Vapor deployment, which automatically configures your Laravel app to use that database.

First, [create a database on Vapor](https://docs.vapor.build/1.0/resources/databases.html#creating-databases) using the UI or the CLI.

Then, add it to your `vapor.yml` file for your app:

```yaml
id: 10583
name: my-app
environments:
  production:
    # Add the database like this:
    database: my-database-name
    # More configuration would go here
```

Now, next time you redeploy to Laravel Vapor, your app will have the necessary environment variables to connect to the database you specified.
