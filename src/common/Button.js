import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import logo from "../../assets/images/logo-text.png";

const PACKAGE_NAME = "button-component";
const RAISED_BUTTON_CLASS = "is-raised";
const GHOST_BUTTON_CLASS = "is-ghost";
const HAS_SHADOW_CLASS = "has-shadow";
const HAS_DARK_SHADOW_CLASS = "dark-shadow";
const SECONDARY_BUTTON_CLASS = "button-secondary";

const Button = ({
  raised, text, href, onPress, icon, hasShadow, hasDarkShadow, isSecondary, className
}) => {
  const classes = classNames(
    PACKAGE_NAME,
    `${raised ? RAISED_BUTTON_CLASS : GHOST_BUTTON_CLASS}`,
    hasShadow && HAS_SHADOW_CLASS,
    hasDarkShadow && HAS_DARK_SHADOW_CLASS,
    isSecondary && SECONDARY_BUTTON_CLASS,
    className,
  );

  return (
    <div className="button-container">
      <a href={href} onClick={onPress} className={classes} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};

export default Button;
