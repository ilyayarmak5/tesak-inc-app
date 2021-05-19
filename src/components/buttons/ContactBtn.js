import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Jump from "react-reveal/Jump";

const ContactBtn = () => {
  return (
    <section className="contact-btn-container">
      <Link to="/contact" className="contact-btn">
        <Jump>
          <h3>Contact</h3>
        </Jump>
        <HiOutlineArrowNarrowRight className="contact-arrow" />
      </Link>
    </section>
  );
};

export default ContactBtn;
