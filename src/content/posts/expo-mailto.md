---
title: "How to open up the email composer with Expo"
date: 2020-05-03
published: true
unlisted: true
---

_Note: this won't work properly when testing on iOS Simulators since you can't sign into a mail account on the simulator._

Install the `expo-mail-composer` package to your Expo project:

```bash
expo install expo-mail-composer
```

Now, you can import and use the module. For example:

```javascript
import * as MailComposer from "expo-mail-composer";

// Opens prefilled email
MailComposer.composeAsync({
  recipients: [], // array of email addresses
  subject: "",
  body: "",
});
```
