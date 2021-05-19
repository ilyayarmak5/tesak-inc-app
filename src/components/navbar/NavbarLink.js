import React from "react";

const NavbarLink = ({ text, showLinks, setShowLinks }) => {
  return (
    <h3 className="navbar-link" onClick={() => setShowLinks(!showLinks)}>
      {text}
    </h3>
  );
};

export default NavbarLink;
