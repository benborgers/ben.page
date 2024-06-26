---
title: "How to execute a shell script with Node.js"
date: 2020-07-01
unlisted: true
---

You can execute a shell script with Node.js without even installing any packages.

```jsx
const { spawn } = require("child_process");

spawn("git clone https://github.com/benborgers/potion && cd potion", {
  shell: true,
});
```

The `shell: true` option allows you to execute any command, like you would on the command line.

For more options, like specifying which directory to execute the command in, check out the [official Node.js documentation](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options).
