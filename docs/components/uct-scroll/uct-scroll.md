# Scroll 列表

> 列表业务组件，专门为列表而设计的，利用它可以快速实现列表上拉加载、下拉刷新、切换列表、空页面、滑至顶部、触底提示等功能。

## Props

| Prop name  | Description                                       | Type              | Values                                                                                                           | Default                                                                                    |
| ---------- | ------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| tabs       | 每个子列表的配置项，当 tabs.length>1 时显示列表栏 | array             | `[{name: "列表名1"`, `more: {}`, `url: ""`, `list: []}`, `{name: "列表名2"`, `more: {}`, `url: ""`, `list: []}]` | []                                                                                         |
| lazy       | 是否开启懒加载                                    | Boolean \| String | `true`, `false`                                                                                                  | true                                                                                       |
| search     | 是否显示搜索框                                    | boolean           | `true`, `false`                                                                                                  | false                                                                                      |
| value      | 当前列表下标                                      | number            | -                                                                                                                | 0                                                                                          |
| top        | 当前列表内容距离顶部高度，单位 rpx                | Number \| String  | -                                                                                                                | 40                                                                                         |
| bottom     | 当前列表内容距离底部高度，单位 rpx                | number            | -                                                                                                                | 40                                                                                         |
| tabsHeight | 列表栏高度，单位 rpx                              | number            | -                                                                                                                | 80                                                                                         |
| tabRight   | 列表栏标签间的间距，单位 rpx，为 0 时为 flex 布局 | number            | -                                                                                                                | 0                                                                                          |
| bcColor    | 列表栏背景颜色                                    | string            | -                                                                                                                | "#fff"                                                                                     |
| cColor     | 列表栏字体颜色                                    | string            | -                                                                                                                | "#000"                                                                                     |
| blColor    | 列表栏下划线颜色                                  | string            | -                                                                                                                | "#479ff7"                                                                                  |
| searchTop  | 搜索栏离顶部距离                                  | number            | -                                                                                                                | 80                                                                                         |
| downOption | 列表下拉配置                                      | object            | -                                                                                                                | {<br> auto: false, // 不自动加载<br>}                                                      |
| upOption   | 列表上拉配置                                      | object            | -                                                                                                                | {<br> auto: false, // 不自动加载<br> empty: {<br> tip: "~ 空空如也 ~", // 提示<br> },<br>} |

## Events

| Event name   | Properties                      | Description                                                            |
| ------------ | ------------------------------- | ---------------------------------------------------------------------- |
| input        | **i** `number` - 切换的列表下标 | 切换列表默认通过 v-model 语法糖将下标更改，父组件使用 v-model 或:value |
| moreChange   | **i** `number` - 切换的列表下标 | 切换列表自定义事件回调                                                 |
| change       | **i** `number` - 切换的列表下标 | 切换列表默认事件事件回调                                               |
| success      | **list** `array` - 加载后的数据 | 上拉加载成功回调                                                       |
| downCallback |                                 | 下拉刷新回调                                                           |

## Slots

| Name    | Description            | Bindings |
| ------- | ---------------------- | -------- |
| moreTab | 支持列表右侧自定义内容 |          |
| default | 支持列表内容插槽       |          |

---

<!--
 * @Version: 1.0.0
 * @Author: 祸灵
 * @LastEditors: 祸灵
 * @Date: 2021-04-13 16:08:09
 * @LastEditTime: 2021-04-16 11:38:43
 * @Description:
-->

## Scroll 使用方法

```vue
<uct-scroll
  :tabs="tabs"
  class="px40"
  @success="init"
  v-model="tabIndex"
  @change="changeTabIndex"
  :tabRight="tabRight"
>
      <view v-for="item in 200"
            class="px40">
        <view>{{item}}</view>
      </view>
    </uct-scroll>
```

```js
export default {
  data() {
    return {
      /**
       * @description: 列表配置
       * @param {object} name!:String "标题",url:String 请求url,more!:Object|Boolean 请求参数{key:value},api:String 根据api返回list数据,list:Array 请求返回数据
       */
      tabs: [
        { name: "标题0", url: "", api: "", more: false, list: [] },
        { name: "标题1", url: "", api: "", more: false, list: [] },
        { name: "标题2", url: "", api: "", more: false, list: [] },
        { name: "标题3", url: "", api: "", more: false, list: [] },
        { name: "标题4", url: "", api: "", more: false, list: [] },
        { name: "标题5", url: "", api: "", more: false, list: [] }
      ],
      tabRight: 100, //列表水平滚动间距，为0时为flex平均分布于
      tabIndex: 1 //当前列表下标
    };
  },
  methods: {
    changeTabIndex(v) {
      console.log(v);
    }
  }
};
```
