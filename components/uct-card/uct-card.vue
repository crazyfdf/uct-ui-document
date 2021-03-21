<template>
  <view class='work-card mb40'>
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: "uct-card",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.work-card {
  position: relative;
  padding: 32rpx 16rpx;
  background-color: #fff;
  border-radius: 24rpx;
  box-sizing: border-box;
}
</style>
