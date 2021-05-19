import React from "react";
import SloganContainer from "./slogan/SloganContainer";
import AboutContainer from "./about/AboutContainer";
import TeamContainer from "./team/TeamContainer";
import ProjectsContainer from "./projects/ProjectsContainer";
import ContactBtn from "../buttons/ContactBtn";
import DynamicScrollToTop from "../DynamicScrollToTop";

const HomeSection = () => {
  return (
    <main>
      <DynamicScrollToTop />
      <SloganContainer />
      <AboutContainer />
      <TeamContainer />
      <ProjectsContainer />
      <ContactBtn />
    </main>
  );
};

export default HomeSection;
