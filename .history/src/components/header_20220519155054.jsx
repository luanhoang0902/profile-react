import React from "react";
import PropTypes from "prop-types";

import "../css/Header.css";

header.propTypes = {};

function header(props) {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__one">Hoàng</div>
        <div className="header__two">Văn</div>
        <div className="header__three">Luân</div>
      </div>
    </div>
  );
}

export default header;
