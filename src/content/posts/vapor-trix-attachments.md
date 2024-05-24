---
title: "Handling Trix file attachments on Laravel Vapor"
date: 2020-06-28
published: true
unlisted: true
---

After a couple hours of work, I've finally gotten file attachments with Basecamp's Trix editor to work on Laravel Vapor.

To start, let's assume you have a basic Trix form set up, which mirrors its contents into an `input`. Getting to this point is fairly straightforward with the [Trix docs](https://github.com/basecamp/trix).

```html
<input type="hidden" name="body" id="body" />
<trix-editor input="body"></trix-editor>
```

When the form with this input is submitted, I can grab the HTML in my Laravel controller like this:

```php
$body = request('body');
```

## The plan

With Laravel Vapor, you upload your files to Amazon S3 from the client-side. They go into a `tmp/` folder, where files are cleared when they're more than 24 hours old.

Once you're sure a file in the `tmp/` folder should be kept (i.e. the user really submitted the form), you copy it out of the `tmp/` folder to keep it around permanently.

We want to upload attachments to the `tmp/` folder in S3 as soon as they're dragged into the Trix editor, and keep track of which attachments are still in the Trix document. If the attachment is removed from Trix before the form is submitted, we don't want to copy that attachment out of `tmp/`.

## Setup

There's some setup required to make sure this works when you develop locally.

## Creating a bucket

First, [attach a storage bucket](https://docs.vapor.build/1.0/resources/storage.html) in your `vapor.yml` file:

```yaml
# Abbreviated for clarity

environments:
  production:
    storage: my-bucket
```

Then, deploy your project to Vapor. This will automatically create a bucket in S3 called `my-bucket`, which you can inspect in the S3 Console of your AWS account.

## Allowing users to upload to the bucket

Per the [Laravel Vapor docs](https://docs.vapor.build/1.0/resources/storage.html#authorization), we need to create a policy that allows users to upload files to the bucket. Run this command to create the policy:

```bash
php artisan make:policy UserPolicy --model=User
```

And then add a function to the newly created policy file that allows any user to upload files:

```php
public function uploadFiles(User $user)
{
  return true;
}
```

## Local access to the bucket

In order to access this bucket from your local environment too, modify or add these values in your `.env` file:

```
FILESYSTEM_DRIVER=s3

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=my-bucket
```

You'll need to generate a set of IAM credentials for AWS, so you can access the S3 bucket locally. When developing locally, Vapor uploads files to the bucket specified under `AWS_BUCKET` using the IAM access keys provided. To keep things simple, we'll upload to the same bucket that we'll use in production (the one we created in `vapor.yml`).

## Making the bucket's contents public

You'll also need to open your S3 bucket up to public read access. This is so that Trix can display temporary files that are dragged in, and so that you can show the persisted files later (after they're copied out of `tmp/`).

Log in to the [S3 Console](https://s3.console.aws.amazon.com/), and select the bucket you just created. Go to the **Permissions** tab, then **Bucket Policy**. Paste in the following policy, replacing "`my-bucket`" with your bucket's name:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```

Keep in mind that this makes every file in the bucket public (that is, if someone is given the randomly generated filename).

## Installing dependencies

You'll need to install Vapor's javascript package to upload files from the frontend:

```bash
npm install laravel-vapor
```

And you'll need to install a PHP dependency for working with S3:

```bash
composer require league/flysystem-aws-s3-v3
```

## Making the frontend work

To start, let's add an extra input to our `<form>`. This input will keep track of which attachments are currently in the Trix editor, which we'll need to copy into permanent storage once the form is submitted.

```bash
<input type="hidden" name="trix_files" value="[]" />
```

_Notice that the value is an empty array if no attachments are ever added._

Here's all the client-side javascript that makes uploading files work. I'll explain it below.

```javascript
window.Vapor = require("laravel-vapor");

document.addEventListener("trix-attachment-add", (event) => {
  if (event.attachment.file) {
    const attachment = event.attachment;

    Vapor.store(attachment.file, {
      progress: (amount) => attachment.setUploadProgress(amount * 100),
    }).then((response) => {
      attachment.setAttributes({
        key: response.key,
        url: response.url.split("?")[0],
      });

      updateTrixFiles(event);
    });
  }
});

const updateTrixFiles = (event) => {
  const allAttachments = event.attachment.attachmentManager.managedAttachments;
  const keys = Object.keys(allAttachments).map(
    (id) => allAttachments[id].attachment.attributes.values.key
  );

  const input = document.querySelector('input[name="trix_files"]');
  input.value = JSON.stringify(keys);
};

document.addEventListener("trix-attachment-remove", updateTrixFiles);
```

You'll see that this utilizes the `laravel-vapor` npm package we installed earlier.

When there's a new attachment (event `trix-attachment-add`), we store the file (`attachment.file`) and report its upload progress to the Trix UI.

After it's uploaded, we give Trix its "key" (where the attachment is stored in the bucket, like `tmp/random-filename`) and the URL that Trix should use to show it in the editor (the URL provided by Vapor has a bunch of query strings that interfere, so we remove those first).

Then, once the attachment's been uploaded, we check which files are currently in the Trix document. The `updateTrixFiles` function uses Trix's attachment manager to find the `key` of each attachment (which we provided earlier using `attachment.setAttributes`). It then populates the `trix_files` input, so the backend will know which files need to be persisted.

When an attachment is removed from the Trix editor (event `trix-attachment-remove`), we make sure to update the `trix_files` hidden input once again, to make sure we have the most up-to-date list of attachments that are still in the editor.

## Making the backend work

When this form is submitted, we have two pieces of data we need to worry about:

- `body` contains the Trix HTML
- `trix_files` includes the list of temporary files in S3 we now need to copy into permanent S3 storage (since remember, `tmp/` gets erased after 24 hours)

To persist the files in S3, we use the `Storage` facade in our controller:

```php
use Illuminate\Support\Facades\Storage;

$files = json_decode(request('trix_files'));

foreach($files as $path) {
	Storage::copy($path, str_replace('tmp/', '', $path);
}
```

Now, those files are copied out of `tmp/` into the root folder in S3, where they won't be deleted after 24 hours.

Lastly, we need to deal with the fact that the Trix HTML (submitted to the controller as `body`) still uses the S3 URLs with `tmp/` in them (we provided the temporary URL to `attachment.setAttributes` on the frontend because the permanent URL didn't exist yet).

To fix this, we can find and replace using a regex:

```php
$body = preg_replace('/tmp\//', '', request('body'));
```

Now, the images in the HTML output point to the non-temporary copy of the attachment in S3.

```
Before replacement: https://my-bucket.s3.amazonaws.com/tmp/random-filename
 After replacement: https://my-bucket.s3.amazonaws.com/random-filename
```
