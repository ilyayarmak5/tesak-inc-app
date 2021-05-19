import React from "react";
import TeamHeader from "./TeamHeader.js";
import Team from "./Team";

const TeamContainer = () => {
  return (
    <section className="our-team-container">
      <TeamHeader />
      <Team />
    </section>
  );
};

export default TeamContainer;
