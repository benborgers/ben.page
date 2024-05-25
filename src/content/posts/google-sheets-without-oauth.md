---
title: "How to read a Google Sheet without oauth"
date: 2022-03-17
unlisted: true
---

Reading data from a Google Sheet usually requires going through the Google Sheets API, which requires oauth or an authentication token, and your own server.

However, I’ve built an abstraction layer over the Google Sheets API that allows you to read data from a Google Sheet without needing your own server or oauth. The project is called [opensheet](https://github.com/benborgers/opensheet), and I host it for free for you to use.

To use it, you need a Google Sheet that’s formatted with the first row being headers for the columns. [Here’s an example spreadsheet.](https://docs.google.com/spreadsheets/d/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U)

Next, share the spreadsheet so anyone can see it (via the “Share” button → “Anyone on the internet with this link can view”).

The URL format for the API is:

```
https://opensheet.elk.sh/spreadsheet_id/sheet_name
```

The `spreadsheet_id` is the long random ID in the URL of your Google Sheet, and the `sheet_name` is the name of the tab at the bottom of the screen.

For example, for [the example spreadsheet](https://docs.google.com/spreadsheets/d/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U) from before, I could load its data using this API endpoint:

```
https://opensheet.elk.sh/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U/Test+Sheet
```

You can make the `GET` request to this URL using any language or framework you’d like. Here’s an example in JavaScript:

```javascript
fetch(
  "https://opensheet.elk.sh/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U/Test+Sheet"
)
  .then((res) => res.json())
  .then((rows) => {
    rows.forEach((row) => {
      // Do something with each spreadsheet row.
      console.log(row);
    });
  });
```

And that’s it! You can check out [the documentation for opensheet](https://github.com/benborgers/opensheet#readme) for a bit more information, but this is all you need to easily get API data from a Google Sheet without setting up oauth or other complicated authentication.
