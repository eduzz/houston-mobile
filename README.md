# Eduzz Houston Mobile


[![Publish](https://github.com/eduzz/houston/actions/workflows/master.yml/badge.svg)](https://github.com/eduzz/houston/actions/workflows/master.yml) [![version](https://img.shields.io/npm/v/@eduzz/houston)](https://www.npmjs.com/package/@eduzz/houston-mobile)

<img src="example/src/assets/welcome.svg" width="100%" />

## Installation

```sh
yarn add @eduzz/houston-mobile
```

## Usage

```js
import { Modal } from '@eduzz/houston-mobile';

// ...

<Modal visible={visible} onRequestClose={closeModal}>
  ...
</Modal>
```

## Examples

```sh
# Android app
yarn example android
# iOS app
yarn example ios
```

## Components

* [Modal](https://github.com/eduzz/houston-mobile/tree/master/src/Modal)
* [ActionSheet](https://github.com/eduzz/houston-mobile/tree/master/src/ActionSheet)
* [ActionItem](https://github.com/eduzz/houston-mobile/tree/master/src/ActionSheet/ActionItem)

## Helpers

* [ScreenScale](https://github.com/eduzz/houston-mobile/blob/add-screenScale/src/helpers/screenScale.ts)


## License

MIT
