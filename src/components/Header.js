import React from "react";
import logo from "../../assets/images/logo-text.png";
import Button from "../common/Button";

const Header = () => (
  <nav className="header-component navbar" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={logo} className="logo" alt="Animation Guild at UT Dallas" />
        </a>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start" />
        <div className="navbar-end">
          <a className="navbar-item" href="https://bulma.io/">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <a className="navbar-item" href="https://bulma.io/">
              Events
            </a>
            <a className="navbar-item" href="https://bulma.io/">
              About
            </a>
            <a className="navbar-item" href="https://bulma.io/">
              Contact
            </a>
            <a className="navbar-item" href="https://bulma.io/">
              <Button
                text="Keep In Touch"
                raised
                hasShadow
              />
            </a>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
