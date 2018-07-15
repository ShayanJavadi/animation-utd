import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import logo from "../../assets/images/logo-text.png";

const PACKAGE_NAME = "button-component";
const RAISED_BUTTON_CLASS = "is-raised";
const GHOST_BUTTON_CLASS = "is-ghost";
const HAS_SHADOW_CLASS = "has-shadow";
const SECONDARY_BUTTON_CLASS = "button-secondary";

const Button = ({
  raised, text, onPress, icon, hasShadow, isSecondary
}) => {
  const classes = classNames(
    PACKAGE_NAME,
    `${raised ? RAISED_BUTTON_CLASS : GHOST_BUTTON_CLASS}`,
    hasShadow && HAS_SHADOW_CLASS,
    isSecondary && SECONDARY_BUTTON_CLASS,
  );

  return (
    <div className="button-container">
      <a href={onPress} className={classes} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};

export default Button;
