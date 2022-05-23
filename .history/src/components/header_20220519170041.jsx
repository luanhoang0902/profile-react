import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "../css/Header.css";

header.propTypes = {};

function header(props) {
    window.addEventListener("scroll", (event) => {
        console.log(body.scrollTop)
    });

  return (
    <div className="header">
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

export default header;
