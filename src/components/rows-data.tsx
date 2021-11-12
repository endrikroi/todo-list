import React, { FunctionComponent } from "react";

export const RowsData: FunctionComponent<{ value: string }> = (props) => {
  return <span>{props.value}</span>;
};
