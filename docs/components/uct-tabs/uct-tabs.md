# Tabbar 列表导航栏

> 列表导航栏,专门为列表页而设计的，利用它可以列表导航布局水平滚动，flex 布局，内容切换等功能。

## Props

| Prop name | Description                                                                                                     | Type           | Values                                                       | Default       |
| --------- | --------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------ | ------------- |
| tabs      | 列表配置信息                                                                                                    | array          | `['全部'`, `'待付款'] 或 [{name:'全部'}`, `{name:'待付款'}]` | []            |
| nameKey   | 取 name 的字段                                                                                                  | string         | -                                                            | "name"        |
| value     | 当前显示的下标 (使用 v-model 语法糖: 1.props 需为 value; 2.需回调 input 事件)                                   | string\|number | -                                                            | 0             |
| fixed     | 是否悬浮,默认 false                                                                                             | boolean        | -                                                            | false         |
| tabWidth  | 每个 tab 的宽度                                                                                                 | number         | -                                                            | 0             |
| tabRight  | tab 的偏移量,默认为 0,为 flex 平均分配; 如果指定偏移量,则不使用 flex,每个 tab 居左,超过则水平滑动(单位默认 rpx) | number         | -                                                            | 0             |
| height    | 高度,单位 rpx                                                                                                   | number         | -                                                            | 80            |
| bcColor   | 列表栏背景颜色                                                                                                  | string         | -                                                            | "transparent" |
| cColor    | 列表栏字体颜色                                                                                                  | string         | -                                                            | "#000"        |
| blColor   | 列表栏下划线颜色                                                                                                | string         | -                                                            | "#479ff7"     |

## Events

| Event name | Properties                      | Description                                                            |
| ---------- | ------------------------------- | ---------------------------------------------------------------------- |
| input      | **i** `number` - 切换的列表下标 | 切换列表默认通过 v-model 语法糖将下标更改，父组件使用 v-model 或:value |
| change     | **i** `number` - 切换的列表下标 | 切换列表默认事件回调                                                   |

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
uct-tabs class="px40"
              :tabs="tabs"
              :tabRight="tabRight"
              v-model="tabIndex"></uct-tabs>
```

```js
export default {
  data() {
    return {
      /**
       * @description: 列表配置
       * @param {object} name!:String "标题"
       */
      tabs: [
        { name: "标题0" },
        { name: "标题1" },
        { name: "标题2" },
        { name: "标题3" },
        { name: "标题4" },
        { name: "标题5" }
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
