import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import logo from "../../assets/images/logo-text.png";

const PACKAGE_NAME = "button-component";
const RAISED_BUTTON_CLASS = "is-raised";
const GHOST_BUTTON_CLASS = "is-ghost";
const HAS_SHADOW_CLASS = "has-shadow";

const Header = ({
  raised, text, onPress, icon, hasShadow,
}) => {
  const classes = classNames(
    PACKAGE_NAME,
    `${raised ? RAISED_BUTTON_CLASS : GHOST_BUTTON_CLASS}`,
    hasShadow && HAS_SHADOW_CLASS,
  );

  return (
    <a onClick={onPress} className={classes}>
      {text}
    </a>
  );
};

export default Header;
