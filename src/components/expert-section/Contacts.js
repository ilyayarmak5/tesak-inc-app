import React from "react"
import Fade from "react-reveal/Fade";

const Contacts = ({ contacts }) => {
  return (
    <article className="expert-contacts-container">
      <h1>Contact</h1>
      <Fade bottom cascade>
        <ul className="expert-contacts">
          {contacts.map((contact, index) => {
            return <li key={index}>{React.createElement(contact, null)}</li>;
          })}
        </ul>
      </Fade>
    </article>
  );
};

export default Contacts;
