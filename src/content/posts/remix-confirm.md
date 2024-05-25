---
title: How to use confirm() with Remix’s Form component
date: 2022-01-20
unlisted: true
---

One super easy way of adding a confirmation pop-up when a user submits a form (for example, on a form that deletes something), is to use the browser’s built-in [`window.confirm()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) method.

You can use this in conjunction with Remix’s built-in `<Form />` component.

On the form, add an `onSubmit` event handler as such:

```jsx
<Form
  onSubmit={(event) => {
    if (!confirm("Are you sure?")) {
      event.preventDefault();
    }
  }}
>
  {/* Rest of form stuff here. */}
</Form>
```

This form’s missing some of the other properties you might have (`method`, `className`, etc), but here we’re focusing on using the `confirm()` method.

When the form submits, we use `confirm()` to pop up a message asking the user if they’re sure they’d like to perform this action.

If they aren’t (`confirm()` returns `false`), we run `preventDefault()` on the form submission event, which prevents the form submission from going any further.

If they do agree to move forward (`confirm()` returns `true`), nothing will happen and the Remix form submission will continue as usual.
