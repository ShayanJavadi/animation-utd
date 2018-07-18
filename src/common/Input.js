import React from "react";
import classNames from "classnames";

const PACKAGE_NAME = "input-component";

const classes = classNames(
  PACKAGE_NAME,
  "input",
  "is-rounded",
);

export default ({ placeholder, type, className }) => (
  <div className="input-container">
    <input className={classes} type="text" placeholder={placeholder} />
  </div>
);
