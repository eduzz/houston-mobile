# Modal

The base Modal with all the animations and props required to create native components

## Import

```js
import { Modal } from '@eduzz/houston-mobile';
```

## Usage

```js
<Modal visible={visible} onRequestClose={closeModal}>
  ...
</Modal>
```

## Props

| prop | type | required | default |
| ---- | ---- | -------- | ------- |
| visible | `boolean` | `true` | - |
| backgroundColor | `string` | `false` | `transparent` |
| onRequestClose  | `() => void` | `false` | - |
| onFinishClosing | `() => void` | `false` | - |