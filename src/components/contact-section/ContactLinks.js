import React from "react"
import { contacts } from "./data";

const ContactLinks = () => {
  return (
    <section className="contact-links-container">
      <h1>...or contact us directly</h1>
      <ul className="contact-links">
        {contacts.map((contact, index) => {
          return <li key={index}>{React.createElement(contact, null)}</li>;
        })}
      </ul>
    </section>
  );
};

export default ContactLinks;
