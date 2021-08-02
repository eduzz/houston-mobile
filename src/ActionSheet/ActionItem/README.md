# ActionItem

The ActionItem is meant to be used inside the ActionSheet to customize the options provided to the user.

## Import

```js
import { ActionSheet, ActionItem } from '@eduzz/houston-mobile';
```

## Usage

```jsx
<>
  <ActionSheet visible={visible} onRequestClose={closeModal}>
    <ActionItem title='Title 1' avoidClosing description='Example of description 1' color='#fff' />
    <ActionItem title='Title 2' description='Example of description 2' color='#fff' />
  </ActionSheet>
</>
```

## Props

| prop | type | required | default |
| ---- | ---- | -------- | ------- |
| title | `string` | `true` | - |
| description | `string` | `false` | - |
| iconElement | `ReactNode` | `false` | - |
| color | `string` | `false` | `#000` |
| backgroundColor | `string` | `false` | `transparent` |
| avoidClosing | `boolean` | `false` | `false` |
| onPress | `(event: GestureResponderEvent) => void)` | `false` | - |