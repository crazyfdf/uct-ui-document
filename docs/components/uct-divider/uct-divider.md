# Divider 分割线

> 表单的分割线

## Props

| Prop name | Description | Type   | Values                                                                                                         | Default |
| --------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------- | ------- |
| item      | 分割线配置  | object | `{"type": "divider"`, `"label": "分割线"`, `"options": {"orientation": ""}`, `"key": "divider_1619341833283"}` | {}      |

---

## Divider 使用方法

```vue
<uct-form-item :config="config" :item="item"></uct-form-item>
```

```js
export default {
  data() {
    return {
      item:{
        "type": "divider",
        "label": "分割线",
        "icon": "icon-fengexian",
        "options": {
          "orientation": ""
        },
        "key": "divider_1612871370842"
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
