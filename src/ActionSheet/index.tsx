import * as React from 'react';
import { IModal, Modal } from '@eduzz/houston-mobile';

const ActionSheet = (props: IModal) => {
  return <Modal {...props}>{props.children}</Modal>;
};

export default ActionSheet;
