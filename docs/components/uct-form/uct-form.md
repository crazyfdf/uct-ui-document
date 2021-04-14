# Form 表单

> 表单业务组件，专门为表单而设计的，利用它可以快速实现表单验证、提交、增删改查等功能。

## Props

| Prop name | Description                            | Type   | Values        | Default |
| --------- | -------------------------------------- | ------ | ------------- | ------- |
| more      | form 提交其他参数                      | object | `{key:value}` | {}      |
| formData  | 直接拿到 form 数据和 form 表单名二选一 | object | -             | {}      |
| name      | 通过 form 表单名拿到 from 数据         | string | -             | ""      |
| form_id   | form id 修改表单时拿到初始值用         | string | -             | ""      |
| url       | 提交 url                               | string | -             | ""      |

## Events

| Event name | Properties                       | Description  |
| ---------- | -------------------------------- | ------------ |
| submit     | **data** `object` - 表单提交数据 | 表单提交事件 |

## Slots

| Name | Description                                  | Bindings |
| ---- | -------------------------------------------- | -------- |
| more | 自定义的其他表单组件，提交参数通过 more 传递 |          |

---

<!--
 * @Author: your name
 * @Date: 2021-04-13 16:05:26
 * @LastEditTime: 2021-04-13 16:05:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \UC-font\components\uct\components\uct-button\uct-button.md
-->
