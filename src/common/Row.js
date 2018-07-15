import React from "react";
import classNames from "classnames";

const PACKAGE_NAME = "row-component";

export default ({ children, className }) => (
  <div className={classNames(PACKAGE_NAME, className)}>
    {children}
  </div>
);
