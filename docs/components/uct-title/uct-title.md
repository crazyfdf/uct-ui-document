# Title 标题

> 表单的各个部分的大标题

## Props

| Prop name  | Description        | Type   | Values                                                                                                                                                   | Default |
| ---------- | ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| titleStyle | title 的自定义样式 | object | -                                                                                                                                                        | {}      |
| item       | 文字标题配置       | object | `{"type": "text"`, `"label": "文字"`, `"options": {"textAlign": "left"`, `"hidden": false`, `"showRequiredMark": false}`, `"key": "text_1619334468969"}` | {}      |

---

## Title 使用方法

```vue
<uct-form-item :config="config" :item="item"></uct-form-item>
```

```js
export default {
  data() {
    return {
      item:{
        "type": "text",
        "label": "标题",
        "icon": "icon-zihao",
        "options": {
          "textAlign": "left",
          "hidden": false,
          "showRequiredMark": false
        },
        "key": "text_1612861438281"
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
