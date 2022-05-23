import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "../css/Header.css";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  const varHeader = useRef();

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scrollY = window.scrollY;
      scrollY > 180
        ? varHeader.current.classList.add("abc")
        : varHeader.current.classList.remove("abc");
    });
  }, []);

  return (
    <div className="header" ref={varHeader}>
      <div className="header__content">
        <div className="header__one">Nual</div>
        <div className="header__two">
          <div>
            <Link to="/Project">Projects</Link>
          </div>
          <div>
            <Link to="/Technologies">Technologies</Link>
          </div>
          <div>
            <Link to="/About">About</Link>
          </div>
          <div>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="header__three">
          <div>
            <i class="bx bxl-facebook"></i>
          </div>
          <div>
            <i class="bx bxl-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
