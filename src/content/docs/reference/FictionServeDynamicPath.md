---
title: FictionServeDynamicPath
---
Creates a new dynamic route

```sh
FictionServeDynamicPath "<route>" "<function>" "<content type>"
```

| Argument | Description | Type | Required |
| --- | --- | --- | --- |
| $1 | Route name | string | true |
| $2 | Function or command to execute on route | string | false |
| $3 | Use custom content type instead of automatically defined one | string | false |

## Assigning and capturing named slugs
Slug placeholders are placed inside route name and wrapped with brackets, for example:

```
/pages/[page]
  ^^^   ^^^
static  slug
```

If Fiction matches at least one static part of any dynamic route, it starts capturing slugs and saving them into `$FICTION_SLUG_<name>`, while the `<name>` is the string inside brackets

```
Route: 
/pages/[page]

Request path:
/pages/page1

[page] => $FICTION_SLUG_page => page1
```

You can either use the variable directly or call `getSlug <slug>` function to get it's value