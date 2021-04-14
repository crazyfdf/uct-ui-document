# FormItem 子表单

> 表单子组件，为 uct-form 表单组件提供支持，内部包括标题，输入框，选择器，选择框，上传文件，分割线，开关，警告提示，提示语，下划线等组件。

## Props

| Prop name   | Description                            | Type    | Values                                                                                                                                                                                                                                                                                                                                                                                     | Default                                                                                               |
| ----------- | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| item        | horizontal 左右布局，vertical 上下布局 | object  | `{"type": "input"`, `"label": "输入框"`, `"icon": "icon-write"`, `"options": {"type": "text"`, `"width": "100%"`, `"defaultValue": ""`, `"placeholder": "请输入"`, `"clearable": false`, `"maxLength": null`, `"hidden": false`, `"disabled": false}`, `"model": "input_1612861962073"`, `"key": "input_1612861962073"`, `"rules": [{"required": false`, `"message": "必填项"}]}`, `` | {} |
| config      | horizontal 左右布局，vertical 上下布局 | object  | -                                                                                                                                                                                                                                                                                                                                                                                          | { layout: "vertical", hideRequiredMark: false }                                                       |
| isborder    | 是否显示表单域的边框                   | boolean | -                                                                                                                                                                                                                                                                                                                                                                                          | true                                                                                                  |
| customStyle | title 的自定义样式                     | object  | -                                                                                                                                                                                                                                                                                                                                                                                          | {<br> backgroundColor: "rgba(246, 246, 246, 1)",<br> padding: "20rpx 40rpx",<br> width: "100vw",<br>} |

## Events

| Event name | Properties                      | Description                  |
| ---------- | ------------------------------- | ---------------------------- |
| fileValue  |                                 |
| input      | **data** `object` - {key:value} | 当组件内容发生改变时传递参数 |
| mapData    |                                 |

---

<!--
 * @Author: your name
 * @Date: 2021-04-13 16:05:26
 * @LastEditTime: 2021-04-13 16:05:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \UC-font\components\uct\components\uct-button\uct-button.md
-->
