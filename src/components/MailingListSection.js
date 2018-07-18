import React from "react";
import { toUpper } from "lodash";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import Row from "../common/Row";
import Anchor from "../common/Anchor";

const PACKAGE_NAME = "mailing-list-section-component";
const SECTION_HEADER_CLASS_NAME = "mailing-list-section-header";

const MailingListSection = () => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <SectionHeader text="Join our mailing list" className={SECTION_HEADER_CLASS_NAME}>
        <Row className="input-row">
          <div className="email-input-container">
            <Input placeholder="example@domain.com" />
          </div>
          <div className="add-button-container">
            <Button text="Add me!" raised hasShadow hasDarkShadow />
          </div>
        </Row>
        <Row className="links-row">
          <Anchor text={toUpper("facebook")} isSecondary isUnderlined />
          <Anchor text={toUpper("contact")} isSecondary isUnderlined />
        </Row>
      </SectionHeader>
    </div>
  </section>
);

export default MailingListSection;
