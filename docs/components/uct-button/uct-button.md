# Button 按钮

> 按钮组件，主要提供加载中动画和防抖功能

## Props

| Prop name | Description    | Type            | Values | Default                                                       |
| --------- | -------------- | --------------- | ------ | ------------------------------------------------------------- |
| text      | 显示文本       | string          | -      | ""                                                            |
| rotate    | 是否启动加载   | boolean\|string | -      | false                                                         |
| disabled  | 是否禁用       | boolean\|string | -      | false                                                         |
| time      | 防抖及动画时间 | number          | -      | 1000                                                          |
| bgColor   | 按钮背景颜色   | string          | -      | "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6))" |
| fontColor | 按钮字体颜色   | string          | -      | "#FFFFFF"                                                     |

## Events

| Event name     | Properties | Description  |
| -------------- | ---------- | ------------ |
| contact        |            |
| error          |            |
| getphonenumber |            |
| getuserinfo    |            |
| launchapp      |            |
| longtap        |            |
| opensetting    |            |
| touchcancel    |            |
| touchend       |            |
| touchmove      |            |
| touchstart     |            |
| click          |            | 点击按钮回调 |

## Slots

| Name | Description  | Bindings |
| ---- | ------------ | -------- |
| text | 按钮内容文本 |          |

---

<!--
 * @Version: 1.0.0
 * @Author: 祸灵
 * @LastEditors: 祸灵
 * @Date: 2021-04-13 16:08:09
 * @LastEditTime: 2021-04-15 17:56:16
 * @Description:
-->

## Button 使用方法

```vue
<uct-button
  :text="text"
  :time="time"
  :bgColor="bgColor"
  :fontColor="fontColor"
  :rotate="rotate"
  :disabled="disabled"
></uct-button>
```

```js
export default {
  data() {
    return {
      time: 10000, //防抖及动画时长
      rotate: true, //是否启动加载
      disabled: false, //是否禁用
      text: "按钮", //显示文本
      bgColor: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6))", //按钮背景颜色
      fontColor: "#fff" //按钮字体颜色
    };
  }
};
```
