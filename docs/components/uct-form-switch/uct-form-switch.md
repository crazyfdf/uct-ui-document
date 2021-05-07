# Switch 开关

> 表单的开关组件

## Props

| Prop name | Description | Type   | Values                                                                                                                                                                                                                                                                        | Default |
| --------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| item      | 开关配置    | object | `{"type": "switch"`, `"label": "开关"`, `"icon": "icon-kaiguan3"`, `"options": {"defaultValue": false`, `"hidden": false`, `"disabled": false}`, `"model": "switch_1612862020078"`, `"key": "switch_1612862020078"`, `"rules": [{"required": false`, `"message": "必填项"}]}` | {}      |

## Events

| Event name                                                 | Properties                      | Description    |
| ---------------------------------------------------------- | ------------------------------- | -------------- |
| input 通过 v-model 语法糖传值，父组件使用 v-model 或:value | **val** `string` - 输入框输入值 | 输入框输入事件 |

---

## Switch 使用方法

```vue
<uct-form-item :config="config" :item="item"></uct-form-item>
```

```js
export default {
  data() {
    return {
      item:{
        "type": "switch",
        "label": "开关",
        "icon": "icon-kaiguan3",
        "options": {
          "defaultValue": false,
          "hidden": false,
          "disabled": false
        },
        "model": "switch_1612862020078",
        "key": "switch_1612862020078",
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
