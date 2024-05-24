---
title: "How to log in to a Laravel Forge database with TablePlus"
date: 2022-02-23
published: true
unlisted: true
---

I recently started working with [Laravel Forge](https://forge.laravel.com), and wanted to connect to a production database from my local computer, using [TablePlus](https://tableplus.com/).

It took a bit to figure out where to put which passwords, so I thought I’d write a blog post about it.

First, you’ll want to have your computer’s SSH keys uploaded to Forge, so your computer can log into the server that Forge created.

If you haven’t generated SSH keys on your computer, you can [follow these instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Now, you’ll want to copy and paste your _public_ SSH key. On my Mac, I did this by running this command:

```bash
cat ~/.ssh/id_rsa.pub
```

The `cat` command shows you what’s inside a file, and I know my default SSH key is stored in the `~/.ssh` folder of my computer, and the public key is named `id_rsa.pub`.

After running that `cat` command, I get an output like this:

```
ssh-rsa AAAAB3NzvC1yc2EAAAADAQABAAABgQCghwKGzDYZaud0OmvvouKI3hT+QrYkv4VWjfRkrXBjbnTNIpVevVdva95YVW6YWLfzdVrK5IhTW8nTWHYGk7/dZ/kHWI3CzB25dkxD5RMRrwlA+fBJgWR8Cg1frmq16skc42LhRVnVymY14kxhyzia695DFde8a7jBp1WBXnA9YgipADC0ax9N0ONBognY+axvEx8vdOWzyvkdVRBaCV9pU+aepvC537D3J7ebXsKbFHtzVvcWkrX5/ZX3qMnBF2EfbfKcsqCOdx7+jhVDXamxeBQpkMevUx9EQzFlV9ST3gvzjr7ATeTST2TgIhY+EBlPa+RcGOqd62574cXGuzCvZ9x1smEIkN3V6H/Jdms5W8MXd9r2TgxsLoZekABoRVwrJcFF+A968tJRtAakr3aJz1G2+20fzkcgalPFX6W8riE9CKCmPu68apHvvja/uBVs0L8vR9XTPu2jz2gR2Ph+StEBvurWUpbRxI2DJvVa0QRfz4gzxRRXR5cskzcLIE= ben@Bens-MacBook-Pro.local
```

I copied that public key and went to Laravel Forge’s **Account Settings > SSH Keys** and pasted it in. Then, I clicked the button to have this SSH key uploaded to my servers.

What this allows you to do is to run `ssh forge@<your_server_ip>` from your computer’s terminal, and to be authorized to log into your server. This also enables you to connect to the database that’s _on_ your server.

To see your Forge-created database in TablePlus, open your server in Forge’s appp and click Database in the sidebar. Then, copy the **Database Connection URL** they provide, and paste it in a new tab.

![](/posts/forge-tableplus/image-17.png)

When you visit that URL, it’ll ask if you want to open TablePlus. Allow it to open TablePlus.

TablePlus will first ask you for your SSH password, which you might have set up when you created the SSH key on your laptop (or left blank for no password). Enter that in.

Then TablePlus will tell you **access denied**. That’s fine though! We have the credentials to access the server (through the SSH key), but not the password to access the database within the server.

Click “edit connection” in the TablePlus popup, and find the email that Forge sent you when your server was first created (subject: “Forge: server (Your Server Name) provisioned”). That email contains your **Database Password** at the bottom. Paste that password into the upper **Password** field in TablePlus:

![](/posts/forge-tableplus/image-19.png)

Where to paste the database password that Forge emailed you when your server was provisioned.

Try testing the connection (hopefully everything will go green to indicate that the credentials work), and save it.

_If testing the connection didn’t work because the SSH key doesn’t seem to be working, you might have to click **Import a private key** at the bottom of the edit screen and manually point TablePlus towards your secret `~/.ssh/id_rsa` file._

Now, you have the Forge database set up in TablePlus! You can use TablePlus on your computer to view and edit your production database remotely.
