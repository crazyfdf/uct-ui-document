# ScrollItem 子列表

> 列表子组件，为 uct-scroll 组件提供支持，用来显示单个列表组件内容以及上拉加载、下拉刷新、切换列表、空页面、滑至顶部、触底提示等功能。

## Props

| Prop name  | Description                                     | Type              | Values | Default                                                                                    |
| ---------- | ----------------------------------------------- | ----------------- | ------ | ------------------------------------------------------------------------------------------ |
| tabIndex   | 列表当前下标                                    | number            | -      | 0                                                                                          |
| index      | 列表下标                                        | number            | -      | 0                                                                                          |
| api        | 接口数据内容所在位置                            | string            | -      | "result.content"                                                                           |
| more       | 接口请求参数，为 false 时表示不请求接口，默认{} | Object \| Boolean | -      | function() {<br> return {};<br>}                                                           |
| url        | 接口 url                                        | string            | -      | ""                                                                                         |
| top        | 列表离顶部距离                                  | number            | -      | function() {<br> return 30;<br>}                                                           |
| bottom     | 列表离底部距离                                  | number            | -      | function() {<br> return 120;<br>}                                                          |
| downOption | 列表下拉配置                                    | object            | -      | {<br> auto: false, // 不自动加载<br>}                                                      |
| upOption   | 列表上拉配置                                    | object            | -      | {<br> auto: false, // 不自动加载<br> empty: {<br> tip: "~ 空空如也 ~", // 提示<br> },<br>} |

## Events

| Event name   | Properties                      | Description      |
| ------------ | ------------------------------- | ---------------- |
| success      | **list** `array` - 加载后的数据 | 上拉加载成功回调 |
| downCallback |                                 | 下拉刷新回调     |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default | 列表内容    |          |

---

<!--
 * @Author: your name
 * @Date: 2021-04-13 16:05:26
 * @LastEditTime: 2021-04-13 16:05:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \UC-font\components\uct\components\uct-button\uct-button.md
-->
