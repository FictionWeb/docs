---
title: useState(value)
---
Creates new state/modifies state's value

```js
const state = useState("value");

state.set("new value")

state.subscribe((value) => { // state.set() triggers all listeners and passes value
    console.log(value)
})

```

| Argument | Description | Type | Required |
| --- | --- | --- | --- |
| $1 | Name of state | string | true |

