import React from "react";
import { useData } from "../../../data/DataProvider";
import Fade from "react-reveal/Fade";

const ProjectAbout = () => {
  const {
    client,
    website,
    year,
    backgroundClr,
    description,
    services,
  } = useData();
  return (
    <div className="project-section-about-grid">
      <div className="grid-item grid-item-1 project-section-details">
        <div className="project-details-info">
          <h4>Client Name</h4>
          <p>{client}</p>
          <h4>Website</h4>
          <p>{website}</p>
          <h4>Year</h4>
          <p className="project-details-website">{year}</p>
        </div>
      </div>
      <div className="grid-item grid-item-2 project-section-desc">
        <h2 style={{ borderBottom: `2px solid ${backgroundClr}` }}>
          <Fade top cascade>
            Description
          </Fade>
        </h2>
        {description.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
        <h2
          style={{
            marginTop: "1em",
            borderBottom: `2px solid ${backgroundClr}`,
          }}
        >
          <Fade top cascade>
            Services
          </Fade>
        </h2>
        {services.map((service, index) => {
          return <p key={index}>{service}</p>;
        })}
      </div>
    </div>
  );
};

export default ProjectAbout;
