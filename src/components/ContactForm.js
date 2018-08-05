import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import SectionHeader from "../common/SectionHeader";

const PACKAGE_NAME = "contact-form-component";

const ContactForm = () => (
  <section className={PACKAGE_NAME}>
    <SectionHeader text="Lorem Ipsum Kitty Pasta" />
    <div className="container">
      <form action="/success" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <Input type="hidden" name="bot-field" />
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
        <Button text="Submit" raised />
      </form>
    </div>
  </section>
);

export default ContactForm;
