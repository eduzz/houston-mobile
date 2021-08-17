import * as React from "react";

import { IModal, Modal } from "..";

const ActionSheet = (props: IModal) => {
  return <Modal {...props}>{props.children}</Modal>;
};

export default ActionSheet;
