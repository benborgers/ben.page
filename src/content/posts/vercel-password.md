---
title: "How to password-protect pages on Vercel for free"
date: 2022-12-24
published: true
unlisted: true
---

[Vercel](https://vercel.com) offers the ability to put a website behind a password, but that’s only possible on paid Vercel plans.

Recently, I figured out a way to do it for free using Vercel’s [Edge Middleware](https://vercel.com/docs/concepts/functions/edge-middleware) feature, which works in any framework.

At a high level, we’re going to:

1.  Intercept all requests with **Edge Middleware** (code that runs before our website is accessed and can modify how the website responds).
2.  If a request doesn’t have the correct password in a cookie, show a login page that we create.
3.  If the request has the correct password in a cookie, don’t do anything (let them see the page).

---

## Create a login page

On your website, create a login page (for example `/login`).

The login page should have a form with a password input, and when the form is submitted it should store that password as a cookie (using `document.cookie = ...`).

Here’s an example using plain HTML and JavaScript (you could also do this using React and Next.js or any other framework):

```html
<form>
  <input
    name="password"
    type="password"
    type="password"
    placeholder="Password"
    required
  />
  <button>Unlock</button>
</form>

<script>
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = form.querySelector("input[name=password]").value;
    document.cookie = `site_password=${password}; max-age=${
      60 * 60 * 24 * 365 // 1 year
    }`;
    location.reload();
  });
</script>
```

When the form submits, we set a cookie called `site_password` to that password, and the cookie is set to last for 1 year.

After that the code reloads the page. When the page reloads, the website will try to get past the Edge Middleware that checks the password. If it’s incorrect, we’ll just end up back on this login page. If it’s correct, we’ll be able to see the actual page.

## Create Edge Middleware

Now we need an Edge Middleware function to sit in front of our website and check whether incoming requests have the right password to see the website. If not, we’ll show them the login page.

First, create a file called `middleware.js` at the root of your project (not in any folder), and install the `@vercel/edge` npm package:

```bash
npm install @vercel/edge
```

Now, in `middleware.js`, we write a piece of code that checks incoming requests for the correct password:

```javascript
// middleware.js

import { rewrite } from "@vercel/edge";

// This middleware should run on every URL of your site.
export const config = {
  matcher: "/(.*)",
};

// The password that people will need to enter.
// You should probably make this an environment variable for better security.
const CORRECT_PASSWORD = "password123";

export default function middleware(request) {
  const url = new URL(request.url);

  // We don't want to block access to every URL, because we still
  // want CSS or JavaScript files to work on the login page.
  // Here, I'm only password-protecting the homepage and
  // pages that begin with "/blog".
  if (
    (url.pathname === "/" || url.pathname.startsWith("/blog")) &&
    // Check cookies for correct password.
    !request.headers.get("Cookie").includes(`site_password=${CORRECT_PASSWORD}`)
  ) {
    // A rewrite doesn't change the URL, but replaces the HTML
    // of the original page with the HTML of the login page.
    return rewrite("/login");
  }
}
```

---

And that’s it! Now, the Edge Middleware will check every incoming request. If it’s a URL that we want to password-protect, it’ll see if the cookies (sent in the request headers) have the correct password. If not, it’ll show the user our login page.
