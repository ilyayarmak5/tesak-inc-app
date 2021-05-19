import { DiGulp } from "react-icons/di";
import {
  FaReact,
  FaSass,
  FaNpm,
  FaTelegramPlane,
  FaElementor,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPython,
  SiBootstrap,
  SiUpwork,
  SiFacebook,
  SiDribbble,
  SiGmail,
  SiGithub,
  SiJquery,
  SiWebpack,
  SiFigma,
  SiWordpress,
  SiPhp,
  SiCss3,
  SiLaravel,
  SiAdobephotoshop,
  SiDjango,
  SiHtml5,
  SiFlask,
} from "react-icons/si";

import { AiOutlineInstagram } from "react-icons/ai";

import dude from "../assets/img/dude.jpg";
import expertOneImg from "../assets/img/experts/ilya-yarmak.jpg";
import expertThreeImg from "../assets/img/experts/peter-haretski.jpg";

const skillIconSize = "60%";

const experts = [
  {
    id: 1,
    url: "/expert/1",
    header: "Ilya Yarmak",
    about: [
      "Hello there!",
      "I provide pixel-perfect frontend development. It's my true passion to cooperate with designers and incarnate their ideas into real application which can be used by others worldwide. I can also bring my own design concepts based on client's desires.",
    ],
    specialization: "Frontend Developer",
    name: "Ilya Yarmak",
    text: "Frontend developer with a keen eye for small details.",
    image: expertOneImg,
    email: "ilyameister5@gmail.com",
    skills: [
      () => {
        return <SiJavascript size={skillIconSize} />;
      },
      () => {
        return <FaReact size={skillIconSize} />;
      },
      () => {
        return <SiJquery size={skillIconSize} />;
      },
      () => {
        return <SiPython size={skillIconSize} />;
      },
      () => {
        return <FaSass size={skillIconSize} />;
      },
      () => {
        return <FaNpm size={skillIconSize} />;
      },
      () => {
        return <SiBootstrap size={skillIconSize} />;
      },
      () => {
        return <SiGithub size={skillIconSize} />;
      },
      () => {
        return <SiWebpack size={skillIconSize} />;
      },
    ],
    contacts: [
      () => {
        return (
          <a
            href="https://www.upwork.com/freelancers/~01f52705be736e6f54"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiUpwork className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://t.me/ilyayarmak5"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <FaTelegramPlane className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://www.instagram.com/ilya.yarmak5/"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <AiOutlineInstagram className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://www.facebook.com/ilya.yarmak.399/"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiFacebook className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="mailto:ilyameister5@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiGmail className="contact-icon" />
          </a>
        );
      },
    ],
  },
  {
    id: 2,
    url: "/expert/2",
    header: "Yegor Severin",
    about: [
      `Experienced Social Media Designer / UX UI Designer in creating infographics. Making simple things out of complex ones and turning "heavy" numbers into a design that is concise, informative, and simultaneously dynamic is what I'm really good at.`,
      `I have an understanding of UX/UI. I think through the navigation and movement of the user down to the smallest detail. I create an effective interface that not only provides user comfort, but also encourages the target audience to perform targeted actions (buying products, subscribing to a mailing list, etc.).
      Be more of analytical type helps me get people into my audience and focus on getting people interested in products.`,
    ],
    specialization: "UX / UI Designer",
    name: "Yegor Severin",
    text:
      "Experienced Social Media Designer / UX UI Designer in creating infographics.",
    image: dude,
    email: "diegoys@mail.ru",
    skills: [
      () => {
        return <SiFigma size={skillIconSize} />;
      },
      () => {
        return <SiAdobephotoshop size={skillIconSize} />;
      },
    ],
    contacts: [
      () => {
        return (
          <a
            href="https://www.upwork.com/freelancers/~01c6e2d9ffc76e9144"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiUpwork className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://t.me/ddiegoys"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <FaTelegramPlane className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://www.instagram.com/ddiegoys"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <AiOutlineInstagram className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://www.facebook.com/diego.ys.1023"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiFacebook className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://dribbble.com/diegoys"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiDribbble className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="mailto:diego.ys@mail.ru"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiGmail className="contact-icon" />
          </a>
        );
      },
    ],
  },
  {
    id: 3,
    url: "/expert/3",
    header: "Peter Haretski",
    about: [
      `It is my true passion to analyze the website for weak areas and proceeding with the fixes accordingly. I hold 3+ years of experience in providing excellence and simplicity in the field of web optimization to my clients.`,
      `Perhaps you can find yourself in a situation where optimization plugins may cost a fortune, but would they work?
      I am the right person when it comes to code optimization (reducing the DOM loading time, deleting unused lines of code), SEO optimization, image compression, installation of CDN, file compression. It is rather important to mention that my true strive lies beneath analyzing custom-made WP themes/plugins for any sort of mistakes that may occur in the long run.`,
      `Most of my previous work allowed me to expand in taxonomies, CSS/HTML/JS file reduction, achieving excellent scores on Google Pagespeed Insights, fixing a dozen of websites from server errors, editing custom made themes/plugins, sharpening the eye on the responsiveness of the website and migrating multiple websites onto Cloudflare CDN.`,
      `Feeling worried that your website is too complicated and you would have to spend time choosing the right candidate? Whenever I work with your website, my work is documented in the format that you prefer. I never waste anyone's time as loyalty is my number one priority.`,
    ],
    specialization: "WordPress | Website Optimization Specialist",
    name: "Peter Haretski",
    text:
      "WordPress specialist with enormous experience in custom coding, SEO, theme/plugins optimization. 3+ years of providing elegant and efficient solutions to complex projects with heavy-based custom code.",
    image: expertThreeImg,
    email: "peterthepanda8453@gmail.com",
    skills: [
      () => {
        return <SiWordpress size={skillIconSize} />;
      },
      () => {
        return <FaElementor size={skillIconSize} />;
      },

      () => {
        return <SiPhp size={skillIconSize} />;
      },
      () => {
        return <SiLaravel size={skillIconSize} />;
      },

      () => {
        return <SiCss3 size={skillIconSize} />;
      },
    ],
    contacts: [
      () => {
        return (
          <a
            href="https://www.upwork.com/freelancers/~01e4c3ae851bb3872c"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiUpwork className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://t.me/bronig"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <FaTelegramPlane className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://www.instagram.com/paaanduuuh"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <AiOutlineInstagram className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://www.facebook.com/piotr.gorecki.927543"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiFacebook className="contact-icon" />
          </a>
        );
      },

      () => {
        return (
          <a
            href="mailto:peterthepanda8453@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiGmail className="contact-icon" />
          </a>
        );
      },
    ],
  },
  {
    id: 4,
    url: "/expert/4",
    header: "Michael Tarchyla",
    about: [`About me`],
    specialization: "Full Stack Developer",
    name: "Michael Tarchyla",
    text: "Small Text.",
    image: dude,
    email: "bigapplematthias@gmail.com",
    skills: [
      () => {
        return <SiPython size={skillIconSize} />;
      },
      () => {
        return <SiDjango size={skillIconSize} />;
      },
      () => {
        return <SiFlask size={skillIconSize} />;
      },
      () => {
        return <DiGulp size={skillIconSize} />;
      },
      () => {
        return <SiGithub size={skillIconSize} />;
      },

      () => {
        return <SiHtml5 size={skillIconSize} />;
      },

      () => {
        return <SiCss3 size={skillIconSize} />;
      },
    ],
    contacts: [
      () => {
        return (
          <a
            href="https://www.upwork.com/o/profiles/users/~01a0603d797204f345/"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiUpwork className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://t.me/michaelanat"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <FaTelegramPlane className="contact-icon" />
          </a>
        );
      },
      () => {
        return (
          <a
            href="https://instagram.com/michaelantt?igshid=m3bod6qxk1pt"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <AiOutlineInstagram className="contact-icon" />
          </a>
        );
      },

      () => {
        return (
          <a
            href="mailto:bigapplematthias@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="expert-contact-link"
          >
            <SiGmail className="contact-icon" />
          </a>
        );
      },
    ],
  },
];

export default experts;
