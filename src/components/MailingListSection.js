import React, { Component } from "react";
import { toUpper } from "lodash";
import addToMailchimp from "gatsby-plugin-mailchimp";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import Row from "../common/Row";
import Anchor from "../common/Anchor";

const PACKAGE_NAME = "mailing-list-section-component";
const SECTION_HEADER_CLASS_NAME = "mailing-list-section-header";

class MailingListSection extends Component {
  state = {
    email: null,
    result: null,
  }

  // TODO: fix this by adding the required fields for the form
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    addToMailchimp("shayanjavadi1375@gmail.com")
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg,
          })
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`,
            msg: result.msg,
          })
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          msg: err,
        })
      })
  }

  render() {
    return (
      <section className={PACKAGE_NAME}>
        <div className="container">
          <SectionHeader text="Join our mailing list" className={SECTION_HEADER_CLASS_NAME}>
            <Row className="input-row">
              <div className="email-input-container">
                <Input placeholder="example@domain.com" onChange={e => this.setState({ email: e.target.value })} />
              </div>
              <div className="add-button-container">
                <Button text="Add me!" onPress={this.handleSubmit} type="submit" raised hasShadow hasDarkShadow />
              </div>
            </Row>
            <Row className="links-row">
              <Anchor text={toUpper("facebook")} isSecondary isUnderlined />
              <Anchor text={toUpper("contact")} isSecondary isUnderlined />
            </Row>
          </SectionHeader>
        </div>
      </section>
    )
  }
};

export default MailingListSection;
