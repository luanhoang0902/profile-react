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
        <div className="header__one"><Link to="/" style = {{textDecoration: "none", color:'var(--gray)'}}>Nual</Link></div>
        <div className="header__two">
          <div>
            <Link to="/Projects" style = {{textDecoration: "none", color: 'var(--gray)'}}>Projects</Link>
          </div>
          <div>
            <Link to="/Technologies" style = {{textDecoration: "none", color: 'var(--gray)'}}>Technologies</Link>
          </div>
          <div>
            <Link to="/About" style = {{textDecoration: "none", color: 'var(--gray)'}}>About</Link>
          </div>
          <div>
            <Link to="/Contact" style = {{textDecoration: "none", color: 'var(--gray)'}}>Contact</Link>
          </div>
        </div>
        <div className="header__three">
          <a href="https://www.facebook.com/profile.php?id=100029577947626"> 
            <i class="bx bxl-facebook"></i>
          </a>
          <a href = 'https://github.com/luanhoang0902 '>
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
