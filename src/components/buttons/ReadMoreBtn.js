import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const ReadMoreBtn = ({ url }) => {
  return (
    <Link to={url}>
      <button className="read-more-btn">
        <p>Read More</p>
        <BsArrowRight className="read-more-arrow" />
      </button>
    </Link>
  );
};

export default ReadMoreBtn;
