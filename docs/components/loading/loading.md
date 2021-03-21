# loading

## Props

| Prop name | Description | Type           | Values | Default  |
| --------- | ----------- | -------------- | ------ | -------- |
| msg       |             | string         | -      | "加载中" |
| type      |             | string\|number | -      | 1        |

---

```jsx static
var loading = that.$loading({
  propsData: {
    message: "要展示的信息"
  }
});
loading && loading.remove();
```

---

# 使用方法

```jsx static
import loading from "Loading_Component_Path";
Vue.use(loading);
```

```jsx static
//页面loading
let loading = this.$loading(); //显示
loading.remove(); //删除
```

```jsx static
//加载更多loading
<rLoading></rLoading>
```

- 原型链上挂载的是页面 loading 浮层， this.\$loading()
- 下拉加载更多,页面塞全局组件 rLoading
