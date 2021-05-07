# slider 滑块选择器

> 表单滑块选择器

## Props

| Prop name     | Description                  | Type           | Values | Default   |
| ------------- | ---------------------------- | -------------- | ------ | --------- |
| value         | 当前进度百分比值，范围 0-100 | number\|string | -      | 0         |
| disabled      | 是否禁用滑块                 | boolean        | -      | false     |
| blockWidth    | 滑块宽度，高等于宽，单位 rpx | number\|string | -      | 30        |
| min           | 最小值                       | number\|string | -      | 0         |
| max           | 最大值                       | number\|string | -      | 100       |
| step          | 步进值                       | number\|string | -      | 1         |
| height        | 滑块条高度，单位 rpx         | number\|string | -      | 6         |
| activeColor   | 进度条的激活部分颜色         | string         | -      | "#2979ff" |
| inactiveColor | 进度条的背景颜色             | string         | -      | "#c0c4cc" |
| blockColor    | 滑块的背景颜色               | string         | -      | "#ffffff" |
| blockStyle    | 用户对滑块的自定义颜色       | object         | -      | {}        |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| start      |            |
| moving     |            |
| end        |            |
| input      |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default | 滑块插槽    |          |

---

## Slider 使用方法

```vue
<uct-form-item :config="config" :item="item"></uct-form-item>
```

```js
export default {
  data() {
    return {
      item:{
        "type": "slider",
        "label": "滑动输入条",
        "options": {
          "width": "100%",
          "defaultValue": 0,
          "disabled": false,
          "hidden": false,
          "min": 0,
          "max": 100,
          "step": 1,
          "showInput": false
        },
        "model": "slider_1619662388838",
        "key": "slider_1619662388838",
        "help": "",
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
