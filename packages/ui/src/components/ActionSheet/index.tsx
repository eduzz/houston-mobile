import * as React from "react";

import Modal, { ModalProps } from "../Modal";

const ActionSheet = (props: ModalProps) => {
  return <Modal {...props}>{props.children}</Modal>;
};

export default ActionSheet;
