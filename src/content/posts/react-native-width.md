---
title: "How to set Text to max-width: max-content in React Native"
date: 2020-02-21
unlisted: true
---

In regular CSS you can give an element the property `max-width: max-content`, which makes the element (at most) as wide as the text inside of it.

There's no direct equivalent in React Native, but instead you can use flexbox to emulate this behavior to make a `Text` element only as wide as the text inside.

```jsx
export default () => {
  return (
    <View
      style={{
        alignSelf: "flex-start",
      }}
    >
      <Text>Hello, world!</Text>
    </View>
  );
};
```
