---
title: fiction.404
---
Default HTTP 404 page function.

To use custom 404 function, reinitialize `fiction.404` function:

```sh title="index.shx"
fiction.404() {
    fiction.respond 404 << EOF
    <html>
    <div>Not found</div>
    </html>
EOF
}
```