# Rate 评分

> 表单的评分组件

## Props

| Prop name | Description | Type   | Values                                                                                                                                                                                                                                                                                                     | Default |
| --------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| item      | 评分配置    | object | `{"type": "rate"`, `"label": "评分"`, `"icon": "icon-pingfen_moren"`, `"options": {"defaultValue": 0`, `"max": 5`, `"disabled": false`, `"hidden": false`, `"allowHalf": false}`, `"model": "rate_1612861359410"`, `"key": "rate_1612861359410"`, `"rules": [{"required": false`, `"message": "必填项"}]}` | {}      |

## Events

| Event name                                                 | Properties                      | Description    |
| ---------------------------------------------------------- | ------------------------------- | -------------- |
| input 通过 v-model 语法糖传值，父组件使用 v-model 或:value | **val** `string` - 输入框输入值 | 输入框输入事件 |

---

## Rate 使用方法

```vue
<uct-form-item :config="config" :item="item"></uct-form-item>
```

```js
export default {
  data() {
    return {
      item:{
        "type": "rate",
        "label": "评分",
        "icon": "icon-pingfen_moren",
        "options": {
          "defaultValue": 0,
          "max": 5,
          "disabled": false,
          "hidden": false,
          "allowHalf": false
        },
        "model": "rate_1612861359410",
        "key": "rate_1612861359410",
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
