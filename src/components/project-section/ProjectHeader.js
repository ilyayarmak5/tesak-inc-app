import React from "react";
import { useData } from "../../data/DataProvider";

const ProjectHeader = () => {
  const { backgroundClr, header, image } = useData();
  return (
    <section
      className="project-section-title"
      style={{ background: backgroundClr }}
    >
      <h1>{header}</h1>
      <div className="project-section-img">
        <img src={image} alt="project-img" />
      </div>
    </section>
  );
};

export default ProjectHeader;
