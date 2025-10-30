---
title: fiction.serveCGI
---
Creates a static route and executes executable CGI file with specific environment variables on request

```sh
fiction.serveCGI "<file>" "<routeAlias?>" "<content type?>"
```

| Argument | Description | Type | Required |
| --- | --- | --- | --- |
| $1 | File to execute | file | true |
| $2 | Use $2 instead of `/<file>` for route name | string | false |
| $3 | Use custom content type instead of automatically defined one | string | false |

## Available environment variables
| Name | Description |
| --- | --- |
| SERVER_SOFTWARE | Name and version of the software |
| REQUEST_METHOD | Request method |
| REQUEST_PATH | Full path of the request |
| FICTION_ROUTE | Same as REQUEST_PATH |
| REMOTE_ADDR | IP address of client |
| SCRIPT_FILENAME | Full path of current executable |
| HTTP_USER_AGENT | Client's user agent |
| HTTP_COOKIE | Client's cookie for page, if any |
| CONTENT_LENGTH | POST data length, if any |
| HTTPS | true if HTTPS is enabled, otherwise false |

## Response structure
By HTTP standarts, valid CGI response is required. CGI scripts are required to send newline (\n) as delimeter for headers and response data, e.g.:

```
Content-Type: text/html

<html>
<p>Hello world!</p>
</html>
```

Fiction automatically manages response code and routing. If client sends POST, PATCH or PUT request, it's content length is stored in $CONTENT_LENGTH and the content is passed to CGI

