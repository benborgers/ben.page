---
title: "How to get the device's IP address with Expo"
date: 2020-04-26
published: true
unlisted: true
---

First, install the `expo-network` package:

```bash
expo install expo-network
```

Then, import the package in the file you'd like to use it:

```javascript
import * as Network from "expo-network";
```

Now, you can use the `Network` object to get the IP address:

```javascript
const ip = await Network.getIpAddressAsync();
```
