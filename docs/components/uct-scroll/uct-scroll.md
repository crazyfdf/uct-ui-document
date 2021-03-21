# uct-scroll

## Props

| Prop name    | Description | Type              | Values | Default                             |
| ------------ | ----------- | ----------------- | ------ | ----------------------------------- |
| searchOption |             |                   | -      |                                     |
| tabOption    |             |                   | -      |                                     |
| scrollOption |             |                   | -      |                                     |
| tabs         |             | array             | -      | []                                  |
| search       |             | boolean           | -      | function() {<br> return false;<br>} |
| url          |             | string            | -      | function() {<br> return "";<br>}    |
| more         |             | Object \| Boolean | -      | function() {<br> return {};<br>}    |
| tabIndex     |             | number            | -      | 0                                   |

## Events

| Event name   | Properties | Description |
| ------------ | ---------- | ----------- |
| change       |            |
| moreChange   |            |
| success      |            |
| downCallback |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| more    |             |          |
| default |             |          |

---
