# uct-scroll

> 列表业务组件，专门为列表而设计的，利用它可以快速实现列表上拉加载、下拉刷新、切换列表、空页面、滑至顶部、触底提示等功能。

## Props

| Prop name  | Description                                  | Type              | Values | Default                                                                                                                                                                                                                                         |
| ---------- | -------------------------------------------- | ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tabs       | form 提交其他参数<br/>`@binding` {key:value} | array             | -      | []                                                                                                                                                                                                                                              |
| lazy       |                                              | Boolean \| String | -      | function() {<br> return true;<br>}                                                                                                                                                                                                              |
| search     |                                              | boolean           | -      | function() {<br> return false;<br>}                                                                                                                                                                                                             |
| tabIndex   |                                              | number            | -      | 0                                                                                                                                                                                                                                               |
| top        |                                              | Number \| String  | -      | function() {<br> return 0;<br>}                                                                                                                                                                                                                 |
| bottom     |                                              | number            | -      | function() {<br> return 120;<br>}                                                                                                                                                                                                               |
| tabsHeight |                                              | number            | -      | function() {<br> return 80;<br>}                                                                                                                                                                                                                |
| tabRight   |                                              | number            | -      | 0                                                                                                                                                                                                                                               |
| bcColor    |                                              | string            | -      | "#fff"                                                                                                                                                                                                                                          |
| cColor     |                                              | string            | -      | "#000"                                                                                                                                                                                                                                          |
| blColor    |                                              | string            | -      | "#479ff7"                                                                                                                                                                                                                                       |
| searchTop  |                                              | "top:80rpx"       | -      |                                                                                                                                                                                                                                                 |
| downOption |                                              | object            | -      | {<br> auto: false, // 不自动加载 (mixin 已处理第一个 tab 触发 downCallback)<br>}                                                                                                                                                                |
| upOption   |                                              | object            | -      | {<br> auto: false, // 不自动加载<br> noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认 5<br> empty: {<br> tip: "~ 空空如也 ~", // 提示<br> },<br>} |

## Events

| Event name   | Properties | Description |
| ------------ | ---------- | ----------- |
| downCallback |            |
| success      |            |
| moreChange   |            |
| change       |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| moreTab |             |          |
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
