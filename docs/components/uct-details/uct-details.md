# Details 详情

详情页面布局模板

## Props

| Prop name | Description    | Type    | Values | Default |
| --------- | -------------- | ------- | ------ | ------- |
| loading   | 是否加载中状态 | boolean | -      | true    |

## Slots

| Name    | Description                | Bindings |
| ------- | -------------------------- | -------- |
| nav     | 详情页的自定义 navbar 插槽 |          |
| default | 详情页内容插槽             |          |

---

## Details 使用方法

```vue
<uct-details :loading="loading">
  <uct-nav slot="nav">
    <view slot="center"
          class="f16 f700">Details详情</view>
  </uct-nav>
  <view>
    Details内容
  </view>
</uct-details>
```

```js
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
};
```
