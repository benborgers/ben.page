---
title: "How to get screen width in Expo"
date: 2020-04-23
published: true
unlisted: true
---

The screen width can be retrieved using the `Dimensions` package:

```javascript
import Dimensions from "react-native";

Dimensions.get("window").width;
```
