# Empty 空布局

> 空布局组件，当列表或者页面内容为空白时可使用，可快速实现空白页图片提示，文字提示，按钮操作功能

## Props

| Prop name | Description                                  | Type   | Values | Default                                                                                                                                                                                                                                                       |
| --------- | -------------------------------------------- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| option    | empty 的配置项: 默认为 GlobalOption.up.empty | object | -      | {<br> use: true, // 是否显示空布局<br> icon: "/static/imgs/public/mescroll-empty.png", // 图标路径 (建议放入 static 目录, 如 /static/img/mescroll-empty.png )<br> tip: "~ 空空如也 ~", // 提示<br> btnText: "", //button 的内容文字，为空时不显示 button<br>} |

## Events

| Event name | Properties | Description  |
| ---------- | ---------- | ------------ |
| emptyclick |            | 点击按钮回调 |

---

<!--
 * @Author: your name
 * @Date: 2021-04-13 16:05:26
 * @LastEditTime: 2021-04-13 16:05:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \UC-font\components\uct\components\uct-button\uct-button.md
-->
