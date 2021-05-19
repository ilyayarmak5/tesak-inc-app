import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import DynamicScrollToTop from "../DynamicScrollToTop";

const CardsContainer = ({ data, heading }) => {
  return (
    <div className="projects-section-container">
      <DynamicScrollToTop />
      <h1>{heading}</h1>
      <div className="projects-section-cards">
        {data.map((item) => {
          const { image, header, text, id, url } = item;
          return (
            <Link to={url} className="projects-section-card" key={id}>
              <Fade bottom cascade>
                <div className="projects-section-card-img">
                  <img src={image} alt="" />
                </div>
                <div className="projects-section-card-footer">
                  <h3>{header}</h3>
                  <p>{text}</p>
                </div>
              </Fade>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
