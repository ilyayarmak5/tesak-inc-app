import React from "react";
import Fade from "react-reveal/Fade";

const SloganContainer = () => {
  return (
    <section className="slogan-container">
      <Fade cascade bottom>
        <h1 className="slogan-paragraph">WEBCREATE.</h1>
        <h1 className="slogan-paragraph">WEBAGENCY.</h1>
        <h1 className="slogan-paragraph">WEBINSPIRE.</h1>
      </Fade>
    </section>
  );
};

export default SloganContainer;
