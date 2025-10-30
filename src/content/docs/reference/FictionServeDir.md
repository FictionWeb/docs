---
title: fiction.serveDir
---
Generates static route for each file in $1 and generates HTML file tree for the directory (optional)

```sh
FictionServeDir "<directory>" "<routePrefix?>" "<download?>" "<show file tree?>"
```

| Argument | Description | Type | Required |
| --- | --- | --- | --- |
| $1 | Directory | directory | true |
| $2 | Add prefix to generated file route, e.g. `<prefix>/<filename>` | string | false |
| $3 | Sets each file's content type to `application/x-octet-stream`, making it automatically downloadable | boolean | false |
| $4 | Generates HTML file tree of directory on `<prefix>` | boolean | false |