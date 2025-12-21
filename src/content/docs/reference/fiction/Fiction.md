---
title: Fiction[]
---
Main configuration array of Fiction webserver.

| Key | Description | Type | Default value | Changeable |
| --- | --- | --- | --- | --- | 
| version  | Version of framework | string | <latest> | false |
| path     | Fiction's absolute path | string | ${FICTION_PATH} | false |
| routes   | Array for routes | array | FictionRoute | true* |
| modules  | Array containing module names | array | FictionModule | true* |
| response | Array for response arguments | array | FictionResponse | true* |
| request | Array for request information | array | Request | true* |
| mode | Webserver mode (development/production) | string | production | true* |
| core | Network utility to use for requests (ncat/netcat/socat/bash) | string | socat | true |
| expose_addr | Whether show incoming IP in logs or not | boolean | true | true |
| show_headers | Show request headers (development mode only) | boolean | false | true |
| hot_reload | Whether enable Hot-Reload or not (production mode only, development mode enables hot-reload automatically) | boolean | false | true |
| encode_routes | Whether encode routes storage file or not | boolean | false | true |
| default_index | Default index file to execute (bashx, fiction run/dev/build) | string | src/index.shx | true | 

\* while following key is changeable, it's not recommended to change it because it can cause issues and change server's behavior
