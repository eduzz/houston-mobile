# ActionSheet

The ActionSheet presents options to the user in an intuitive way.

## Import

```js
import { ActionSheet } from '@eduzz/houston-mobile';
```

## Usage

```js
<ActionSheet visible={visible} onRequestClose={closeModal}>
  ...
</ActionSheet>
```

## Props

| prop | type | required | default |
| ---- | ---- | -------- | ------- |
| visible | `boolean` | `true` | - |
| backgroundColor | `string` | `false` | `transparent` |
| onRequestClose  | `() => void` | `false` | - |
| onFinishClosing | `() => void` | `false` | - |