import React from "react";
import { Link } from "react-router-dom";
import { links } from "./data";
import NavbarLink from "./NavbarLink";

const LinksContainer = ({
  linksRef,
  linksContainerRef,
  showLinks,
  setShowLinks,
}) => {
  return (
    <div
      className={
        showLinks ? "links-container show-links-container" : "links-container"
      }
      ref={linksContainerRef}
    >
      <ul className="links" ref={linksRef}>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>
                <NavbarLink
                  text={text}
                  showLinks={showLinks}
                  setShowLinks={setShowLinks}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinksContainer;
