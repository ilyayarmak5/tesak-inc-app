import React from "react";

const ExpertToggle = ({ isOpened, setIsOpened, specialization }) => {
  return (
    <button
      className={`${
        isOpened ? "expert-header" : "expert-header expert-opened"
      }`}
      onClick={() => setIsOpened(!isOpened)}
    >
      <h3>{specialization}</h3>
      <span className="expert-toggle">
        <b></b>
        <b></b>
      </span>
    </button>
  );
};

export default ExpertToggle;
