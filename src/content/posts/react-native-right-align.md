---
title: "How to right-align an element in React Native"
date: 2020-02-21
published: true
unlisted: true
---

Right aligning a component can be hard in React Native, especially when you don't want to just use `text-align: right`.

Luckily, you can use flexbox to right-align an element by setting two properties on a wrapping `View`.

```jsx
export default () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <Button title="Click me" onPress={() => console.log("clicked")} />
    </View>
  );
};
```
