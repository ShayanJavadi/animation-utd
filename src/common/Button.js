import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import DownArrow from "react-icons/lib/fa/sort-desc";
import logo from "../../assets/images/logo-text.png";

const PACKAGE_NAME = "button-component";
const RAISED_BUTTON_CLASS = "is-raised";
const GHOST_BUTTON_CLASS = "is-ghost";
const HAS_SHADOW_CLASS = "has-shadow";
const HAS_DARK_SHADOW_CLASS = "dark-shadow";
const SECONDARY_BUTTON_CLASS = "button-secondary";
const WHITE_BUTTON_CLASS = "button-white";
const DISABLED_BUTTON_CLASS = "disabled-button";
const TERTIARY_BUTTON_CLASS = "is-tertiary";

const renderDownArrow = () => (
  <span className="down-arrow">
    <DownArrow />
  </span>
);

const Button = (props) => {
  const {
    raised,
    text,
    href,
    onPress,
    icon,
    hasShadow,
    hasDarkShadow,
    isSecondary,
    className,
    isWhite,
    hasDownArrow,
    isTertiary,
    disabled,
  } = props;
  const classes = classNames(
    PACKAGE_NAME,
    `${raised ? RAISED_BUTTON_CLASS : GHOST_BUTTON_CLASS}`,
    hasShadow && HAS_SHADOW_CLASS,
    hasDarkShadow && HAS_DARK_SHADOW_CLASS,
    isSecondary && SECONDARY_BUTTON_CLASS,
    isWhite && WHITE_BUTTON_CLASS,
    disabled && DISABLED_BUTTON_CLASS,
    isTertiary && TERTIARY_BUTTON_CLASS,
    className,
  );

  return (
    <div className="button-container">
      <button {...props} href={href} onClick={onPress} className={classes} target="_blank" rel="noopener noreferrer">
        {text}
        {hasDownArrow && renderDownArrow()}
      </button>
    </div>
  );
};

export default Button;
