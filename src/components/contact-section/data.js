import { FaTelegramPlane } from "react-icons/fa";
import { SiUpwork, SiGmail } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";

const contactSize = "40%";

export const contacts = [
  () => {
    return (
      <a
        href="https://www.upwork.com/ag/tesakinc/"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <SiUpwork size={contactSize} />
      </a>
    );
  },
  () => {
    return (
      <a
        href="https://www.instagram.com/tesakinc/"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <AiOutlineInstagram size={contactSize} />
      </a>
    );
  },
  () => {
    return (
      <a
        href=" https://t.me/ilyayarmak5"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <FaTelegramPlane size={contactSize} />
      </a>
    );
  },
  () => {
    return (
      <a
        href="mailto:tesak.inc@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <SiGmail size={contactSize} />
      </a>
    );
  },
];
