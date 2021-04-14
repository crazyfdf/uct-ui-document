# Scroll 列表

> 列表业务组件，专门为列表而设计的，利用它可以快速实现列表上拉加载、下拉刷新、切换列表、空页面、滑至顶部、触底提示等功能。

## Props

| Prop name  | Description                                       | Type              | Values                                                                                                           | Default                                                                                    |
| ---------- | ------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| tabs       | 每个子列表的配置项，当 tabs.length>1 时显示列表栏 | array             | `[{name: "列表名1"`, `more: {}`, `url: ""`, `list: []}`, `{name: "列表名2"`, `more: {}`, `url: ""`, `list: []}]` | []                                                                                         |
| lazy       | 是否开启懒加载                                    | Boolean \| String | `true`, `false`                                                                                                  | true                                                                                       |
| search     | 是否显示搜索框                                    | boolean           | `true`, `false`                                                                                                  | false                                                                                      |
| tabIndex   | 当前列表下标                                      | number            | -                                                                                                                | 0                                                                                          |
| top        | 当前列表内容距离顶部高度                          | Number \| String  | -                                                                                                                | 0                                                                                          |
| bottom     | 当前列表内容距离底部高度，单位 rpx                | number            | -                                                                                                                | 120                                                                                        |
| tabsHeight | 列表栏高度，单位 rpx                              | number            | -                                                                                                                | 80                                                                                         |
| tabRight   | 列表栏标签间的间距，单位 rpx，为 0 时为 flex 布局 | number            | -                                                                                                                | 0                                                                                          |
| bcColor    | 列表栏背景颜色                                    | string            | -                                                                                                                | "#fff"                                                                                     |
| cColor     | 列表栏字体颜色                                    | string            | -                                                                                                                | "#000"                                                                                     |
| blColor    | 列表栏下划线颜色                                  | string            | -                                                                                                                | "#479ff7"                                                                                  |
| searchTop  | 搜索栏离顶部距离                                  | number            | -                                                                                                                | 80                                                                                         |
| downOption | 列表下拉配置                                      | object            | -                                                                                                                | {<br> auto: false, // 不自动加载<br>}                                                      |
| upOption   | 列表上拉配置                                      | object            | -                                                                                                                | {<br> auto: false, // 不自动加载<br> empty: {<br> tip: "~ 空空如也 ~", // 提示<br> },<br>} |

## Events

| Event name   | Properties                      | Description              |
| ------------ | ------------------------------- | ------------------------ |
| moreChange   | **i** `number` - 切换的列表下标 | 切换列表自定义事件回调   |
| change       | **i** `number` - 切换的列表下标 | 切换列表默认事件事件回调 |
| success      | **list** `array` - 加载后的数据 | 上拉加载成功回调         |
| downCallback |                                 | 下拉刷新回调             |

## Slots

| Name    | Description            | Bindings |
| ------- | ---------------------- | -------- |
| moreTab | 支持列表右侧自定义内容 |          |
| default | 支持列表内容插槽       |          |

---

<!--
 * @Author: your name
 * @Date: 2021-04-13 16:05:26
 * @LastEditTime: 2021-04-13 16:05:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \UC-font\components\uct\components\uct-button\uct-button.md
-->
