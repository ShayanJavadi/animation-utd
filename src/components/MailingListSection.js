import React from "react";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import Row from "../common/Row";

const PACKAGE_NAME = "mailing-list-section-component";

const MailingListSection = () => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <SectionHeader text="Join our mailing list">
        <Row>
          <Input />
          <Button text="Add me!" raised hasShadow />
        </Row>
      </SectionHeader>
    </div>
  </section>
);

export default MailingListSection;
