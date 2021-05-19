import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const TeamHeader = () => {
  return (
    <Link to="/team" className="our-team-header">
      <h1>
        <Fade top cascade>
          Our team
        </Fade>
      </h1>
    </Link>
  );
};

export default TeamHeader;
