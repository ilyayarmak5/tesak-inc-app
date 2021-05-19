import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import LinksContainer from "./LinksContainer";
import logo from "../../assets/img/logo.png";

const btn = (
  <svg width="2rem" height="2rem" viewBox="0 0 100 100">
    <path
      className="line line1"
      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
    />
    <path className="line line2" d="M 20,50 H 80" />
    <path
      className="line line3"
      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
    />
  </svg>
);

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link
            to="/"
            className="logo-container"
            onClick={() => window.scrollTo(0, 0)}
            alt="logo"
          >
            <img src={logo} alt="logo" />
          </Link>
          <button
            className={showLinks ? "nav-toggle nav-btn-opened" : "nav-toggle"}
            onClick={() => setShowLinks(!showLinks)}
          >
            {btn}
          </button>
        </div>
        <LinksContainer
          linksRef={linksRef}
          linksContainerRef={linksContainerRef}
          showLinks={showLinks}
          setShowLinks={setShowLinks}
        />
      </div>
    </nav>
  );
};

export default Navbar;
