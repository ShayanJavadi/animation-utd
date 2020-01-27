import React, { Component } from "react";
import { toUpper, isEmpty } from "lodash";
import addToMailchimp from "gatsby-plugin-mailchimp";
import classNames from "classnames";
import FacebookIcon from "react-icons/lib/fa/facebook-square";
import MailIcon from "react-icons/lib/fa/envelope";
import InstagramIcon from "react-icons/lib/fa/instagram";
//import DiscordIcon from "react-icons/lib/fa/discord";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import Row from "../common/Row";
import Anchor from "../common/Anchor";
import HTMLContent from "../common/HTMLContent";
/*
<a href="https://discord.gg/APdaNBb" target="_blank" rel="noopener noreferrer">
              <DiscordIcon />
            </a>
*/

const PACKAGE_NAME = "mailing-list-section-component";
const SECTION_HEADER_CLASS_NAME = "mailing-list-section-header";

class MailingListSection extends Component {
  state = {
    email: null,
    result: null,
    message: ""
  };

  resetState = () =>
    setTimeout(() => this.setState({ result: null, message: "" }), 3000);

  // TODO: fix this by adding the required fields for the form
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    try {
      addToMailchimp(this.state.email, { FNAME: "N-A", LNAME: "N-A" })
        .then(result => {
          // Mailchimp always returns a 200 response
          // So we check the result for MC errors & failures
          if (result.result !== `success`) {
            this.setState(
              {
                status: `error`,
                message: result.msg
              },
              this.resetState
            );
          } else {
            // Email address succesfully subcribed to Mailchimp
            this.setState(
              {
                status: `success`,
                message: result.msg
              },
              this.resetState
            );
          }
        })
        .catch(err => {
          // Network failures, timeouts, etc
          this.setState(
            {
              status: `error`,
              message: err
            },
            this.resetState
          );
        });
    } catch (error) {
      this.setState(
        {
          status: `error`,
          message: "Invalid email entered"
        },
        this.resetState
      );
    }
  };

  renderContent() {
    return (
      <SectionHeader
        text="Join our mailing list"
        className={classNames(
          SECTION_HEADER_CLASS_NAME,
          this.props.isInModal && "is-in-modal"
        )}
      >
        <HTMLContent html={this.state.message} />
        <Row className="input-row">
          <div className="email-input-container">
            <Input
              placeholder="example@domain.com"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="add-button-container">
            <Button
              text="Add me!"
              onPress={this.handleSubmit}
              type="submit"
              raised
              hasShadow
              hasDarkShadow
              disabled={isEmpty(this.state.email)}
            />
          </div>
        </Row>
        {this.props.isInModal ? (
          <Row className="links-row">
            <a
              href="https://www.facebook.com/animationutd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="mailto:utdanimationguild@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailIcon />
            </a>
            <a
              href="https://www.instagram.com/utdallas_ag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </Row>
        ) : (
          <Row className="links-row" />
        )}
      </SectionHeader>
    );
  }

  render() {
    if (this.props.isInModal) {
      return this.renderContent();
    }

    return (
      <section className={PACKAGE_NAME}>
        <div className="container">{this.renderContent()}</div>
      </section>
    );
  }
}

export default MailingListSection;
