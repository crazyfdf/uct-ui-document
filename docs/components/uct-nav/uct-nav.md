# Navbar 导航栏

> navbar 自定义导航栏,此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用 uniapp 自带的导航栏。

## Props

| Prop name    | Description                                                                          | Type            | Values | Default                                 |
| ------------ | ------------------------------------------------------------------------------------ | --------------- | ------ | --------------------------------------- |
| height       | 导航栏高度，单位 px，非 rpx                                                          | string\|number  | -      | ""                                      |
| titleWidth   | 标题的宽度，如果需要自定义右侧内容，且右侧内容很多时，可能需要减少这个宽度，单位 rpx | string\|number  | -      | "500"                                   |
| titleColor   | 标题的颜色                                                                           | string          | -      | "#606266"                               |
| titleBold    | 标题字体是否加粗                                                                     | boolean         | -      | false                                   |
| titleSize    | 标题的字体大小                                                                       | string\|number  | -      | 32                                      |
| isBack       | 导航栏左侧是否为返回按钮                                                             | boolean\|string | -      | true                                    |
| background   | 对象形式，因为用户可能定义一个纯色，或者线性渐变的颜色                               | string          | -      | function() {<br> return "#ffffff";<br>} |
| isFixed      | 导航栏是否固定在顶部                                                                 | boolean         | -      | true                                    |
| immersive    | 是否沉浸式，允许 fixed 定位后导航栏塌陷，仅 fixed 定位下生效                         | boolean         | -      | false                                   |
| borderBottom | 是否显示导航栏的下边框                                                               | boolean         | -      | true                                    |
| zIndex       | 导航栏层级                                                                           | string\|number  | -      | ""                                      |
| customBack   | 自定义返回逻辑                                                                       | func            | -      | null                                    |
| custom       | 是否自定义                                                                           | boolean         | -      | false                                   |

## Slots

| Name    | Description                                        | Bindings |
| ------- | -------------------------------------------------- | -------- |
| default | 自定义导航栏内容插槽，设置 custom 为 true 是生效   |          |
| left    | 导航栏左插槽，默认返回按钮                         |          |
| center  | 导航栏居中插槽，内容最大宽度为 titleWidth 单位 rpx |          |
| right   | 导航栏右插槽                                       |          |

---

<!--
 * @Author: your name
 * @Date: 2021-04-13 16:05:26
 * @LastEditTime: 2021-04-13 16:05:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \UC-font\components\uct\components\uct-button\uct-button.md
-->
