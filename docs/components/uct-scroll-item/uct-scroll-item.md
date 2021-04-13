# uct-scroll-item

## Props

| Prop name  | Description | Type              | Values | Default                                                                                                                                                                                                                                         |
| ---------- | ----------- | ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tabIndex   |             | number            | -      | 0                                                                                                                                                                                                                                               |
| index      |             | number            | -      | 0                                                                                                                                                                                                                                               |
| api        |             | string            | -      | "result.content"                                                                                                                                                                                                                                |
| more       |             | Object \| Boolean | -      | function() {<br> return {};<br>}                                                                                                                                                                                                                |
| url        |             | string            | -      | ""                                                                                                                                                                                                                                              |
| top        |             | number            | -      | function() {<br> return 200;<br>}                                                                                                                                                                                                               |
| bottom     |             | number            | -      | function() {<br> return 120;<br>}                                                                                                                                                                                                               |
| downOption |             | object            | -      | {<br> auto: false, // 不自动加载 (mixin 已处理第一个 tab 触发 downCallback)<br>}                                                                                                                                                                |
| upOption   |             | object            | -      | {<br> auto: false, // 不自动加载<br> noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认 5<br> empty: {<br> tip: "~ 空空如也 ~", // 提示<br> },<br>} |

## Events

| Event name   | Properties | Description |
| ------------ | ---------- | ----------- |
| success      |            |
| downCallback |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

<!--
 * @Author: your name
 * @Date: 2021-04-13 16:05:26
 * @LastEditTime: 2021-04-13 16:05:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \UC-font\components\uct\components\uct-button\uct-button.md
-->
