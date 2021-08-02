import * as React from 'react';
import { Modal, IModal as IActionSheet } from '@eduzz/houston-mobile';

export { IModal as IActionSheet } from '@eduzz/houston-mobile';

const ActionSheet = (props: IActionSheet) => {
  return <Modal {...props}>{props.children}</Modal>;
};

export default ActionSheet;
