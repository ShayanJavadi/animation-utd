import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import SectionHeader from "../common/SectionHeader";

const PACKAGE_NAME = "contact-form-component";

const ContactForm = () => (
  <section className={PACKAGE_NAME}>
    <SectionHeader text="Keep In Touch" />
    <div className="container">
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div className="field half first">
          <label htmlFor="name">
            Name*
          </label>
          <Input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <div className="field half">
          <label htmlFor="email">
            Email*
          </label>
          <Input type="text" name="email" id="email" placeholder="example@domain.com" />
        </div>
        <div className="field">
          <label htmlFor="message">
            Message*
          </label>
          <Input name="message" id="message" rows="6" isTextArea />
        </div>
        <Button type="submit" text="Submit" raised />
      </form>
    </div>
  </section>
);

export default ContactForm;
