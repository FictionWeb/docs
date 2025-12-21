---
title: fiction.respond
---
Sends an HTTP response. 

```sh
fiction.respond "<HTTP code>" "<body?>" 
```

If no body as argument is provided, `fiction.respond` will read from standard input:
```sh
fiction.respond 200 << EOF
foo
bar
baz
EOF
```
