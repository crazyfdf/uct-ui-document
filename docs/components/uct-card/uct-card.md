# Card 卡片

卡片组件一般用于多个列表条目，且风格统一的场景

## Props

| Prop name        | Description                                                                        | Type                   | Values | Default   |
| ---------------- | ---------------------------------------------------------------------------------- | ---------------------- | ------ | --------- |
| className        | 卡片 css                                                                           | array                  | -      | []        |
| title            | 标题                                                                               | string                 | -      | ""        |
| titleColor       | 标题颜色                                                                           | string                 | -      | "#303133" |
| titleSize        | 标题字体大小，单位 rpx                                                             | number\|string         | -      | "30"      |
| subTitle         | 副标题                                                                             | string                 | -      | ""        |
| subTitleColor    | 副标题颜色                                                                         | string                 | -      | "#909399" |
| subTitleSize     | 副标题字体大小，单位 rpx                                                           | number\|string         | -      | "26"      |
| index            | 用于标识点击了第几个                                                               | number\|string\|object | -      | ""        |
| margin           | 用于隔开上下左右的边距，带单位的写法，如："30rpx 30rpx"，"20rpx 20rpx 30rpx 30rpx" | string                 | -      | "0"       |
| borderRadius     | card 卡片的圆角                                                                    | number\|string         | -      | "16"      |
| headStyle        | 头部自定义样式，对象形式                                                           | object                 | -      | {}        |
| bodyStyle        | 主体自定义样式，对象形式                                                           | object                 | -      | {}        |
| footStyle        | 底部自定义样式，对象形式                                                           | object                 | -      | {}        |
| headBorderBottom | 头部是否下边框                                                                     | boolean                | -      | true      |
| footBorderTop    | 底部是否有上边框                                                                   | boolean                | -      | true      |
| thumb            | 标题左边的缩略图                                                                   | string                 | -      | ""        |
| thumbWidth       | 缩略图宽高，单位 rpx                                                               | string\|number         | -      | "60"      |
| thumbCircle      | 缩略图是否为圆形                                                                   | boolean                | -      | false     |
| padding          | 给 head，body，foot 的内边距                                                       | string\|number         | -      | "30"      |
| showHead         | 是否显示头部                                                                       | boolean                | -      | true      |
| showFoot         | 是否显示尾部                                                                       | boolean                | -      | true      |
| boxShadow        | 卡片外围阴影，字符串形式                                                           | string                 | -      | "none"    |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| click      |            |
| head-click |            |
| body-click |            |
| foot-click |            |

## Slots

| Name | Description | Bindings |
| ---- | ----------- | -------- |
| head |             |          |
| body |             |          |
| foot |             |          |

---
