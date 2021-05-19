import React from "react";
import { Link } from "react-router-dom";

const ViewAllBtn = ({ url }) => {
  return (
    <Link to={url}>
      <button className="view-all-btn">
        <p>View All</p>
      </button>
    </Link>
  );
};

export default ViewAllBtn;
