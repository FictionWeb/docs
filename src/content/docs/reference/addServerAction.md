---
title: addServerAction
---
Creates an API route pointing to $1 while the server is online (e.g. during route loading)

```sh
addServerAction "<function or command>"
```

| Argument | Description | Type | Required |
| --- | --- | --- | --- |
| $1 | Function or command to execute | file | true |

While any command or function is supported, it's recommended to use API handler functions for better control over the response