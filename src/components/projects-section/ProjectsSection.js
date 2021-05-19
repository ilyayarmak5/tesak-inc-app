import React from "react";
import CardsContainer from "../cards/CardsContainer";
import projects from "../../data/projects";

const ProjectsSection = () => {
  return <CardsContainer data={projects} heading={"See our work in action"} />;
};

export default ProjectsSection;
