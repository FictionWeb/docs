---
title: fiction.500
---
Default HTTP 500 page function.

To use custom 500 function, reinitialize `fiction.500` function:

```sh title="index.shx"
fiction.500() {
    fiction.respond 500 << EOF
    <html>
    <div>Internal Server Error</div>
    </html>
EOF
}
```