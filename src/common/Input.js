import React from "react";
import classNames from "classnames";

const PACKAGE_NAME = "input-component";

const inputClasses = classNames(
  PACKAGE_NAME,
  "input",
  "is-rounded",
);

const textAreaClasses = classNames(
  PACKAGE_NAME,
  "textarea",
);

export default props => (
  <div className="input-container">
    {
      props.isTextArea
        ? <textarea className={textAreaClasses} name="" id="" cols="30" rows="10" />
        : <input className={inputClasses} {...props} />
    }
  </div>
);
