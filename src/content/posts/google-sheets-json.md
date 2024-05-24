---
title: "How to get a Google Sheet as JSON"
date: 2021-10-14
published: true
unlisted: true
---

Google Sheets can be a great place to store content for a website, since it's structured and easy to update (especially for non-coders).

Google used to have an obscure way of getting an API for reading a Google Sheet, but it stopped working in August 2021 when they deprecated the Sheets API v3.

However, **I’ve built a free API that you can use for this**, which doesn’t require authentication or complicated permissions.

[opensheet](https://github.com/benborgers/opensheet) is an open source project I built for fetching a Google Sheet as live JSON data.

## Preparing Your Google Sheet

1. The first row of your spreadsheet should be headers, and the rest is data under those headers ([see example](https://docs.google.com/spreadsheets/d/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U/edit)).
2. Share the spreadsheet so anyone can see it (“Share” button in top right corner > “Anyone on the internet with this link can view”).

## Using the API

The URL format for using the API is:

```
https://opensheet.elk.sh/spreadsheet_id/tab_name
```

Replace `spreadsheet_id` with the ID in the URL of the Google Sheet. Here’s the part you should copy and paste:

![](/posts/google-sheets-json/google-sheets-json-url.png)

Next, replace `tab_name` with the name of the tab that you to want to get the values from. You can find and rename the tabs at the bottom of Google Sheets:

![](/posts/google-sheets-json/google-sheets-json-sheet-name.png)

And that’s it! You can [click here](https://opensheet.elk.sh/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U/Test+Sheet) to see an example API response.

The data gets returned as an array of objects, where the key is the name of the column and the value is a cell’s value.

## Example using JavaScript

This example uses [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), a modern built-in way to make HTTP requests with JavaScript.

```js
fetch(
  "https://opensheet.elk.sh/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U/Test+Sheet"
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {
      // Do something with each row here.
    });
  });
```

## Wrap-up

You can check out the code for [opensheet](https://github.com/benborgers/opensheet) here, but you’re welcome to use my hosted instance at `opensheet.elk.sh`.

You can also check out [the documentation](https://opensheet.elk.sh) for some more information, including how to fetch sheets by their number/index instead of their name.

If you have any questions about how to use this little utility API, please reach out (benborgers@hey.com)! I’d love to help.

Also, if you’re not a programmer and you’d like help integrating Google Sheets, send me a quick message (again, benborgers@hey.com) and I can help out!
