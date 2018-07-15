import React from "react";
import classNames from "classnames";

const PACKAGE_NAME = "input-component";

const classes = classNames(
  PACKAGE_NAME,
  "input",
  "is-rounded",
);

export default () => (
  <div>
    <input className={classes} type="text" placeholder="Rounded input" />
  </div>
);
