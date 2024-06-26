---
title: "How to get the current app version in Expo"
date: 2020-04-26
unlisted: true
---

You often want to show the version number of your app to the user.

In an Expo (React Native) app, you can do this using the `expo-constants` package, provided by Expo.

First, install the package:

```bash
expo install expo-constants
```

Then, add the package to the file where you want to get the version number:

```javascript
import Constants from "expo-constants";
```

Now, you can access `Constants.manifest`, which is the current "manifest" (`app.json` file) of your app. The version number is available like this:

```javascript
const version = Constants.manifest.version;
```
