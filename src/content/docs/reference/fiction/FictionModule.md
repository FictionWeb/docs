---
title: FictionModule[]
---
Default modules array containing module name and path to it's index

## Modules loader
Fiction uses own module loader to load supported modules in `${FICTION_PATH}/modules` directory and inserts their absolute path into array
```bash
FictionModule["${name}"]="${fullpath}"
```

## Supported modules

| module name | description | directory name | filename | 
| --- | --- | --- | --- |
| accept | bash's `accept` loadable, used for `bash` core as network manager | modules/accept | modules/accept/accept |
| ui | Official example UI library for Fiction | modules/ui | modules/ui/index.sh |
| bashx | bashx transpiler for Fiction | modules/bashx | modules/bashx/bashx |

## Loading own modules
Modules Loader doesn't support custom modules loading, but you can add own module into FictionModule[] to later load it using it's path manually.