import React from "react";
import PropTypes from "prop-types";

import "../css/Header.css";

header.propTypes = {};

function header(props) {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__one">Hoàng</div>
        <div className="header__two">
            <span>Hoàng</span>
            <span>Văn</span>
            <span>Luân</span>
            <span>1997</span>
        </div>
        <div className="header__three">
            <span>
                <i class='bx bxl-facebook'></i>
            </span>
            <span>
                <i class='bx bxl-github'></i>
            </span>
        </div>
      </div>
    </div>
  );
}

export default header;
