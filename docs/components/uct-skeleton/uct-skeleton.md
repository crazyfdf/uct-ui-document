# Skeleton 骨架屏

> 骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。

## Props

| Prop name    | Description                                                         | Type           | Values | Default   |
| ------------ | ------------------------------------------------------------------- | -------------- | ------ | --------- |
| elColor      | 需要渲染的元素背景颜色，十六进制或者 rgb 等都可以                   | string         | -      | "#e5e5e5" |
| bgColor      | 整个骨架屏页面的背景颜色                                            | string         | -      | "#ffffff" |
| animation    | 是否显示加载动画                                                    | boolean        | -      | false     |
| borderRadius | 圆角值，只对类名为 uct-skeleton-fillet 的元素生效，为数值，不带单位 | string\|number | -      | "10"      |
| loading      | 是否显示骨架，true-显示，false-隐藏                                 | boolean        | -      | true      |

---

## Skeleton 使用方法

```vue
<template>
  <view class="uct-details">
    <!-- @slot 详情页的自定义navbar插槽 -->
    <slot name="nav"></slot>
    <view class="uct-skeleton uct-skeleton-rect" style="flex:1;width:100vw">
      <slot></slot>
    </view>
    <uct-skeleton
      :loading="loading"
      v-if="ready"
      :animation="true"
      bgColor="#FFF"
    >
    </uct-skeleton>
  </view>
</template>
```

```js
export default {
  props: {
    /** 是否加载中状态 */
    loading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      ready: false //解决h5端top值计算错误
    };
  },
  mounted() {
    this.$nextTick(() => (this.ready = true));
  }
};
```

```scss
<style scoped lang="scss">
.uct-details {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
```
