---
title: 'How to fix Expo "the app name you entered is already being used"'
date: 2020-03-22
published: true
unlisted: true
---

So you run `expo upload:ios` and get this error:

> The app name you entered is already being used. If you have trademark rights to this name and would like it released for your use, submit a claim.

![](https://user-images.githubusercontent.com/30215449/105642222-70f16a00-5e56-11eb-84df-54ee9405df32.png)

What's going on here is that the Apple App Store doesn't allow multiple apps with the same name.

You need to upload the app again to App Store Connect, but using a different name (this is why you see a lot of apps called "Shine: Calm Anxiety & Stress", instead of "Shine").

You don't need to change the app's name in your `app.json` file though. This means that your app's name on people's home screens will stay the same as you defined in `app.json`.

To change only the name of the app in the App Store, and not on the home screen, run this command instead:

```bash
expo upload:ios --app-name "My App - Unique Name"
```
