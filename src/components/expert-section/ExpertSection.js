import { useData } from "../../data/DataProvider";

import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Skills from "./Skills";

import Fade from "react-reveal/Fade";
import DynamicScrollToTop from "../DynamicScrollToTop";

const ExpertSection = () => {
  const { name, image, specialization, contacts } = useData();

  return (
    <main className="expert-section-container">
      <DynamicScrollToTop />
      <section className="expert-section-top-container">
        <div className="expert-section-img">
          <img src={image} alt="expert-img" />
        </div>
        <div className="expert-section-top-desc-container">
          <h1>{name}</h1>
          <p className="expert-specialization">{specialization}</p>
          <Skills />
        </div>
      </section>
      <section className="expert-section-bottom-container">
        <Fade bottom>
          <AboutMe />
        </Fade>
        <Fade bottom>
          <Contacts contacts={contacts} />
        </Fade>
      </section>
    </main>
  );
};

export default ExpertSection;
