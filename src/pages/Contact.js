import React from "react";
import Link from "gatsby-link";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ContactForm from "../components/ContactForm";
import MailingListSection from "../components/MailingListSection";

const ContactPage = () => (
  <div>
    <Header />
    <ContactForm />
    <MailingListSection />
    <Footer />
  </div>
);

export default ContactPage;
