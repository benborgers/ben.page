---
title: "Logging the output of Node.js shell exec"
date: 2020-07-01
published: true
unlisted: true
---

The nice thing about the built-in `child_process` package's `spawn` command for executing shell commands with Node.js, is that you can easily get access to the output of that command.

This way, you can see what the terminal command is doing:

```jsx
const { spawn } = require("child_process");

const command = spawn("git clone https://github.com/benborgers/potion", {
  shell: true,
});

command.stdout.on("data", (data) => console.log(data.toString()));
command.stderr.on("data", (data) => console.error(data.toString()));
```

Now, the output of your `spawn` shell command will be streamed to the console in real time.
