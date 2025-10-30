---
title: fiction.serveFile
---
Creates a static route with file's content as response

```sh
fiction.serveFile "<file>" "<routeAlias?>" "<content type?>" "<headers?>"
```

| Argument | Description | Type | Required |
| --- | --- | --- | --- |
| $1 | File to host | file | true |
| $2 | Use $2 instead of `/<file>` for route name | string | false |
| $3 | Use custom content type instead of automatically defined one | string | false |
| $4 | Headers to append on file response | associative array | false

### Headers example: 
```bash
declare -A headers=([cache-control]="max-age=507000, public")
fiction.serveFile "./icon.png" "/public/icon" "image/png" "headers"
```