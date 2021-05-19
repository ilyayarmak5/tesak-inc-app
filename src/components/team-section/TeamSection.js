import React from "react";
import CardsContainer from "../cards/CardsContainer";
import experts from "../../data/experts";

const TeamSection = () => {
  return (
    <>
      <CardsContainer data={experts} heading={"Our team"} />
    </>
  );
};

export default TeamSection;
