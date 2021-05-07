# ScrollItem 子列表

> 列表子组件，为 uct-scroll 组件提供支持，用来显示单个列表组件内容以及上拉加载、下拉刷新、切换列表、空页面、滑至顶部、触底提示等功能。

## Props

| Prop name  | Description                                     | Type              | Values                              | Default                                                                                    |
| ---------- | ----------------------------------------------- | ----------------- | ----------------------------------- | ------------------------------------------------------------------------------------------ |
| tabIndex   | 列表当前下标,为 false 时表示单独使用子列表组件  | Number \| Boolean | -                                   | false                                                                                      |
| fixed      | 是否通过 fixed 固定 scroll 的高度, 默认 false   | boolean           | `true`, `false //false时为relative` | false                                                                                      |
| index      | 列表下标                                        | number            | -                                   | 0                                                                                          |
| api        | 接口数据内容所在位置                            | string            | -                                   | "result.content"                                                                           |
| more       | 接口请求参数，为 false 时表示不请求接口，默认{} | Object \| Boolean | -                                   | function() {<br> return {};<br>}                                                           |
| url        | 接口 url                                        | string            | -                                   | ""                                                                                         |
| top        | 列表离顶部距离                                  | Number \| String  | -                                   | 20                                                                                         |
| bottom     | 列表离底部距离                                  | number            | -                                   | 20                                                                                         |
| downOption | 列表下拉配置                                    | object            | -                                   | {<br> auto: false, // 不自动加载<br>}                                                      |
| upOption   | 列表上拉配置                                    | object            | -                                   | {<br> auto: false, // 不自动加载<br> empty: {<br> tip: "~ 空空如也 ~", // 提示<br> },<br>} |

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
 * @Version: 1.0.0
 * @Author: 祸灵
 * @LastEditors: 祸灵
 * @Date: 2021-04-13 16:08:09
 * @LastEditTime: 2021-04-16 11:42:36
 * @Description:
-->

## ScrollItem 使用方法

```vue
<uct-scroll-item
  class="px40"
  @success="init"
  :tabIndex="false"
  :url="scrollOption.url"
  :api="scrollOption.api"
  :more="scrollOption.more"
  :list="scrollOption.list"
>
    <view v-for="item in 200"
          class="px40">
      <view>{{item}}</view>
    </view>
</uct-scroll-item>
```

```js
export default {
  data() {
    return {
      /**
       * @description: 子列表配置
       * @param  url:String 请求url,more!:Object|Boolean 请求参数{key:value},api:String 根据api返回list数据,list:Array 请求返回数据
       */
      scrollOption: { url: "", api: "", more: false, list: [] }
    };
  }
};
```
