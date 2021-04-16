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
 * @Version: 1.0.0
 * @Author: 祸灵
 * @LastEditors: 祸灵
 * @Date: 2021-04-13 16:08:09
 * @LastEditTime: 2021-04-15 17:51:08
 * @Description:
-->

## Form 使用方法

**注意**：formData 表单数据是通过表单设计器 k-form-design 拿到的。推荐使用 k-form-design 快速部署您的表单页面。使用地址：http://cdn.kcz66.com/k-form-design.html

```vue
<uct-form
  class="px40"
  :formData="formData"
  :url="url"
  @submit="submit"
></uct-form>
```

```js
export default {
  data() {
    return {
      formData: require("@/config/form.json"), //表单数据

      url: "system/uploadPartnerByProject" //表单提交地址
    };
  },
  methods: {
    // 成功回调
    submit(data) {
      setTimeout(() => {
        uni.navigateBack({
          delta: 1
        });
      }, 1000);
    }
  }
};
```
