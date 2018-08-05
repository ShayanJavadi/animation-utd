import React from "react";
import classNames from "classnames";

const PACKAGE_NAME = "anchor-component";
const ANCHOR_SECONDARY_CLASS_NAME = "is-secondary";
const ANCHOR_UNDERLINED_CLASS_NAME = "is-underlined";
const ANCHOR_UNDERLINED_SECONDARY_CLASS_NAME = "is-underlined-secondary";

const Anchor = ({
  href, className, text, isSecondary, isUnderlined, isUnderlinedSecondary,
}) => {
  const classes = classNames(
    PACKAGE_NAME,
    isSecondary && ANCHOR_SECONDARY_CLASS_NAME,
    isUnderlined && ANCHOR_UNDERLINED_CLASS_NAME,
    isUnderlinedSecondary && ANCHOR_UNDERLINED_SECONDARY_CLASS_NAME,
    className,
  );

  return (
    <div className="anchor-container">
      <a className={classes} href={href}>
        {text}
      </a>
    </div>
  );
};

export default Anchor;
