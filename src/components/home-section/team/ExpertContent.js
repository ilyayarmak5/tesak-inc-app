import React from "react";
import ReadMoreBtn from "../../buttons/ReadMoreBtn";

const ExpertContent = ({
  expertContainerRef,
  expertRef,
  isOpened,
  text,
  url,
}) => {
  return (
    <div
      className={`${
        isOpened ? "expert-content show-expert-content" : "expert-content"
      }`}
      ref={expertContainerRef}
    >
      <div className="expert-desc" ref={expertRef}>
        <p>{text}</p>
        <ReadMoreBtn url={url} />
      </div>
    </div>
  );
};

export default ExpertContent;
