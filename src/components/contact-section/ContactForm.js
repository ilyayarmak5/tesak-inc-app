import { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

import SubmitBtn from "../buttons/SubmitBtn";
import Modal from "./Modal";

init("user_308I8Bx0Z6LnvOTTvGSRZ");

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [eMail, setEMail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "gmail",
      "tesakForm",
      e.target,
      "user_308I8Bx0Z6LnvOTTvGSRZ"
    );

    setIsSubmitted(true);
    setFName("");
    setSName("");
    setEMail("");
    setPhone("");
    setCompany("");
    setText("");
  };

  const handleOnChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="contact-form">
        <article className="contact-form-two-col">
          <input
            name="fName"
            id="fName"
            placeholder="First Name...*"
            required
            value={fName}
            onChange={(e) => handleOnChange(e, setFName)}
          />
          <input
            name="sName"
            id="sName"
            placeholder="Second Name...*"
            required
            value={sName}
            onChange={(e) => handleOnChange(e, setSName)}
          />
        </article>
        <article className="contact-form-two-col">
          <input
            name="eMail"
            id="eMail"
            placeholder="E-Mail...*"
            required
            value={eMail}
            onChange={(e) => handleOnChange(e, setEMail)}
          />
          <input
            name="phone"
            id="phone"
            placeholder="Phone..."
            type="number"
            value={phone}
            onChange={(e) => handleOnChange(e, setPhone)}
          />
        </article>
        <article className="contact-form-one-col">
          <input
            name="company"
            id="company"
            placeholder="Company..."
            value={company}
            onChange={(e) => handleOnChange(e, setCompany)}
          />
        </article>
        <article className="contact-form-one-col">
          <select name="subject" id="subject" required>
            <option value="" disabled selected style={{ color: "grey" }}>
              I'd like to talk about...*
            </option>
            <option value="contracting">Contracting with Tesak Inc.</option>
            <option value="joining">Joining the Tesak Inc. Team</option>
            <option value="working">Working Together</option>
            <option value="smthElse">Something Else</option>
          </select>
        </article>
        <textarea
          name="message"
          id="message"
          placeholder="Your message...*"
          required
          value={text}
          onChange={(e) => handleOnChange(e, setText)}
        ></textarea>
        <SubmitBtn />
      </form>
      <Modal isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
    </>
  );
};

export default ContactForm;
