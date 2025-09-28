---
title: FictionServePath
---
Creates a new route

```sh
FictionServePath "<route>" "<function>" "<content type>" "<route type?>"
```

| Argument | Description | Type | Required |
| --- | --- | --- | --- |
| $1 | Route name | string | true |
| $2 | Function or command to execute on route | string | false |
| $3 | Use custom content type instead of automatically defined one | string | false |
| $4 | Specify route type (static/dynamic/api/cgi/dynamic-api) | string | false |