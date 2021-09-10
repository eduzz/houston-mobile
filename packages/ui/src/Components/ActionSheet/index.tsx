import * as React from "react";

import Modal, { IModal } from "../Modal";

const ActionSheet = (props: IModal) => {
  return <Modal {...props}>{props.children}</Modal>;
};

export default ActionSheet;
