import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "../css/Header.css";

Header.propTypes = {};

function Header(props) {
  const varHeader = useRef();

  window.addEventListener("scroll", (event) => {
    let scrollY = window.scrollY;
    scrollY > 180
      ? (varHeader.current.style.background = "red")
      : (varHeader.current.style.background = "blue");
  });

  return (
    <div className="header" ref={varHeader}>
      <div className="header__content">
        <div className="header__one">Hoàng</div>
        <div className="header__two">
          <div>Hoàng</div>
          <div>Văn</div>
          <div>Luân</div>
          <div>1997</div>
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
