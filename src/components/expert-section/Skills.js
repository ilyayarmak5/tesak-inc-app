import React from "react";
import { useData } from "../../data/DataProvider";

const Skills = () => {
  const { skills } = useData();
  return (
    <div className="expert-skills-container">
      <h2>My skills</h2>
      <ul className="expert-skills">
        {skills.map((skill, index) => {
          return <li key={index}>{React.createElement(skill, null)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
