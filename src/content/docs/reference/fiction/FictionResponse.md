---
title: FictionResponse[]
---
Default response array containing HTTP server response option

| Key | Description | Type | Default value | Changeable |
| --- | --- | --- | --- | --- |
| status | HTTP status code to respond | int | 200 | true |
| headers | array name containing response headers | array | FictionResponseHeaders | true* |
| cookie | array name containing response cookies | array | FictionResponseCookie | true* |
| meta | items that should be added to `<meta>` (HTML response only) | string | $FICTION_META | true |

\* while following key is changeable, it's not recommended to change it because it can cause issues and change server's behavior