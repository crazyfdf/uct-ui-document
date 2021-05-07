# Select 选择器

> 表单的选择器，包括时间选择器、日期选择器、日期+时间选择器、自定义选择器、地区选择器、打开地图选择具体地址组件

## Props

| Prop name | Description | Type   | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default |
| --------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| item      | 选择器配置  | object | `{"type": "select"`, `"label": "下拉选择器"`, `"options": {"width": "100%"`, `"multiple": false`, `"disabled": false`, `"clearable": false`, `"hidden": false`, `"placeholder": "请选择"`, `"dynamicKey": ""`, `"dynamic": false`, `"options": [{"value": "1"`, `"label": "下拉框1"}`, `{"value": "2"`, `"label": "下拉框2"}]`, `"showSearch": false}`, `"model": "select_1619337065723"`, `"key": "select_1619337065723"`, `"help": ""`, `"prefix": ""`, `"suffix": ""`, `"rules": [{"required": false`, `"message": "必填项"}]}` | {}      |

## Events

| Event name                                                 | Properties                      | Description    |
| ---------------------------------------------------------- | ------------------------------- | -------------- |
| input 通过 v-model 语法糖传值，父组件使用 v-model 或:value | **val** `string` - 选择器选择值 | 选择器选择事件 |

---

## Select 使用方法

```vue
<uct-form-item :config="config" :item="item"></uct-form-item>
```

```js
export default {
  data() {
    return {
      item:{
        "type": "select",
        "label": "自定义选择器",
        "icon": "icon-xiala",
        "options": {
          "width": "100%",
          "multiple": false,
          "disabled": false,
          "clearable": false,
          "hidden": false,
          "placeholder": "请选择",
          "dynamicKey": "",
          "dynamic": 1,
          "options": [{
              "value": "1",
              "label": "下拉框1"
            },
            {
              "value": "2",
              "label": "下拉框2"
            }
          ],
          "showSearch": false,
          "defaultValue": "2"
        },
        "model": "select_1612861871170",
        "key": "select_1612861871170",
        "rules": [{
          "required": true,
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
