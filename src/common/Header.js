import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import logo from "../../assets/images/logo-text.png";
import Button from "../common/Button";
import {
  HOME_PAGE_ROUTE,
  EVENTS_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
} from "./consts/routes";

const PACKAGE_NAME = "header-component";

const navClassNames = classNames(PACKAGE_NAME, "navbar", "is-fixed-top");

const renderMobileMenu = () => (
  <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

const renderMenuItem = (to, text) => (
  <div className="navbar-item text-link">
    <Link to={to}>
      {text}
    </Link>
  </div>
);

const renderMenu = () => (
  <div className="navbar-menu">
    <div className="navbar-start" />
    <div className="navbar-end">
      {renderMenuItem(HOME_PAGE_ROUTE, "Home")}
      {renderMenuItem(EVENTS_PAGE_ROUTE, "Events")}
      {renderMenuItem(ABOUT_PAGE_ROUTE, "About")}
      {renderMenuItem(CONTACT_PAGE_ROUTE, "Contact")}
      <div className="navbar-item" href="https://bulma.io/">
        <Button
          text="Keep In Touch"
          raised
          hasShadow
        />
      </div>
    </div>
  </div>
)

const Header = () => (
  <nav className={navClassNames} role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={logo} className="logo" alt="Animation Guild at UT Dallas" />
        </a>
        {renderMobileMenu()}
      </div>
      {renderMenu()}
    </div>
  </nav>
);

export default Header;
