# Button

> The only true button.

## Props

| Prop name | Description                                                       | Type   | Values                           | Default                                                               |
| --------- | ----------------------------------------------------------------- | ------ | -------------------------------- | --------------------------------------------------------------------- |
| color     | The color for the button.                                         | string | -                                | '#333'                                                                |
| size      | The size of the button 其他的东西 ddd                             | string | `small`, `normal`, `large`, `ls` | 'normal'                                                              |
| onClick   | Gets called when the user clicks on the button<br/>`@ignore` true | func   | -                                | event => {<br> console.log('You have clicked me!', event.target)<br>} |

## Events

| Event name | Properties                                                                 | Description            |
| ---------- | -------------------------------------------------------------------------- | ---------------------- |
| click      | **newVal** `number` - new value set<br>**oldVal** `number` - new value set | 按钮点击成功 emit 事件 |

## Slots

| Name | Description  | Bindings                                  |
| ---- | ------------ | ----------------------------------------- |
| test | 暴露出的插槽 | **text** `object` - text of the menu item |

---

Use vue live right here too

````markdown
```jsx live
<Button>I’m transparent!</Button>
```
````

```jsx live
<Button>I’m transparent!</Button>
```

To render an example as highlighted source code remove the live modifier

```html
<button>I’m transparent!</button>
```

---

Basic button:

```vue live
<Button>Push Me</Button>
```

Big pink button:

```vue live
<Button size="large" color="deeppink">
  Click Me
</Button>
```

And you _can_ **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

Fenced code blocks with `vue`, `js`, `jsx` or `javascript` languages are rendered as a interactive playgrounds:

```jsx live
<Button>Push Me</Button>
```

You can also use the Single File Component Format

```vue live
<template>
  <div class="wrapper">
    <Button @click.native="pushButton">Push Me</Button>
    <hr />
    <p class="text-name">Next Dog Name: {{ dogName }}</p>
  </div>
</template>
<script>
const dogNames = require("dog-names").all;

// You can also use 'exports.default = {}' style module exports.
export default {
  data() {
    return { numClicks: 0, dogName: dogNames[0] };
  },
  methods: {
    pushButton() {
      this.numClicks += 1;
      this.dogName = dogNames[this.numClicks];
    }
  }
};
</script>
<style scoped>
.wrapper {
  padding: 10px;
}
.text-name {
  color: red;
}
</style>
```
