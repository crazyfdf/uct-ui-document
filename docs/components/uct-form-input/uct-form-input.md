# Input 输入框

> 表单的输入框，包括输入框、数字输入框、文本框组件

## Props

| Prop name | Description | Type   | Values                                                                                                                                                                                                                                                                                                                                                                                                                          | Default |
| --------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| item      | 输入框配置  | object | `{"type": "input"`, `"label": "输入框"`, `"icon": "icon-write"`, `"options": {"type": "text"`, `"width": "100%"`, `"defaultValue": ""`, `"placeholder": "请输入"`, `"clearable": false`, `"maxLength": null`, `"hidden": false`, `"disabled": false}`, `"model": "input_1619335863088"`, `"key": "input_1619335863088"`, `"help": ""`, `"prefix": ""`, `"suffix": ""`, `"rules": [{"required": false`, `"message": "必填项"}]}` | {}      |

## Events

| Event name                                                 | Properties                      | Description    |
| ---------------------------------------------------------- | ------------------------------- | -------------- |
| input 通过 v-model 语法糖传值，父组件使用 v-model 或:value | **val** `string` - 输入框输入值 | 输入框输入事件 |

---

## Input 使用方法

```vue
<uct-form-item :config="config" :item="item"></uct-form-item>
```

```js
export default {
  data() {
    return {
      item:{
        "type": "input",
        "label": "输入框",
        "icon": "icon-write",
        "options": {
          "type": "text",
          "width": "100%",
          "defaultValue": "",
          "placeholder": "请输入",
          "clearable": false,
          "maxLength": null,
          "hidden": false,
          "disabled": false
        },
        "model": "input_1612861962073",
        "key": "input_1612861962073",
        "rules": [{
          "required": false,
          "message": "必填项"
        }]
      },
      config:{
        "layout": "horizontal",
        "labelCol": {
          "span": 4
        },
        "wrapperCol": {
          "span": 20
        },
        "hideRequiredMark": false,
        "customStyle": ""
      }
  },
};

```
