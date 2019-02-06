import React, { Component } from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import Rodal from "rodal";
import logo from "../../assets/images/logo-text.png";
import whiteLogo from "../../assets/images/logo-text-white.png";
import Button from "./Button";
import {
  HOME_PAGE_ROUTE,
  EVENTS_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
} from "./consts/routes";

// TODO remove this
import "rodal/lib/rodal.css";
import MailingListSection from "../components/MailingListSection";

const PACKAGE_NAME = "header-component";
const TRANSPARENT_NAV_BAR_CLASS = "is-transparent";


class Header extends Component {
  handleMobileNavClick = () => {
    const menu = document.querySelector(".navbar-burger");

    if (menu) {
      menu.addEventListener("click", () => {
        this.setState({ isDropDownOpen: !this.state.isDropDownOpen }, () => this.toggleMobileMenu(menu));
      });
    }
  }

  toggleMobileMenu(menu) {
    const target = document.getElementById(menu.dataset.target);

    menu.classList.toggle("is-active");
    target.classList.toggle("is-active");
  }

  componentDidMount() {
    this.handleMobileNavClick();
  }

  componentWillUnmount() {
    const menu = document.querySelector(".navbar-burger");

    menu.removeEventListener("click", () => {
      this.setState({ isDropDownOpen: !this.state.isDropDownOpen }, () => this.toggleMobileMenu(menu));
    });
  }

  state = {
    isModalVisible: false,
    isDropDownOpen: false,
  }
  

  getClassNames = (isTransparent) => {
    return (
      classNames(
        PACKAGE_NAME,
        "navbar",
        "is-fixed-top",
        isTransparent && !this.state.isDropDownOpen && TRANSPARENT_NAV_BAR_CLASS,
        this.state.isDropDownOpen && "is-navbar-menu-active",
      )
    );
  }

  renderMobileMenu = () => {
    return (
      <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    );
  }
  
  renderMenuItem = (to, text) => {
    return (
      <div className="navbar-item text-link">
        <Link to={to}>
          {text}
        </Link>
      </div>
    );
  }

  
  renderMenu = (isTransparent) => {
    return (
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start" />
        <div className="navbar-end">
          {this.renderMenuItem(HOME_PAGE_ROUTE, "Home")}
          {this.renderMenuItem(EVENTS_PAGE_ROUTE, "Events")}
          {this.renderMenuItem(ABOUT_PAGE_ROUTE, "About")}
          {this.renderMenuItem(CONTACT_PAGE_ROUTE, "Contact")}
          <div className="navbar-item" href="https://bulma.io/">
            <Button
              text="Keep In Touch"
              raised={!isTransparent || this.state.isDropDownOpen}
              isWhite={isTransparent && !this.state.isDropDownOpen}
              hasShadow
              isTertiary
              onPress={() => this.setState({ isModalVisible: true })}
            />
          </div>
        </div>
      </div>
    );
  }

  renderModal = () => {
    return (
      <Rodal visible={this.state.isModalVisible} onClose={() => this.setState({ isModalVisible: false })}>
        <MailingListSection isInModal />
      </Rodal>
    )
  }

  render() {
    const { isTransparent } = this.props;

    return (
      <nav className={this.getClassNames(isTransparent)} role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item logo-container" to="/">
              <img src={whiteLogo} className="logo white-logo" alt="Animation Guild at UT Dallas" />
              <img src={logo} className="logo colored-logo" alt="Animation Guild at UT Dallas" />
            </Link>
            {this.renderMobileMenu()}
          </div>
          {this.renderMenu(isTransparent)}
        </div>
        {this.renderModal()}
      </nav>
    );
  }
}

export default Header;
