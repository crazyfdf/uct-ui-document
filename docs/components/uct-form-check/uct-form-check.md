# Check 选择框

> 表单的选择框，包括单选框、多选框组件

## Props

| Prop name | Description | Type   | Values                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default |
| --------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| item      | 选择器配置  | object | `{"type": "radio"`, `"label": "单选框"`, `"options": {<br> "disabled": false`, `"hidden": false`, `"defaultValue": ""`, `"dynamicKey": ""`, `"dynamic": false`, `"options": [{"value": "1"`, `"label": "选项1"}`, `{"value": "2"`, `"label": "选项2"}`, `{"value": "3"`, `"label": "选项3"}]}`, `"model": "radio_1619340917803"`, `"key": "radio_1619340917803"`, `"help": ""`, `"rules": [{"required": false`, `"message": "必填项"}]}` | {}      |

## Events

| Event name                                                 | Properties                      | Description    |
| ---------------------------------------------------------- | ------------------------------- | -------------- |
| input 通过 v-model 语法糖传值，父组件使用 v-model 或:value | **val** `string` - 选择框选择值 | 选择框选择事件 |

---

## Check 使用方法

```vue
<uct-form-item :config="config" :item="item"></uct-form-item>
```

```js
export default {
  data() {
    return {
      item:{
        "type": "checkbox",
        "label": "多选框",
        "icon": "icon-duoxuan1",
        "options": {
          "disabled": false,
          "hidden": false,
          "defaultValue": [
            "1",
            "2"
          ],
          "dynamicKey": "",
          "dynamic": 1,
          "options": [{
              "value": "1",
              "label": "选项1"
            },
            {
              "value": "2",
              "label": "选项2"
            },
            {
              "value": "3",
              "label": "选项3"
            }
          ]
        },
        "model": "checkbox_1612862100249",
        "key": "checkbox_1612862100249",
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
