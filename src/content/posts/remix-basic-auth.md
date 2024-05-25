---
title: How to do HTTP Basic authentication with Remix
date: 2021-12-29
unlisted: true
---

HTTP Basic authentication is an authentication method that’s built into the browser, that you can use with your [Remix](https://remix.run) apps. Basic authentication often looks like this:

![](/posts/remix-basic-auth/remix-basic-auth.png)

I usually use it for password-protecting sites where I should be the only person seeing it, since Basic authentication doesn’t require building a login form so it’s quick and easy to implement.

To start password-protecting a page in a Remix app, we’ll define a header so that the browser knows that we want to use Basic auth. We’ll use [Remix’s built-in headers API](https://remix.run/docs/en/v1/api/conventions#headers) for this:

```javascript
// app/routes/my-protected-route.jsx

export const headers = () => ({
  "WWW-Authenticate": "Basic",
});
```

Now, we’ll write a function on the page that defines whether someone is authorized to view the page (in other words, if they have the correct username and password combination).

```javascript
// app/routes/my-protected-route.jsx

const isAuthorized = (request) => {
  const header = request.headers.get("Authorization");

  if (!header) return false;

  const base64 = header.replace("Basic ", "");
  const [username, password] = Buffer.from(base64, "base64")
    .toString()
    .split(":");

  return username === process.env.USERNAME && password === process.env.PASSWORD;
};
```

This function takes a standard `Request` as its argument, and returns a boolean saying whether the username and password are correct.

Basic authentication comes in the form of a header called `Authorization`, which is in the form `Basic {credentials}` where `{credentials}` is the username and password, joined by a colon, and base64 encoded.

In this function, we get the `Authorization` header (if it doesn’t exist, the user is definitely not authorized), remove the `Basic` part at the beginning, decode the base64, and split it into the username and password by the colon in between. Then, we check whether the username and password match two environment variables that we’ve set (you could also hardcode these, although it’s better not to include passwords in your code).

Now, using this function, we can implement the loader.

Our loader will check whether the given request is authorized to view the page, and pass that information into our React component. If it isn’t, we’ll also return a `401 Unauthorized` status code so the browser knows to show the login form popup.

If the visitor* is* authorized, we’ll load the data that we’re putting behind a password, and also pass that to the React component. By only loading this data after checking for authorization, we’re making sure that we only send it to the browser if the visitor is properly logged in.

```javascript
// app/routes/my-protected-route.jsx

import { json } from "remix";

export const loader = async ({ request }) => {
  if (!isAuthorized(request)) {
    return json({ authorized: false }, { status: 401 });
  }

  // Load data for password-protected page here.

  return json({
    authorized: true,
    // Include extra data for password-protected page here.
  });
};
```

Now, having loaded the data we need (or not, if the visitor isn’t logged in), we can build the React component for the view:

```jsx
// app/routes/my-protected-route.jsx

import { json, useLoaderData } from "remix";

export default function () {
  const data = useLoaderData();

  if (!data.authorized) {
    return <p>Unauthorized</p>;
  }

  return (
    <div>
      {/* Your logged-in page here, using the
          extra data you loaded in your loader. */}
    </div>
  );
}
```

If the visitor isn’t authorized, we show them a simple message telling them that. Otherwise, we show them the whole page, and make use of the extra password-protected data that we loaded in the loader.

Now, when you visit this route of your Remix app, the browser will prompt you for a username and password. And if the username and password you enter are correct, you’ll see the password-protected page!
