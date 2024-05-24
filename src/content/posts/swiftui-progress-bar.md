---
title: How to build a custom progress bar with SwiftUI
date: 2023-01-02
published: true
unlisted: true
---

Here’s how to build a progress bar like this using SwiftUI:

![](/posts/swiftui-progress-bar/IMG_88EACB3DF4C6-1.jpeg)

I’ll paste the code, and then I’ll explain it a bit below.

```swift
Rectangle()
	.foregroundColor(Color(.systemGray5))
	.frame(height: 16)
	.overlay(
		GeometryReader { metrics in
			Rectangle()
				.foregroundColor(.yellow)
				.frame(
					width: min(progress/goal, 1) * metrics.size.width,
					height: 16
				)
		}
	)
.clipShape(RoundedRectangle(cornerRadius: 20))
```

- The background is a gray rectangle whose height is 16.
- We overlay on top a colored rectangle whose height is also 16, and whose width is a percentage of the way across.
  - We use `GeometryReader` to calculate the full screen width available, `metrics.size.width`, and multiply it by a decimal.
  - We cap the decimal at `1` at most, so the progress bar isn’t wider than the available space.
- Finally, we clip the whole bar into the shape of a rounded rectangle, so the progress bar is more pill-shaped.
  - How rounded this shape should be (or whether to clip it at all) is up to you.
