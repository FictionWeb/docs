---
title: Dynamic routes
sidebar: 
   order: 4
---
Fiction provides full support for dynamic routing, but works different way for other popular frameworks. 

Dynamic routes can be defined with [FictionServeDynamicPath](/reference/fictionservedynamicpath) function the same way as any other static route.

```sh
fiction.serveDynamic "<route>" "<function>" "<content type>"
```

The syntax of dynamic routes is very simple:

```
/<string>/[slug]/<string1>/[slug1]/...
  ^^^^     ^^^
 static    slug
```

If Fiction matches at least one static part of any dynamic route, it starts capturing slugs and saving them into `$NAME`, while the `NAME` is the string inside brackets

Example:
```
Route: 
/pages/[page]

Request path:
/pages/page1

[page] => $page => page1
```

You can either use the variable directly or call `getSlug <slug>` function to get it's value