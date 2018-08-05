import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import SectionHeader from "../common/SectionHeader";

const PACKAGE_NAME = "contact-form-component";

const ContactForm = () => (
  <section className={PACKAGE_NAME}>
    <SectionHeader text="Lorem Ipsum Kitty Pasta" />
    <div className="container">
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </section>
);

export default ContactForm;
